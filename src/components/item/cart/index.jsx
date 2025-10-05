import { Button } from '../../button'
import { useEffect, useState } from 'react'
import { getSize } from '../../../services/api'
import { cartStore } from '../../../services/state'



const CartInfo = ({...props}) => {
    const { colors, cartId, onClick } = props

    const [size, setSize] = useState(null)

    useEffect(() => {
        getSize(colors[0].sizes[0])
            .then(size => setSize(size))
            .catch(() => cartStore.setError(true))
            .finally(() => cartStore.setLoading(false))
    },[colors])

    return(
        <div>
            <p className="price">Цена: {colors[0].price}</p>
            <p className="size">Цвет: {colors[0].name}</p>
            <p className="size">{size && `Размер: ${size.label} / ${size.number}`}</p>
            <Button onClick={() => onClick(cartId)}>Delete</Button>
        </div>
    )
}

export { CartInfo }
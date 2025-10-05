import './index.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from "../../services/api"
import { Loading } from '../../components/loading'
import { Button } from '../../components/button'
import { Carousel } from '../../components/carousel'
import { cartStore } from '../../services/state'
import { observer } from 'mobx-react'
import { Sizes } from '../../components/sizes'
import { Colors } from '../../components/colors'

const ItemDetails = observer(() => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    const resaultProduct = {
        id: product.id,
        name: product.name,
        colors: [ {...currentProduct, sizes: [selectedSize]} ]
    }

    useEffect(() => {
        setLoading(true);
            
        getProduct(id)
            .then(data => {
                setProduct(data);
                setSelectedColor(selectedColor ? selectedColor : data.colors[0].name)
                setCurrentProduct(selectedColor ? data.colors.find(el => el.name === selectedColor) : data.colors[0])
                setError(false);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [id, product, selectedColor]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return(
        <div className="details">
            <Carousel images={currentProduct.images}/>
            <div className="list-items__info">
                <h1 className="image__image-name">{product.name}</h1>
                <h2 className="image__image-name">{currentProduct.price}</h2>
                <Colors 
                    colors={product.colors}
                    selectedColor={selectedColor}
                    onChangeColor={setSelectedColor}
                />
                <Sizes 
                    currentProduct={currentProduct}
                    selectedSize={selectedSize}
                    onChangeSize={setSelectedSize}
                />
                <p className="image__image-name">{currentProduct.description}</p>
                <Button onClick={() => cartStore.addToCart({...resaultProduct})}>Add To Cart</Button>
            </div>
        </div>
    )
})

export { ItemDetails }
import './index.css'
import { observer } from 'mobx-react-lite'
import { cartStore } from '../../services/state'

const Header = observer(() => {
    return (
        <header className="header">
            <nav>
                <a href='/'>Главная</a>
                <a href='/cart' className="cart-icon">
                    Корзина_
                    {cartStore.totalItems > 0 && (
                        <span className="cart-count">{ cartStore.totalItems }</span>
                    )}
                </a>
            </nav>
        </header>
    )
})

export { Header }
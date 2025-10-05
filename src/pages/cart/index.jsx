import './index.css';
import { useEffect, useState } from 'react';
import { Item } from '../../components/item';
import { Loading } from '../../components/loading';
import { observer } from 'mobx-react';
import { cartStore } from '../../services/state';

const Cart = observer(() => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    cartStore.setLoading(true);
    cartStore
      .getCart()
      .then((data) => {
        setProducts(data);
        cartStore.setError(false);
      })
      .catch(() => cartStore.setError(true))
      .finally(() => cartStore.setLoading(false));
  }, [cartStore.cart]);

  if (cartStore.loading) return <Loading />;
  if (cartStore.error) return <div>Error: {cartStore.error}</div>;
  return (
    <div className="container__list">
      {products &&
        !cartStore.loading &&
        products.map((el) => (
          <Item key={el.cartId} {...{ ...el, onClick: cartStore.DeleteFromCart }} />
        ))}
    </div>
  );
});

export { Cart };

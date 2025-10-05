import './index.css';
import { CartInfo } from './cart';

const Item = ({ ...props }) => {
  const { id, name, colors, cartId } = props;
  return (
    <div>
      <a href={`/item/${id}`} className="list-item">
        <img src={colors[0]?.images[0]} alt="item" className="list-item image" />
        <h1 className="image__image-name">{name}</h1>
      </a>
      {cartId && <CartInfo {...props} />}
    </div>
  );
};

export { Item };

import './index.css';
import { useEffect, useState } from 'react';
import { getSizes } from '../../services/api';
import { Checkbox } from '../checkbox';

const Sizes = ({ ...props }) => {
  const { currentProduct, selectedSize, onChangeSize } = props;

  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    getSizes().then((res) => setSizes(res));
  }, [sizes]);

  return (
    <div className="sizes">
      {sizes.map((el) => {
        const isDisabled = currentProduct.sizes.includes(el.id);
        return (
          <Checkbox
            key={el.id}
            disabled={isDisabled}
            label={el.label}
            number={el.number}
            type="default"
            isSelected={selectedSize === el.id}
            onChange={!isDisabled && onChangeSize}
            value={el.id}
          />
        );
      })}
    </div>
  );
};

export { Sizes };

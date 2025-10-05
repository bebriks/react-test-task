import './index.css'
import { Checkbox } from '../checkbox';
import { colorTranslations } from '../../services/const'

const Colors = ({ ...props }) => {
    const { colors, selectedColor, onChangeColor } = props

    return (
        <div className="colors">
            {colors.map((color) => {
                return (
                <Checkbox
                    key={color.id}
                    label={colorTranslations[color.name].en}
                    type="color"
                    isSelected={selectedColor === color.name}
                    onChange={onChangeColor}
                    value={color.name}
                />)
            })}
        </div>
    )
}

export { Colors }
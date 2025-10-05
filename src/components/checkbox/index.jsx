import './index.css';

const Checkbox = ({ ...props }) => {
  const { label, number, type = 'default', isSelected, onChange, value, disabled } = props;

  const handleClick = () => {
    if (onChange) {
      onChange(value || label);
    }
  };

  return (
    <label
      className={`checkbox-container ${type} ${isSelected && !disabled ? 'selected' : ''} ${disabled && 'disabled'}`}
      onClick={handleClick}
    >
      <input type="radio" checked={isSelected} onChange={() => {}} />
      {type === 'color' ? (
        <span className="color-option" style={{ backgroundColor: label }} title={label} />
      ) : (
        <span className="checkmark">{label}</span>
      )}
      {number && <span className="checkbox-label">{number}</span>}
    </label>
  );
};

export { Checkbox };

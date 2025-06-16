import React from 'react';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
        };
      case 'secondary':
        return {
          backgroundColor: '#f1f1f1',
          color: '#333',
          border: '1px solid #ddd',
        };
      case 'danger':
        return {
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
        };
      default:
        return {};
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'small':
        return {
          padding: '6px 12px',
          fontSize: '14px',
        };
      case 'medium':
        return {
          padding: '8px 16px',
          fontSize: '16px',
        };
      case 'large':
        return {
          padding: '10px 20px',
          fontSize: '18px',
        };
      default:
        return {};
    }
  };

  const buttonStyles: React.CSSProperties = {
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.7 : 1,
    width: fullWidth ? '100%' : 'auto',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
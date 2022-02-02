import { ButtonHTMLAttributes } from 'react'

import './Button.css'

// informamos que o ButtonProps deve receber todas as propriedades
// que um botão do React tem, mais as propriedades que nós estamos definindo
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium'
  fullWidth?: boolean
  onClick: () => void
}

export const Button = ({
  children,
  // aqui definimos o valor padrão das propriedades opcionais,
  // se nada for passado para o componente esses valores serão utilizados
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button button-${variant}  button-${size} ${
        fullWidth ? 'button-fullWidth' : ''
      }`}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}

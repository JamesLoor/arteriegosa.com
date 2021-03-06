import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  width?: string | number
  loading?: boolean
  disabled?: boolean,
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonProps>`
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  padding: 12px 30px;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px rgba(0, 49, 16, 0.35);
  color: ${({ theme }) => theme.colors.secundaryLight};
  width: ${({ width }) => width ? `${width}px` : 'max-content'};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  transition: background-color .2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundaryDark};
  }
`

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  active,
  type,
  width,
  loading,
  disabled,
  onClick,
}) => {

  if(href) {
    return (
      <Link href={href}>
        <ButtonStyled
          aria-pressed={active}
          className={className}
          disabled={disabled}
          width={width}
          type={type}
          loading={loading}
        >
          {children}
        </ButtonStyled>
      </Link>
    )
  }

  return (
    <ButtonStyled
      aria-pressed={active}
      className={className}
      disabled={disabled}
      width={width}
      type={type}
      loading={loading}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button

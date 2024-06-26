import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    RED = 'red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: string
}

export const Button: FC<ButtonProps> = ({ className, theme, ...otherProps }: ButtonProps) => {
    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
        </button>
    )
}

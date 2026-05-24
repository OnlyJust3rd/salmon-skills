import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'secondary'
type ButtonSize = 'default' | 'sm' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  children,
  className,
  size = 'default',
  variant = 'default',
  ...props
}: PropsWithChildren<ButtonProps>) {
  const variantClasses: Record<ButtonVariant, string> = {
    default: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]',
    outline:
      'border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)_/_0.1)]',
    ghost: 'bg-transparent text-[hsl(var(--foreground))]',
    secondary: 'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]',
  }
  const sizeClasses: Record<ButtonSize, string> = {
    default: 'min-h-10 px-3.5',
    sm: 'min-h-[34px] px-2.5',
    icon: 'min-h-10 w-10 p-0',
  }
  const classes = [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius)] border border-transparent font-bold leading-none transition-[background-color,border-color,color,transform] duration-150 ease-out hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}

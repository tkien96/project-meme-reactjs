import cls from 'classnames'

export default function Button ({
  type = 'default',
  size,
  as = 'button',
  htmlType,
  className,
  children,
  onClick,
  ...restProps
}) {
  const classes = cls('ass1-btn', {
    'load-more': type === 'loadmore',
    'ass1-header__btn-upload': type === 'header'
  }, className)

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...restProps
  }

  if (as === 'a') {
    return (
      <a {...injectedProps}>{ children }</a>
    )
  }

  return (
    <button {...injectedProps}>{ children }</button>
  )
}
import cls from 'classnames'
import Icon from '../Shared/Icon'

export default function Button ({
  type = 'default',
  as = 'button',
  htmlType,
  className,
  children,
  icon,
  iconPos,
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
      <a {...injectedProps}>
        {iconPos === 'left' && <Icon className={icon} />}
        { children }
        {iconPos === 'right' && <Icon className={icon} />}
      </a>
    )
  }

  return (
    <button {...injectedProps}>{ children }</button>
  )
}
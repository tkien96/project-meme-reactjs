import cls from 'classnames'
import { Link } from 'react-router-dom'
import Icon from '../Shared/Icon'
import IconLoading from '../Shared/IconLoading'

export default function Button ({
  type = 'default',
  as = 'button',
  htmlType,
  className,
  children,
  icon,
  iconPos,
  loading,
  loadingPos = 'left',
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

  const content = (
    <>
      {loading && loadingPos === 'left' && <IconLoading width="20" />}
      {children}
      {loading && loadingPos === 'right' && <IconLoading width="20" />}
    </>
  )

  if (as === 'a') {
    return (
      <Link {...injectedProps}>
        {iconPos === 'left' && <Icon className={icon} />}
        { content }
        {iconPos === 'right' && <Icon className={icon} />}
      </Link>
    )
  }

  return (
    <button {...injectedProps}>{ content }</button>
  )
}
import cls from 'classnames'
import { useState } from 'react'
import Icon from '../Shared/Icon'

export default function Input ({
    type = 'text',
    className,
    error,
    isShowError = true,
    ...restProps
}) {
    const [localType, setLocalType] = useState(type)

    if(type === 'search'){
        return (
            <label>
                <input type="text" className={className} {...restProps} />
                <Icon className="icon-Search" />
            </label>
        )
    }

    return (
        <input type={localType} className={className} {...restProps} />
    )
}
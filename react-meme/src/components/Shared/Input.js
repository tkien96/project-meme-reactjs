import cls from 'classnames'
import { useState } from 'react'
import Icon from '../Shared/Icon'

export default function Input({
    typeForm,
    type = 'text',
    className,
    error,
    isShowError = true,
    children,
    ...restProps
}) {
    const [localType, setLocalType] = useState(type)

    // function handleToggleShowPwd() {
    //     if (localType === 'password') {
    //         setLocalType('text')
    //     } else if (localType === 'text') {
    //         setLocalType('password')
    //     }
    // }

    function handleCopy() {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied");
    }

    function showError() {
        error && isShowError && ( <div className="form-control__error">{error}</div> )
    }

    if (typeForm === 'search') {
        return (
            <label>
                <input type="text" className={className} {...restProps} />
                <Icon className="icon-Search" />
            </label>
        )
    }

    if (typeForm === 'copy') {
        return (
            <div className="ass1-input-copy">
                <input id="password" type="password" className={className} {...restProps} />
                <a onClick={handleCopy}>Copy</a>
            </div>
        )
    }

    if (typeForm === 'select') {
        return (
            <select className={className} {...restProps}>
                <option value="">Giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
            </select>
        )
    }

    if (typeForm === 'textarea') {
        return (
            <textarea className={className} {...restProps}></textarea>
        )
    }

    if (typeForm === 'checkbox') {
        return (
            <label className="ass1-checkbox">
                <input type="radio" className={className} {...restProps} />
                <span />
                <p>{children}</p>
            </label>
        )
    }

    return (
        <input type={localType} className={className} {...restProps} />
    )
}
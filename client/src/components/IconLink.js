import React from 'react'
import { Link } from 'react-router-dom'

function IconLink({href, iconName, children, ...rest}) {
    return (
        <div className="icon-link" {...rest}>
            <i className={iconName}/>
            <Link to={href}>{children}</Link>
        </div>
    )
}

export default IconLink

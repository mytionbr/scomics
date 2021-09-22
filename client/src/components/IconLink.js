import React from 'react'
import { Link } from 'react-router-dom'

function IconLink({href, iconName, children}) {
    return (
        <div className="icon-link">
            <i className={iconName}/>
            <Link to={href}>{children}</Link>
        </div>
    )
}

export default IconLink

import { NavLink } from 'react-router-dom'


export const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink aria-current='page' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Log in</NavLink>
            </li>
            <li>
                <NavLink to='/contacts'>Contacts</NavLink>
            </li>
            
        </ul>
    )
}
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from 'api/auth'


export const Navigation = () => {
    const dispatch = useDispatch()
    return (
        <>
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
            <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
</>
    )
}
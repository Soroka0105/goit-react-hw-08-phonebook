import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from 'api/auth'
import { selectIsLoggedIn } from '../../redux/selectors'
import css from './navigation.module.css'



export const Navigation = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <>
            <nav className={css.nav }>
                <NavLink className={css.link} to='/'>Home</NavLink>
                {isLoggedIn && (<NavLink className={css.link} to='/contacts'>Contacts</NavLink>)}
            </nav>
            {isLoggedIn && <button className={css.logoutbtn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> }
            
</>
    )
}
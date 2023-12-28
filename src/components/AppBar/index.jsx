import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/selectors"
import { Navigation } from "components/Navigation"
import { UserMenu } from "components/UserMenu"
import { AuthNav } from "components/AuthNav"
import css from './AppBar.module.css'

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <>
        <header className={css.header}>
            <Navigation />
            {isLoggedIn? <UserMenu/> : <AuthNav/> }
        </header>
            <h1 className={css.maintext}>Hello and welcome to the contact list</h1>
            </>
    )
}
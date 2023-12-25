import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/Navigation/index'


export const Layout = () => {
    return (
        <>
        <Navigation />
            <Outlet />
            </>
    )
}
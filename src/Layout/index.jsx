import { Outlet } from 'react-router-dom'

import { UserMenu } from 'components/UserMenu'


export const Layout = () => {
    return (
        <>
            <UserMenu/>
            <Outlet />
            </>
    )
}
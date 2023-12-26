import { RegistrationPage } from 'Pages/RegistrationPage';
import { Navigation } from 'components/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';

export const UserMenu = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <>
            {isLoggedIn ? <Navigation /> : <RegistrationPage />}
            
        </>
)

}
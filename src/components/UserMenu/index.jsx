
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import css from './index.module.css'

export const UserMenu = () => {
    const user = useSelector(selectUser)


    return (
        <>
            <div className={css.wrapper}>
                <p className={css.username}>Welcome</p>
                <p className={css.username}>{user.email}</p>
                
            </div>
           
            
        </>
)

}
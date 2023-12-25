import { FormRegistration } from "components/Forms/FormRegistration"
import { useDispatch } from 'react-redux'
import { registration } from "api/auth"

export const RegistrationPage = () => {
    
    const dispatch = useDispatch()
    const register = (body) => {
        dispatch(registration(body))
    }

    return <FormRegistration register={register}/>
}
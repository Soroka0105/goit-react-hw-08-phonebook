import { useDispatch } from "react-redux"
import { addFilter } from "../../redux/contactSlice"
import css from './filter.module.css'
export const Filter = ({ value, onChange }) => {
    const dispatch = useDispatch()
    
    const handleChange = evt => {
        const value = evt.currentTarget.value
        dispatch(addFilter(value))
    }

    return(
        
            <div className={css.container}>
            <p>Find contacts by name</p>
                <input className={css.formstyling} type="text" onChange={handleChange} />
                </div>
        
            
    )
}

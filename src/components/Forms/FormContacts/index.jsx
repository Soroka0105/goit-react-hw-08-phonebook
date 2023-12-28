import { addContact } from 'api/contacts'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import css from './contactform.module.css'
export const ContactsForm = (fu) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()
    const reset = () => {
        setName('')
        setPhone('')
      
    }

      const handleSubmit = (e) => {
		e.preventDefault()
          dispatch(addContact({ name, number:phone }))
        reset()
	}
    const handleNameChange = evt => {
        setName(evt.currentTarget.value)
    }
    const handlePhoneChange = evt => {
        setPhone(evt.currentTarget.value)
    }

    
    return (
        <form className={css.addcontactform} onSubmit={handleSubmit}>
            <label htmlFor="exampleInputName">Name</label>
            <input className={css.formstyling} value={name} type="text" name='name' onChange={handleNameChange} required />
            <label htmlFor="exampleInputNumber">Phone Number</label>
                <input className={css.formstyling} value={phone} type="tel" name='phone' onChange={handlePhoneChange} required/>
                <button className={css.submitbtn} type='submit'>Add Contact</button>
            </form>
        )
    

}
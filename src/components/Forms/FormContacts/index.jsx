import { addContact } from 'api/contacts'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import css from './contactform.module.css'
import { selectContacts } from '../../../redux/selectors'
export const ContactsForm = (fu) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("")
    const contactList = useSelector(selectContacts)
    const dispatch = useDispatch()
    const reset = () => {
        setName('')
        setPhone('')
      
    }

      const handleSubmit = (e) => {
          e.preventDefault()
          const equalName = contactList.find(elm => elm.name.toLowerCase() === name.toLowerCase())
          if (equalName) return alert(`${equalName.name} is already in contacts`)
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
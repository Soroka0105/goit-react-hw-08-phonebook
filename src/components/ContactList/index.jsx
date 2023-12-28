import { ContactElement } from "components/ContactElement"
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { ContactsForm } from './../Forms/FormContacts/index';
import { selectIsLoading, selectError} from "../../redux/selectors";
import { Filter } from "components/Filter";
import { fetchContacts } from "../../api/contacts";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import css from './contactlist.module.css'
export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

 

  useEffect(() => {
    dispatch(fetchContacts())
  
  }, [dispatch])
    
    return (
    
        <div className={css.container}>
       <NavLink className={css.backlink} to='/'>Back</NavLink>
       <ContactsForm />
       <Filter/>
       <h3 className={css.text}>Contacts</h3>
       {isLoading && !error && <b>Request in progress...</b>}
      <ul className={css.list}>
        {contacts.map(el => (
           <ContactElement key = {el.id} elm ={el}/>
       ))}
       
          </ul>
          </div>
     
    )
}
import { ContactElement } from "components/ContactElement"
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { ContactsForm } from './../Forms/FormContacts/index';
import { selectIsLoading, selectError} from "../../redux/selectors";
import { Filter } from "components/Filter";
import { fetchContacts } from "../../api/contacts";
import { useEffect } from "react";
export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

 

  useEffect(() => {
    dispatch(fetchContacts())
  
  }, [dispatch])
    
    return (
    <>
<ContactsForm />
      <Filter/>
      <h2>Contacts</h2>
    {isLoading && !error && <b>Request in progress...</b>}
    <ul>
        {contacts.map(el => (
           <ContactElement key = {el.id} elm ={el}/>
       ))}
       
            </ul>
            </>
    )
}
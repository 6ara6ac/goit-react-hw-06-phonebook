import { List, Item } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux"
import { getContacts, getFilter } from "redux/selectors"
import { deleteContact } from "redux/contactsSlice";
import { useMemo } from "react";

export const ContactList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()


  const fileredContacts = useMemo(() => {
    if(filter === '' || !filter) {
      return contacts;
    }
    else{
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase())
      })
    }
  },[contacts,filter])
  

    
  
    return <List>
    {fileredContacts.map(({id, name, number})=>{
      return <Item key={id}>{name}: {number}
    <button onClick={() => dispatch(deleteContact(id))}>Delete</button></Item>})}
    </List>
}


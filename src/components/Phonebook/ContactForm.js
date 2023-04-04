
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { Formik, Form, Field } from "formik"
import { Button, Label } from "./ContactForm.styled";
import { addContacts } from "redux/contactsSlice";


export const ContactForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)
    
    const handleSubmit = (values, actions) => {
      const {name, number} = values
      const alreadyContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
      if (alreadyContact) {
        return alert (`${name} is alredy in phonebook`);
      }
      dispatch(addContacts(values))
      actions.resetForm()
  }

          
       return <>
      <Formik initialValues={{name: '', number: ''}} onSubmit={ handleSubmit } >
        <Form>
            <Label htmlFor="name">Name</Label>
          <Field 
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <Label htmlFor="number">Number</Label>
        <Field
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
    
      />
            <Button type="submit">Add contact</Button>
        </Form>
    </Formik>
   
    </>

      
}

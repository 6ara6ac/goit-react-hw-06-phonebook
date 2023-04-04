import { ContactForm } from "./Phonebook/ContactForm";
import { ContactList } from "./ListContacts/ContactList";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";



export const App = () => {
    
  return <> 
  <Section mainTitle={'Phonebook'}>
  <ContactForm />
  </Section>
  <Section title={'Contacts'}>
  <Filter/>
  <ContactList />
  </Section>
  </>
};

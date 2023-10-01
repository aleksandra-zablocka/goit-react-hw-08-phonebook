import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import Form from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';


const Contacts = () => {
  const dispatch = useDispatch();
  
useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch])

  return (
    <div>
    <Helmet>
      <title>Your contacts</title>
    </Helmet>
    <Form />
    <ContactList/>
    </div>
  );
};

export default Contacts
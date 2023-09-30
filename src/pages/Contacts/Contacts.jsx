import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();

  return (
    <div>
    <Helmet>
      <title>Your contacts</title>
    </Helmet>
    <ContactList/>
    </div>
  );
};

export default Contacts
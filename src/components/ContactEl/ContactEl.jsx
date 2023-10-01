import { deleteContact } from 'redux/contacts/operations';
import css from './ContactEl.module.css';
import { useDispatch } from 'react-redux';

const ContactEl = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactEl}>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ContactEl;

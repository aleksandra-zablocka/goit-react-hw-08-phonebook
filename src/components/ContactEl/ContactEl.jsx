import { deleteContact } from 'redux/contacts/operations';
import css from './ContactEl.module.css';
import { useDispatch } from 'react-redux';
import { ReactComponent as PhoneIcon } from 'images/phone.svg';

const ContactEl = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactEl}>
      <a href={`tel:${contact.number}`}>
        <PhoneIcon className={css.phoneIcon} />
      </a>
      <p className={css.contactInfo}>{contact.name}</p>
      <p className={css.contactInfo}>{contact.number}</p>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ContactEl;

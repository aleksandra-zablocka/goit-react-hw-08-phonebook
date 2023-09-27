import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations/operations';
// import Form from './Form/Form';
import Home from './Home/Home';
// import ContactList from './ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // console.log('contacts:', contacts);

  return (
    <div className={css.container}>
      <div className={css.phoneBook}>
        <Home/>
        {/* <Form />
        <ContactList /> */}
      </div>
    </div>
  );
}

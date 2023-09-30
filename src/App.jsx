// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations/operations';
// import Home from '../pages/Home/Home';
// import css from './App.module.css';

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   // console.log('contacts:', contacts);

//   return (
//     <div className={css.container}>
//       <div className={css.phoneBook}>
//         <Home/>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { useAuth } from 'hooks/useAuth';
import Layout from 'components/Layout/Layout';

const HomePage = React.lazy(() => import('./pages/Home/Home.jsx'));
const LoginPage = React.lazy(() => import('./pages/Login/Login.jsx'))
const RegistrationPage = React.lazy(() => import('./pages/Registration/Registration.jsx'))
const ContactsPage = React.lazy(() => import('./pages/Contacts/Contacts.jsx'))

export default function App() {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
}

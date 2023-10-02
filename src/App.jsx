import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Layout from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations.js';
import { BarLoader } from 'react-spinners';
import css from './App.module.css'

const HomePage = React.lazy(() => import('./pages/Home/Home.jsx'));
const LoginPage = React.lazy(() => import('./pages/Login/Login.jsx'));
const RegistrationPage = React.lazy(() =>
  import('./pages/Registration/Registration.jsx')
);
const ContactsPage = React.lazy(() => import('./pages/Contacts/Contacts.jsx'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.loaderContainer}>
     <BarLoader color="rgb(1, 117, 34)"/>
      <p className={css.refreshing}>Refreshing user...</p>
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

import { React } from 'react';
import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch();
    //TODO: add function
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.input} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" />
      </label>
      <label className={css.label}>
        Repeat Password
        <input className={css.input} type="password" name="password" />
      </label>
      <div className={css.requirements}>
        <ul>
          <b>Password must contain at least:</b>
          <li>6 characters</li>
          <li>one uppercase letter</li>
          <li>one lowercase letter</li>
          <li>one digit (number)</li>
          <li>one special character (e.g., !@#$%)</li>
        </ul>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

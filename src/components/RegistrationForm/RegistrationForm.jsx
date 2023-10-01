import { React } from 'react';
import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';
import { register } from 'redux/auth/operations';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.password.value !== form.elements.passwordRepeated.value) {
      toast.error('Please repeat the same password');
      return;
    }

    // const password = form.elements.password.value;
    // const hasUpperCase = /[A-Z]/.test(password);
    // const hasDigit = /[0-9]/.test(password);
    // const hasSpecialChar = /[!@#$%^&*()+=._-]/.test(password);

    // if (password.length < 6 || !hasUpperCase || !hasDigit || !hasSpecialChar) {
    //   toast.error('Please enter correct password');
    //   return;
    // }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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
        <input className={css.input} type="password" name="passwordRepeated" />
      </label>
      {/* <div className={css.requirements}>
        <ul>
          <b>Password must contain at least:</b>
          <li>6 characters</li>
          <li>one uppercase letter</li>
          <li>one lowercase letter</li>
          <li>one digit (number)</li>
          <li>one special character (e.g., !@#$%)</li>
        </ul>
      </div> */}
      <button className={css.btnRegister} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;

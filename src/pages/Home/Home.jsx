import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactComponent as AddContactIcon } from 'images/user-plus.svg';
import { ReactComponent as Contacts } from 'images/users.svg';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
       </Helmet>
      <div className={css.home}>
        <h1>
          Welcome to <span>Keep In Touch!</span>
        </h1>
        <p className={css.description}>
          The best app to keep all your contacts in one place
        </p>
        <div className={css.buttons}>
          <Link className={css.btnHome} to="/login">
            Log In
          </Link>
          <Link className={css.btnHome} to="/register">
           Register
          </Link>
        </div>
        <div className={css.phones}>
          <div className={css.phone1}>
            <div className={css.details1}>
              <h3>
                <AddContactIcon className={css.addIcon} />
                Add Contact
              </h3>
            </div>
            <br />
            <p>Name</p>
            <p>Number</p>
            <button className={css.btnHome}>Add</button>
          </div>
          <div className={css.phone2}>
            <div className={css.details2}>
              <h3>
                <Contacts className={css.contactsIcon} />
                Contact List
              </h3>
            </div>
            <p>Anastasia</p>
            <p>Anna</p>
            <p>Michael</p>
            <p>Oscar</p>
            <p>Zack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

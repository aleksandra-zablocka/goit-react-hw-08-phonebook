import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.home}>
      <h1>
        Welcome to <span>Keep In Touch!</span>
      </h1>
      <p>This is the best app to keep all your contacts in one place</p>
      <div className={css.buttons}>
        <button>Log In</button>
        <button>Register</button>
      </div>
      <div className={css.phones}>
        <div className={css.phone1}>
          <div className={css.details1}>Add Contact</div>
          <p>Name</p>
          <p>Number</p>
        </div>
        <div className={css.phone2}>
          <div className={css.details2}>Contact List</div>
          <p>Anastasia</p>
          <p>Anna</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

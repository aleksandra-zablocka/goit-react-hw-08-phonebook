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
          <div className={css.details1}><h3>Add Contact</h3></div>
          <br />
          <p>Name</p>
          <p>Number</p>
          <button>Add</button>
        </div>
        <div className={css.phone2}>
          <div className={css.details2}><h3>Contact List</h3></div>
          <p>Anastasia</p>
          <p>Anna</p>
          <p>Michael</p>
          <p>Oscar</p>
          <p>Zack</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
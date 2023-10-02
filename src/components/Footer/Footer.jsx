import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <p className={css.copyright}>&copy; 2023 <b>Keep In Touch!</b></p>
    </footer>
  );
};

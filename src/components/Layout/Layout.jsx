import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <div className={css.container}>
        <div className={css.wrapper}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;

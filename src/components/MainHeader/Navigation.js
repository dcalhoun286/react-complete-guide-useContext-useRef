import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context.js';

import classes from './Navigation.module.css';

const Navigation = () => {
  
  // AuthContext.Consumer wraps around any components that subscribes to context changes. In this case, we want to render the nav bar jsx below only if ctx.isLoggedIn returns true (when the user is logged in)

  const ctx = useContext(AuthContext);

  return (

    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>

  );
};

export default Navigation;

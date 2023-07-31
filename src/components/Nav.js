import logo from '../assets/images/logo.jpeg';
import Account from './Account';
import classes from '../styles/Nav.module.css';
import {Link} from 'react-router-dom';

export default function Nav(){
  return (
    <nav className={classes.nav}>
      <ul> 
        <li>
          <Link to="/" className={classes.brand}>
            <img className={classes.logo} src={logo} alt="logo이미지" />
            <h3>기출 문제 사이트</h3>
          </Link>
        </li> 
      </ul>
      <Account />
    </nav>
  );
}
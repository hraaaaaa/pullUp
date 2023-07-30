import logo from '../assets/images/logo.jpeg';
import Account from './Account';
import classes from '../styles/Nav.module.css';

export default function Nav(){
  return (
    <nav className={classes.nav}>
      <ul> 
        <li>
          <a href="index.html" className={classes.brand}>
            <img className={classes.logo} src={logo} alt="logo이미지" />
            <h3>기출 문제 사이트</h3>
          </a>
        </li> 
      </ul>
      <Account />
    </nav>
  );
}
import classes from '../styles/Acoount.module.css';
import {Link} from 'react-router-dom';

export default function Account(){
  return (
    <div className={classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signup">회원가입</Link>
        <Link to="/login">로그인</Link>
        {/* <span className ="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
  );
}
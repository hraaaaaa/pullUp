import signupImage from '../assets/images/signup.svg';
import classes from '../styles/Signup.module.css';


export default function Illustration(){
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="회원가입"/>
    </div>
  );
}
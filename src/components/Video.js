import image from '../assets/images/logo.jpeg';
import classes from "../styles/Video.module.css";


 
export default function Video(){
  return(
    <a href="quiz.html">
            <div className={classes.video}>
              <img src={image} alt="Video Title" />
              <p>어떤 문제를 풀어볼까</p>
              <div className={classes.qmeta}>
                <p>문제 갯수 표시</p>
                <p>점수 : 아직풀지않음</p>
              </div>
            </div>
          </a>
  );
}
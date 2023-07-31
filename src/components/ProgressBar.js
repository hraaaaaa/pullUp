import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar(){
  return(
    <div className={classes.progressBar}>
      <div className={classes.backButton}> 
        <span className='material-icons-outlined'>arrow_back</span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Complete!</div>
      </div>
      <div className={classes.rangeBody}>
        <div className={classes.progress} style={{width:'20%'}}></div>
      </div>
      <a href="result.html">
        <Button className={classes.next}>
          <span>다음 문제</span>
          <span className='material-icons-outlined'>arrow_forward</span>
        </Button>
      </a>
    </div>
  );
}
import classes from '../styles/TextInput.module.css';

export default function TextInput({icon, ...rest}){
  return(
    <div class={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

export default function Login(){
  return(
    <>
    <h1>아이디로 로그인하세요</h1>
    <div className='column'>
      <Illustration/>
      <Form className={`${classes.login}`}>
        <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
        <TextInput type="password" placeholder="Enter pass" icon="lock" />
        <Button><span>지금 제출하기</span></Button>
        <div className='infor'>아이디가 없습니까?<a href="signup.html">회원가입</a></div>
      </Form>
    </div>
    </>
  );
}
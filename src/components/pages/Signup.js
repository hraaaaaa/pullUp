import Form from "../Form";
import Illustration from "../Illustration";
import classes from '../../styles/Signup.module.css';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';

export default function Signup(){
  return(
    <>
      <h1>회원 가입</h1>
      <div className={classes.column}>
        <Illustration />
        <Form method="post" className={`${classes.signup}`}>
          <TextInput type="text" placeholder="enter name" icon="person" />
          <TextInput type="text" placeholder="enter email" icon="alternate_email" />
          <TextInput type="password" placeholder="enter password" icon="lock" />
          <TextInput type="password" placeholder="confirm password" icon="lock_clock" />

          <Checkbox text="조항에 동의합니다."/>
          <Button><span>지금 제출하기</span></Button>

          <div className="info">
            이미 계정이 있으십니까?<a href="login.html">로그인</a>하기
          </div>
        </Form>
      </div>
    </>
  );
}
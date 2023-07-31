import Answers from '../Answers';
import ProgressBar from '../ProgressBar';
import MiniPlayer from '../MiniPlayer';


export default function Quiz(){
  return(
    <>
    <h1>가장 좋아하는 스타워즈 영화 3개를 골라보세요.</h1>
    <h4>답은 여러개 선택할 수 있습니다.</h4>
    <Answers />
    <ProgressBar />
    <MiniPlayer />
    </>
  );
}
import React, { useState } from "react";
import AppRouter from "./AppRouter";
//import IntroContainer from "./Pages/Intro";
function App() {
  //  const [code,setCode]=useState('')
  //1 여기서 만든 상태변수를 ->props로 intro로 넘겨줌
  //2 intro-container 에서
  //버튼을 눌렀을때 setCoted에(random코드 생성)
  //new Date().getTime().toString(36);
  //3 appRouter 에서 props로 받고
  //<Router>-<Routes>-안에
  //조건으로 code의 길이가 0이상이면 다른 것들도 보이게
  //여기서 코드를 다 넘겨줌<ListContainer code={code}>
  //else intro만 보이게
  //const [code, setCode] = useState("");

  return (
    //  <IntroContainer code={code} setCode={setCode} />
    <AppRouter />
  );
}

export default App;

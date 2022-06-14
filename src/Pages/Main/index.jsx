import React from "react";
import Button from "../../Component/Button";
import CheckBox from "../../Component/CheckBox";
import InfoBox from "../../Component/InfoBox";
import Title from "../../Component/Title";
import "./style.css";
function Main() {
  return (
    <div>
      <body>
        <div class="container">
          <div id="bar">1</div>
          <Title />
          <InfoBox />
          <CheckBox />
          <Button />
        </div>
      </body>
    </div>
  );
}
export default Main;

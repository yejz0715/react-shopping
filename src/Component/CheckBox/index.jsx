import "./style.css";
function CheckBox(props) {
  return (
    <div>
      <div>
        <label>{props.name}</label>
        <img />
        <label>{props.price}</label>
        {/* 태그사이에 있는 내용을 보여줄때 props.children 사용 */}
      </div>
    </div>
  );
}
export default CheckBox;

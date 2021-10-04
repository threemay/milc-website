import style from "./index.scss";

if (module && module.hot) {
  module.hot.accept();
}

const ele = document.querySelector("#root");

const newEle = document.createElement("div");
newEle.className = style.ele;
newEle.innerHTML = "test css module";
ele.appendChild(newEle);

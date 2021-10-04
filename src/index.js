if (module && module.hot) {
  module.hot.accept();
}

const ele = document.querySelector("#root");
ele.innerHTML = "config test";

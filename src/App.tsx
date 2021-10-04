import React from "react";
import style from "./app.scss";
import Test from "components/Test";

const App: React.FC<any> = () => {
  return (
    <div className={style.app}>
      <Test text="config test" project="MILC" />
    </div>
  );
};

export default App;

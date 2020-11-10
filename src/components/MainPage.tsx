import React from "react";
import Aside from "./Aside";
import Header from "./Header";
type Props = {};
const MainPage: React.FC<Props> = () => {
  return (
    <div>
      <Header pageTitle="Избранное" />
      <Aside />
      <div>main</div>
    </div>
  );
};

export default MainPage;

// src/components/HomeHeader.js
import React from "react";
import { Firework } from "../components/Firework";
import ME from "../assets/images/me.png";

const HomeHeader = ({ onFire }) => {
  return (
    <header className="App-header">
      <Firework />
      <h1 className="Title">지민 홈피에 오신걸 환영합니다!</h1>
      <div className="ImgWrapper hvr-grow ban-drag" onClick={onFire}>
        <img src={ME} className="App-logo" alt="logo" />
      </div>
      <p>Hello Everyone!</p>
      업데이트 준비중 ~.~ 기대해주세요~ㅎㅎ<p className="tip">사진을 눌러보세요</p>
    </header>
  );
};

export default HomeHeader;

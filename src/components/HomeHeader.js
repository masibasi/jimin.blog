// src/components/HomeHeader.js
import React from "react";
import { Firework } from "../components/Firework";

const HomeHeader = ({ onFire }) => {
  return (
    <header className="App-header">
      <Firework />
      <h1 className="Title">Welcome to my Homepage</h1>
      업데이트 준비중 ~.~ 기대해주세요~ㅎㅎ<p className="tip">사진을 눌러보세요</p>
    </header>
  );
};

export default HomeHeader;

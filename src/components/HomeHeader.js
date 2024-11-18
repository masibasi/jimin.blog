// src/components/HomeHeader.js
import React from "react";
import { Firework } from "../components/Firework";

const HomeHeader = ({ onFire }) => {
  return (
    <header className="App-header">
      <Firework />
      <h1 className="Title">Ji Min Lee</h1>
      Welcome to my homepage!<p className="tip">사진을 눌러보세요</p>
    </header>
  );
};

export default HomeHeader;

// components/SplashScreen.js
import React from 'react';
import { Spin } from 'antd';
// import 'antd/dist/antd.css';
// import './SplashScreen.css';

const SplashScreen = ({size}) => {
  return (
    <div className="splash-screen">
      <Spin size={size} />
     
    </div>
  );
};

export default SplashScreen;
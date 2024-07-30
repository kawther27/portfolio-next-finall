"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/Home.css';

const TypewriterComponent = () => {
  return (
    <div className="home-container">
      <h1 className="hero-title">
        <Typewriter
          words={['I Am Web Designer.']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    
    </div>
  );
};

export default TypewriterComponent;

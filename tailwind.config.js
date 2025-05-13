/** @type {import('tailwindcss').Config} */
import React from 'react';
import richSvg from 'vite-plugin-react-rich-svg';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        base: ['Epilogue', 'Arial', '"Open Sans"', 'sans-serif'],
      },
      keyframes: {
        colorChangeArchitect: {
          '0%, 36%': { color: '#0c482f' },
          '38%, 100%': { color: 'transparent' },
          // You can add other keyframes like 50%, 100% here if needed
        },
      },
      animation: {
        colorChangeArchitect: 'colorChangeArchitect 11s infinite',
      },
    },
  },
  plugins: [],
  extend: {
    animationDelay: {
      0: '0s',
      500: '0.5s',
      1000: '1s',
      1500: '1.5s',
    },
  },
};

//section
//container
//BrandCard
//CollectionCard
//ProductCard
//Button
//Image
//Checkbox
//Dropdown
//languageSwitch
//socialLinks
//footerLinks
//customize tailwind css
/// <reference types="vite/client" />

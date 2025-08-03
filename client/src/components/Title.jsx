import React from 'react';

const Title = ({ title, subTitle, align = 'center', font }) => {
  return (
    <div
      className={`flex flex-col justify-center ${
        align === 'left' ? 'items-start text-left' : 'items-center text-center'
      }`}
    >
      <h1 className={`text-4xl md:text-[40px] ${font || 'font-playfair'} text-gray-900`}>
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500 mt-2 max-w-[700px]">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;

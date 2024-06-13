import React from 'react';

const Section = ({ backgroundColor,name,height_ }) => {
  console.log(height_);
  const sectionStyle = {
    backgroundColor: backgroundColor,
    height: height_,
    color: 'white',
    
  };

  return <div className="section" style={sectionStyle}>{name}</div>;
};

export default Section;
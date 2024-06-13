import React, { useEffect, useRef, useState } from 'react'
const data = [
    {
        title: "Section 1",
        caption: "Caption for Section 1",
        backgroundColor: "blue",
        subItems: [
            { color: "red" },
            { color: "green" },
            { color: "yellow" },
            { color: "orange" },
        ],
    },
    {
        title: "Section 2",
        caption: "Caption for Section 2",
        backgroundColor: "green",
        subItems: [
            { color: "purple" },
            { color: "pink" },
            { color: "teal" },
            { color: "brown" },
        ],
    },
    {
        title: "Section 3",
        caption: "Caption for Section 3",
        backgroundColor: "orange",
        subItems: [
            { color: "navy" },
            { color: "maroon" },
            { color: "gray" },
            { color: "cyan" },
        ],
    },
    {
        title: "Section 4",
        caption: "Caption for Section 4",
        backgroundColor: "purple",
        subItems: [
            { color: "lime" },
            { color: "olive" },
            { color: "magenta" },
            { color: "silver" },
        ],
    },
];

const ScrollFixedOneSide = ({ sections = data }) => {
    
    const [fixedSectionIndex, setFixedSectionIndex] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
      
        const scrollY = window.scrollY || window.pageYOffset;
        const currentSectionIndex = Math.floor(scrollY / windowHeight);

        setFixedSectionIndex(currentSectionIndex);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              height: "100vh",
            }}
          >
            <div
              style={{
                width: "50%",
                backgroundColor: section.backgroundColor,
                position: fixedSectionIndex === index ? "fixed" : "static",
                top: 0,
                bottom: 0,
                left: 0,
              }}
            >
              <div style={{ padding: "20px" }}>
                <h1 className="text-7xl">{section.title}</h1>
                <p className="text-lg font-semibold uppercase text-white">
                  {section.caption}
                </p>
              </div>
            </div>
            <div style={{ width: "50%", height: "100%" }}>
              {section.subItems.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  style={{
                    height: "80vh",
                    backgroundColor: subItem.color,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default ScrollFixedOneSide
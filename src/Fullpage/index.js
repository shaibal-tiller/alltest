import React from 'react';
import FullPage from '@fullpage/react-fullpage';
import Section from './Section';

const sections = [
  { name: "Orange", backgroundColor: '#ff5733', height: '80vh' },
  { name: "Green", backgroundColor: '#33ff57', height: '80vh' },
  { name: "Blue", backgroundColor: '#5733ff', height: '80vh' },
  { name: "Orange", backgroundColor: '#ff5733', height: '80vh' },
  { name: "green", backgroundColor: '#33ff57', height: '80vh' },
];

const Fullpage_index = () => {
  return (
    <div>
      <header style={{ height: 'vh', position: 'relative', top: 0, left: 0, right: 0, backgroundColor: '', zIndex: 10, }}>Header</header>
      <main style={{ }}>
        <FullPage
          scrollingSpeed={1000}
          render={({ state, fullpageApi }) => {


            return (
              <div id="fullpage-wrapper" style={{height:'80%',}}>
                {sections.map((section, index) => (
                  <Section height_={section.height}
                    name={section.name}
                    backgroundColor={section.backgroundColor} />
                ))}
              </div>
            )
          }}
        />
      </main>
      <footer style={{ height: '10vh', position: '', bottom: 0, left: 0, right: 0, backgroundColor: '' }}>Footer</footer>
    </div>
  );
}

export default Fullpage_index 
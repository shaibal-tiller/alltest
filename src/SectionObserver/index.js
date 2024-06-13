import React, { useRef, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const ObserverComponent = () => {
    const observerRef = useRef(null);


    const handleTraverese = (e, id) => {

       const element = document.getElementById(`div_${id}`)
       
       element && element.scrollIntoView({ behavior: 'smooth' });

    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            
            entries.forEach((entry) => {
          
                if (entry.isIntersecting) {
                    // Add your logic here for when an observed box is in the viewport
                    
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, options);
        observerRef.current && observer.observe(observerRef.current);

        return () => {
            observerRef.current && observer.unobserve(observerRef.current);
        };
    }, []);
    const colors = ['orange', 'green', 'blue', 'pink', 'purple']
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <div className=' fixed left-10 top-1/2 -translate-y-1/2 space-y-4'>
                {colors.map(el =>
                    <div
                        onClick={(e) => handleTraverese(e, el)}
                        id={`btn_${el}`}
                        className={`colored-box  cursor-pointer top-1/2 transform -translate-y-1/2 left-10 w-10 h-10 bg-${el}-500 border-2 border-black`}></div>)}
            </div>

            <div id={`div_${colors[0]}`} className="observed-box h-screen w-screen bg-orange-500" ref={observerRef}>

            </div>

            <div id={`div_${colors[1]}`} className="observed-box h-screen w-screen bg-green-500">

            </div>

            <div id={`div_${colors[2]}`} className="observed-box h-screen w-screen bg-blue-500">

            </div>

            <div id={`div_${colors[3]}`} className="observed-box h-screen w-screen bg-pink-500">

            </div>

            <div id={`div_${colors[4]}`} className="observed-box h-screen w-screen bg-purple-500">

            </div>
        </div>
    );
};

export default ObserverComponent;

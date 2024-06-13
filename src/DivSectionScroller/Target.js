import React, { useEffect } from 'react'
import { useHref, useLocation, useNavigate, useParams } from 'react-router'

const Target = () => {
    const divs = ['sun', 'mars-nai', 'moon']
    const colors = ['blue', 'red', 'purple']
    const url_hash = useLocation().hash

    const scrollToTarget = (targetClassName) => {

        const targetElement = document.querySelector(`.${targetClassName}`);
        console.log(targetClassName);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        scrollToTarget(url_hash.split('#')[1])

        // window.scrollTo(0, tesNode.offsetTop);
    }, [url_hash])

    return (
        <div className='min-h-screen text-center p-4'>
            {divs.map((item, index) => {

                return (<div key={index}
                    style={{ backgroundColor: `${colors[index]}`, color: '' }}

                    className={`${item} h-[75vh] w-full bg-${colors[index]}-500 flex items-center justify-center text-xl font-bold text-white `}>
                    {item}
                </div>)
            })}
        </div>
    )
}

export default Target
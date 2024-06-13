import axios from 'axios'
import React, { useState } from 'react'



const API1 = ``

const APITester = () => {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const handleAPiSend = (e) => {
        setLoading(true)
        setError("")
        axios.get(API1)
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
                setError(e.message || "")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='bg-gray-500 flex justify-center items-center w-full h-screen'>

            <div className=''>
                <div className=''>
                    <button onClick={handleAPiSend}
                     className='mx-auto my-auto text-center px-4 py-2 uppercase font-bold text-xl bg-orange-300 rounded-full'>Send</button>

                </div>
                <error className="block text-xs py-1 text-red-700 font-semibold text-center">{error}</error>
            </div>

        </div>
    )
}

export default APITester
import React, { useState } from 'react'
import Textbox from './Textbox.js'
import Base from './Base.js'

const Draw = () => {

    const [rectangle_markers, set_rectangle_markers] = useState([]);
    

    return (
        <div className="h-full w-full md:grid grid-cols-12 gap-4 p-[2vh] lg:px-[10%]">
            <div className="col-span-8 bg-white shadow-md h-[77vh] p-4">
                <Base setMarkers_={set_rectangle_markers}  />
            </div>
            <div className="hidden md:block col-span-4 bg-gray-200 shadow-md h-[77vh] p-4">
                <Textbox rectangle_markers={rectangle_markers} />
            </div>
        </div>
    )
}

export default Draw
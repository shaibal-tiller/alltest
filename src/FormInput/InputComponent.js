import React from 'react'

const InputComponent = ({ name, label, type = "text", value = "", onchange, disabled = false }) => {
    return (
        <div className='  h-[10vh] bg-gray-400 border-2 p-2 space-y-1  rounded-md '>
            <label className='capitalize text-sm font-semibold '>{label}</label>
            <input className='w-full h-full bg-transparent text-black outline-none'
             name={name} type={type} value={value} onChange={onchange} disabled={disabled} />
        </div>
    )
}

export default InputComponent
import React, { useState } from 'react'
import InputComponent from './InputComponent';

const initial_state = {

}


const FormInputContainer = () => {


  const [form_data, set_form_data] = useState(initial_state)

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //validate

  }
  const handleChange = (e) => {
    let age = null;
    let FullName = ""
    if(e.target.name=='first_name' || e.target.name=="last_name"){
      FullName= e.target.value +" KHatubn"
    }
    // if dod or dob calulate age ans update form data
    set_form_data({ ...form_data, [e.target.name]: e.target.value,full_name: FullName  })
  }




  return (
    <div className='w-full h-screen bg-gray-400 overflow-hidden p-20 '>

      <form onSubmit={handleSubmit} className=' grid grid-cols-4 gap-4'>
        {/* First Name */}
        <InputComponent label={"First Name"} name={"first_name"} value={form_data['first_name']} onchange={handleChange} type={"text"} />
        {/* Last Name */}
        <InputComponent label={"Last Name"} name={"last_name"} value={form_data['last_name']} onchange={handleChange} type={"text"} />
        {/* FullName */}
        <InputComponent label={"Full Name"} name={"full_name"} value={form_data['full_name']} onchange={handleChange} type={"text"} disabled />
        {/* DOB */}
        <InputComponent label={"DOB"} name={"dob"} value={form_data['dob']} onchange={handleChange} type={"date"} />
        {/* DOD */}
        <InputComponent label={"DOD"} name={"dod"} value={form_data['dod']} onchange={handleChange} type={"date"} />
        {/* Age */}
        <InputComponent label={"Age"} name={"age"} value={form_data['age']} onchange={handleChange} type={"number"} disabled />
        <button className='bg-yellow-200 px-2 py-1' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormInputContainer
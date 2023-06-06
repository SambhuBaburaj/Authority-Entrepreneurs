import React, { useState } from 'react'
import Confirmation from '../Components/popUp/Confirmation';

function FormSubmition() {
  const [ModalIsOpen, setModalIsOpen] = useState(false)
  const [err, setErrors] = useState(
    {
      username:'',

      password:'',
      phone:''
    }
  )


  const validateForm = (formdata) => {
    const newErrors = {};
  
    if (formdata.username.trim() === '') {
      newErrors.username = 'Username is required';
    }

    if (formdata.password.trim() === '') {
      newErrors.password = 'Password is required';

    }
else if(formdata.password.trim().length<8)
{
  console.log('hrthdrthr');
  newErrors.password = 'Password should be atleast 8 letters';

}
    if (formdata.phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formdata.phone)) {
      newErrors.phone = 'Phone number should be a valid 10-digit number';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };





const ValidateForm=(e)=>
{
e.preventDefault()
const form=new FormData(e.target)

const formdata= Object.fromEntries(form.entries())

if (validateForm(formdata)) {
  // Submit the form
  setModalIsOpen(true)
  console.log('Form submitted successfully');
 
  // You can perform further actions like API calls or state updates here
}
else{
  console.log(err);
}


}

  return (
<>
<div className="flex justify-center mt-6">

<form onSubmit={ValidateForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Username
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="username"
      name='username'
    />
    <div className='text-red-500 text-xs'>{err.username}</div>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Password
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="password"
      name='password'
    />
    <div className='text-red-500 text-xs'>{err.password}</div>
    
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      phoneNumber
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="phone"
      type="number"
      placeholder=" phone Number"
      name='phone'
    />
    <div className='text-red-500 text-xs'>{err.phone}</div>
    
  </div>


  <div className="mb-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Submit
    </button>
  </div>
</form>

</div>

{ModalIsOpen&&<Confirmation ModalIsOpen={setModalIsOpen} data='form submitted'/>}
</>
  )
}

export default FormSubmition

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = ({onSubmit}) => {

const [value, setValue] = useState('');

const onChange = e => {
setValue(e.currentTarget.value);  
}

const handleSubmit = e => {
   e.preventDefault();
   if(value.trim() === '') {
      toast("Enter your request");
       return;
     }
     onSubmit(value);
     setValue('');
}

   return (
      <>
<form onSubmit={handleSubmit}>
<button type="submit">Search</button>
<input
name="value"
value={value}
autoComplete="off"
autoFocus
placeholder="Search images and photos"
onChange={onChange}
>
</input>
      </form>
      <ToastContainer 
      position='top-center'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
   </>)
}
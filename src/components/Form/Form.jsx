
import { useState } from 'react';

export const Form = ({onSubmit}) => {
const [value, setValue] = useState('');
const onChange = e => {
setValue(e.currentTarget.value);  
}

   return (
<form onSubmit={onSubmit}>
<button type="submit">Пошук</button>
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
   )
}
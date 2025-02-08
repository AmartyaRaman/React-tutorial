import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer'>
      {props.value}
    </button>
  );
};

export default Button;
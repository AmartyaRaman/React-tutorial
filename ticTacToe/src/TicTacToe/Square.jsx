import React from 'react';

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='border-2 border-black w-20 h-20 flex justify-center items-center'>
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
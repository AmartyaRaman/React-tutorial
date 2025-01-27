import React from 'react'

function Btn({name}) {

  return (  
    <button className={`bg-red-600 m-2 text-white font-semibold p-2 rounded-md`}>{name}</button>
  );
}

export default Btn;
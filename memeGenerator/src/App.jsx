import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home.jsx';
import Editpage from './pages/Edit.jsx';

function App() {

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Meme Generator</h1>
      <div className="block mb-1 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/edit' element={<Editpage  />} />
      </Routes>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/memes';

const Homepage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => {
      setData(memes.data.memes);
    });
  }, []);

  return (
    <div className='flex flex-wrap justify-center'>
      {data.map(meme => <MemeCard image={meme.url} title={meme.name}/>)}
    </div>
  );
};

export default Homepage;
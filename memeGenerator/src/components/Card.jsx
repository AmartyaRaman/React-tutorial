import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-100">
        <div className="max-w-[720px] mx-auto">

            <div className="relative flex flex-col text-gray-700 bg-white shadow-md m-2 bg-clip-border rounded-xl w-96">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
                    <img
                        src={props.image}
                        alt="card-image" className="object-cover w-full h-100" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-center mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {props.title}
                        </p>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button"
                        onClick={() => navigate(`/edit?url=${props.image}`)}
                        >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MemeCard;
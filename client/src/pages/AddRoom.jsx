import React from 'react'
import { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'; // make sure this path is correct
const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    aminities: {
      '  Free Wifi ': false,
      '  Free breakfast ': false,
      '  Free parking ': false,
      '  Free cancellation ': false,
      '  Air conditioning ': false,
    },
  });

  return (
    <form>
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and accurate room details, pricing and amenities, to enhance the user booking experience."
      />

      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 mt-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="max-h-13 cursor-pointer opacity-80"
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>

      <div className='w-full flex max-sm:flex-col gap-4 mt-4'>
       <div className='flex-1 max-w-48'>
           <p className='text-gray-800 mt-4'>Room Type</p>
           <select  value={inputs.roomType} onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
           <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxary Room">Luxary Room</option>
            <option value="Family suite">Family Suite</option>
           
            </select>
       </div>
       <div >
        <p className='text-gray-800 mt-4'>
          Price <span className='text-xs'>/night</span>
        </p>
        <input type="number" placeholder='0'  className='border border-gray-300 mt-1 rounded p-2 w-24' value={inputs.pricePerNight}  onChange={e=> setInputs({...inputs, pricePerNight : e.target.value})}/>
       </div>
      </div>
      <p className='text-gray-800 mt-4'>Amenities</p>
      <div className='flex flex-col flex-wrap mt-1 text-gray-600 max-w-sm'>
      {
        Object.keys(inputs.aminities).map((key) => (
          <label key={key} className='flex items-center gap-2'>
            <input
              type="checkbox"
              checked={inputs.aminities[key]}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  aminities: { ...inputs.aminities, [key]: e.target.checked },
                })
              }
            />
            {key}
          </label>
        ))
      }
      </div>
     <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded mt-8 cursor-pointer transition duration-300 ease-in-out shadow-md">
  Add Room
</button>

    </form>
  );
};

export default AddRoom;

import React from 'react'

const LocationSearchPanel = (props) => {
  // Sample array for location

  console.log(props);

  const locations = [
    'Tandon 177 mnnit prayagraj',
    'NBH 123 prayagraj',
    'Banaras GHAT 123',
    'Sangam ghat'
  ];

  return (
    <div onClick={() => {
      props.setVehiclePanel(true);
      props.setPanelOpen(false);
    }}>
      {locations.map((elem, index) => (
        <div
          key={index} // Adding unique key
          className='flex gap-4 my-2 items-center border-2 p-3 border-gray-50 active:border-black rounded-xl justify-start'
        >
          <h2 className='bg-[#eee] flex h-10 items-center justify-center w-10 rounded-full'>
            <i className="ri-map-pin-2-fill"></i>
          </h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;

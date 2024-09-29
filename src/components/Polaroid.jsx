import React from 'react';

const Polaroid = ({ image, name, align }) => {
  const rotation = align === 'left' ? '-rotate-3' : 'rotate-3';

  return (
    <div className={`w-[250px] align-top flex flex-col flex-wrap bg-color-polaroid p-5 border border-gray-300 shadow-xl ${rotation}  ${align === 'left' ? 'ml-7' : 'mr-5'}`}>
      <img
        src={image}
        alt={name}
        className="object-cover"
      />
      <p className="text-center font-inter font-semibold mt-2">{name}</p>
    </div>
  );
};

export default Polaroid;

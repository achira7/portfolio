import React from 'react';

const Polaroid = ({ image, name, align }) => {
  const rotation = align === 'left' ? '-rotate-3' : align === 'right' ? 'rotate-3' : '';

  return (
    <div id="floating">
      <div
        className={`w-[250px] md:w-[350px] align-top flex flex-col flex-wrap bg-color-polaroid p-5 border border-gray-300 shadow-xl ${rotation} ${align === 'left' ? 'ml-7' : align === 'right' ? 'mr-5' : ''}`}
      >
        <img src={image} alt={name} className="object-cover" />
        <p className="text-center font-inter font-semibold mt-2">{name}</p>
      </div>
    </div>
  );
};

export default Polaroid;

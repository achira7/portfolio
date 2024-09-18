import React from 'react';

const Polaroid = ({ image, name, align }) => {
  const rotation = align === 'left' ? '-rotate-3' : 'rotate-3';

  return (
    <div className={`bg-white p-4 border border-gray-300 shadow-lg ${rotation} w-fit`}>
      <img
        src={image}
        alt={name}
        className="w-[250px] h-auto object-cover"
      />
      <p className="text-center font-semibold mt-2">{name}</p>
    </div>
  );
};

export default Polaroid;

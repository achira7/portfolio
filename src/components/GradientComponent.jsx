const GradientComponent = ({ colorA, colorB, colorC }) => {
  return (
    <div className="absolute w-full h-full -z-10"> {/* Full width and height */}
      <div
        className="relative w-full h-full overflow-hidden transition-all ease-in duration-500"
        style={{
          background: `linear-gradient(45deg, var(--color-a), var(--color-b), var(--color-c))`,
          '--color-a': colorA,
          '--color-b': colorB,
          '--color-c': colorC,
        }}
      >
        <div
          className="absolute bg-gradient-to-r blur-[50px] brightness-150 rounded-2xl"
          style={{
            left: '20%',
            top: '10%',
            width: '70%',
            height: '50%',
            animation: 'blob 8s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045)',
            transformOrigin: '60%',
            background: `linear-gradient(45deg, ${colorA}, ${colorB})`,
          }}
        ></div>
        <div
          className="absolute bg-gradient-to-r blur-[50px] brightness-150 rounded-2xl"
          style={{
            left: '40%',
            top: '30%',
            width: '70%',
            height: '80%',
            animation: 'blob 10s infinite cubic-bezier(0.215, 0.61, 0.355, 1) reverse',
            transformOrigin: '60%',
            background: `linear-gradient(45deg, ${colorA}, ${colorB})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientComponent;

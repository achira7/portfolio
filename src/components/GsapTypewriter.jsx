import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const GsapTypewriter = ({ phrases }) => {
  const textRef = useRef();
  const cursorRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const typeSpeed = 0.05; // Speed to type each character

    phrases.forEach((phrase) => {
      const chars = phrase.split(''); // Split the phrase into individual characters
      
      // Type each character one by one
      chars.forEach((char, i) => {
        tl.to(textRef.current, { text: textRef.current.innerText + char, duration: typeSpeed }, `+=${typeSpeed}`);
      });

      // Pause before starting the next phrase
      tl.to(textRef.current, { duration: 1, onComplete: () => { textRef.current.innerText = ''; } });
    });

    // Animate cursor blinking
    gsap.to(cursorRef.current, { opacity: 0, ease: 'power2.inOut', repeat: -1, yoyo: true, duration: 0.5 });
  }, [phrases]);

  return (
    <span style={{ fontSize: '2em', display: 'inline-block', whiteSpace: 'nowrap' }}>
      <span ref={textRef}></span>
      <span ref={cursorRef} style={{ display: 'inline-block', marginLeft: '5px' }}>|</span>
    </span>
  );
};

export default GsapTypewriter;

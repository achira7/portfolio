import { useState, useEffect } from "react";

const letters =  "あ爪ばシエぶ文もゆぼご怒ロワヲ卒ダ肉ネノ泊ミ申ま人の羽ウ🈂エ向刀城極";

export const useTextScramble = (text, speed = 10, duration = 500) => {
  const [scrambledText, setScrambledText] = useState(text);

  useEffect(() => {
    let timeout;
    let interval;
    const chars = text.split("");

    const scramble = () => {
      let iteration = 0;
      interval = setInterval(() => {
        setScrambledText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return chars[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );
        iteration += 1 / speed;
        if (iteration >= chars.length) {
          clearInterval(interval);
          setScrambledText(text);
        }
      }, speed);
    };

    scramble();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed]);

  return scrambledText;
};

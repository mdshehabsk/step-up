"use client";

import { useEffect, useState } from "react";

const Typing = () => {
  const words = [
    "your digital growth.",
    "digital marketing.",
    "growing your business.",
    "client success.",
    "creating your identity.",
    "increasing revenue.",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;
  const delayBetweenWords = 100; // Delay before switching to the next word

  useEffect(() => {
    const currentWord = words[wordIndex];

    const updateText = () => {
      if (!isDeleting) {
        setText((prev) => currentWord.substring(0, prev.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        setText((prev) => currentWord.substring(0, prev.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const typingTimeout = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, wordIndex, isDeleting]);
  return (
    <div style={{ fontSize: "24px", fontWeight: "bold" }}>
      We are passionate about <span>{text}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Typing;

import { useEffect, useState } from "react";

let recognition = null;
if (window.SpeechRecognition || window.webkitSpeechRecognition) {
  recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  recognition.continuous = true;
  recognition.lang = "pl-PL";
}

const useSpeechRecognition = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) {
      console.error("SpeechRecognition is not supported in your browser");
      return;
    }

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
      recognition.stop();
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error(event);
    };
  }, []);

  const listen = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };

  return {
    text,
    isListening,
    listen,
    stopListening,
    hasRecognition: !!recognition,
  };
};

export default useSpeechRecognition;

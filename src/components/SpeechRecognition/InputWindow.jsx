import styles from "./InputWindow.module.css";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";
import { useEffect, useState } from "react";

export default function InputWindow() {
  const { text, isListening, listen, stopListening, hasRecognition } =
    useSpeechRecognition();
  const [inputText, setInputText] = useState(text);

  useEffect(() => {
    setInputText(text);
  }, [text]);

  return (
    <div className={styles.container}>
      <textarea className={styles.input_speech} value={inputText} readOnly />
      {hasRecognition ? (
        <div>
          {" "}
          <button onClick={isListening ? stopListening : listen}>
            {isListening ? "Stop" : "Start"}
          </button>
          {isListening ? <div>Słucham</div> : null}
        </div>
      ) : (
        <span>Recognition not supported</span>
      )}
    </div>
  );
}

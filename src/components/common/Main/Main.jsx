import InputWindow from "../../SpeechRecognition/InputWindow";
import styles from "./Main.module.css";
export default function Main() {
  return (
    <main className={styles.main_container}>
      <InputWindow />
    </main>
  );
}

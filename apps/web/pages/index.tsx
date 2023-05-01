import { Button } from "ui";
import { TestText } from "components";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web app</h1>
      <Button
        onClick={() => console.log("Pressed!")}
        text="Boop" />
      <TestText text="Testing web app" />
    </div>
  );
}

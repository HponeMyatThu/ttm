import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [yesClickCount, setYesClickCount] = useState(0);
  const [noClickCount, setNoClickCount] = useState(0);
  const router = useRouter(); 

  const handleYesClick = () => {
    setYesClickCount(yesClickCount + 1);
    router.push("/yes");
  };

  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1);
  };

  const yesButtonSize = 1 + noClickCount * 0.1;
  const noButtonSize = 1 - noClickCount * 0.05;
  const noButtonStyle =
    noClickCount > 0
      ? {
          transform: `scale(${noButtonSize}) translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 - 50}px)`,
        }
      : { transform: `scale(${noButtonSize})` };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Will you be my Valentine, Than Than Moe (my love)? ❤️</h1>
      <div className={styles.buttons}>
        <button
          className={styles.buttonYes}
          style={{ transform: `scale(${yesButtonSize})` }}
          onClick={handleYesClick}
        >
          Yes 💖
        </button>
        <button
          className={styles.buttonNo}
          style={noButtonStyle}
          onClick={handleNoClick}
        >
          No 😢
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from "../styles/Yes.module.css";

export default function AnotherPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Yay! 🎉 You said YES! 💖</h1>
      <p className={styles.message}>Than Than Moe, you made my day! 💕</p>
      <img
        src="/th.jpg" 
        alt="Love Gif"
        className={styles.gif}
      />
      <Link href="/">
        <button className={styles.button}>Go Back</button>
      </Link>
    </div>
  );
}

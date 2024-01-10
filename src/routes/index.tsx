import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main class={styles.main}>
      <Title>Hello World</Title>
      <h1 class={styles.header}>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

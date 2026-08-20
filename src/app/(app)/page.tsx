import { FC } from "react";
import styles from "./page.module.css";

const HomePage: FC<PageProps<"/">> = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ваш идеальный удар начинается здесь</h2>
      <p className={styles.text}>
        Мы знаем, что ракетка — это не просто инвентарь, а продолжение вашей
        руки. В нашем магазине — только проверенные модели для точного контроля,
        мощной подачи и безупречного стиля на корте. Найдите ту самую ракетку, с
        которой каждая победа будет ощущаться иначе.
      </p>
    </section>
  );
};

export default HomePage;

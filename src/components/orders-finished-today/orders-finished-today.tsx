import styles from "./orders-finished-today.module.css";
import { useAppSelector } from "../../services/hooks/hooks";

function OrdersFinishedToday(): JSX.Element {
  const { totalToday } = useAppSelector((store) => store.wsFeed);
  return (
    <section className={`mt-15 mb-15`}>
      <h1 className="text text_type_main-medium">Выполнено за сегодня:</h1>
      <p className={`text text_type_digits-large ${styles.total}`}>
        {totalToday}
      </p>
    </section>
  );
}

export { OrdersFinishedToday };

import styles from "./orders-finished-all-time.module.css";
import { useAppSelector } from "../../services/hooks/hooks";

function OrdersFinishedAllTime(): JSX.Element {
  const { total } = useAppSelector((store) => store.wsFeed);
  return (
    <section className={`mt-15 mb-15`}>
      <h1 className="text text_type_main-medium">Выполнено за все время:</h1>
      <p className={`text text_type_digits-large ${styles.total}`}>{total}</p>
    </section>
  );
}

export { OrdersFinishedAllTime };

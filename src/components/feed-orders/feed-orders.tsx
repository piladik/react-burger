import styles from "./feed-orders.module.css";
import { FeedOrder } from "../feed-order/feed-order";
import { useAppSelector } from "../../services/hooks/hooks";

function FeedOrders(): JSX.Element {
  const { orders } = useAppSelector((store) => store.wsFeed);
  return (
    <section className={`mt-10 ${styles.feed_orders_section}`}>
      <h1 className="text text_type_main-large mb-6">Лента заказов</h1>
      <div className={`${styles.scrollable_box}`}>
        {orders.map((el, index) => (
          <FeedOrder order={el} key={index} />
        ))}
      </div>
    </section>
  );
}

export { FeedOrders };

import styles from "./feed-orders.module.css";
import { FeedOrder } from "../feed-order/feed-order";

function FeedOrders(): JSX.Element {
  return (
    <section className={`mt-10 ${styles.feed_orders_section}`}>
      <h1 className="text text_type_main-large mb-6">Лента заказов</h1>
      <FeedOrder />
      <FeedOrder />
    </section>
  );
}

export { FeedOrders };

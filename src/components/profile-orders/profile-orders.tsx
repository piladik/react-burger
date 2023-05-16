import styles from "./profile-order.module.css";
import { FeedOrder } from "../feed-order/feed-order";
import { useAppSelector } from "../../services/hooks/hooks";

export function ProfileOrders(): JSX.Element {
  const { orders } = useAppSelector((store) => store.wsFeed);
  return (
    <section className={`${styles.profile_orders_section}`}>
      <div className={`${styles.scrollable_box}`}>
        {orders.map((el, index) => (
          <FeedOrder order={el} key={index} />
        ))}
      </div>
    </section>
  );
}

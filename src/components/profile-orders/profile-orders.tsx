import styles from "./profile-order.module.css";
import { FeedOrder } from "../feed-order/feed-order";
import { testData } from "../feed-orders/feed-orders";

export function ProfileOrders(): JSX.Element {
  return (
    <section className={`${styles.profile_orders_section}`}>
      <div className={`${styles.scrollable_box}`}>
        {testData.map((el, index) => (
          <FeedOrder order={el} key={index} isFromProfile={true} />
        ))}
      </div>
    </section>
  );
}

import { FeedShowOrder } from "../components/feed-show-order/feed-show-order";
import styles from "./feed-show-order-page.module.css";

function FeedShowOrderPage(): JSX.Element {
  return (
    <section className={`${styles.feed_show_order_section}`}>
      <FeedShowOrder isModal={false} />
    </section>
  );
}

export { FeedShowOrderPage };

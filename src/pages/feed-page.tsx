// Styles
import styles from "./feed-page.module.css";

// Components
import { FeedOrders } from "../components/feed-orders/feed-orders";
import { FeedStatus } from "../components/feed-status/feed-status";

function FeedPage(): JSX.Element {
  return (
    <main className={`${styles.main}`}>
      <FeedOrders />
      <FeedStatus />
    </main>
  );
}

export { FeedPage };

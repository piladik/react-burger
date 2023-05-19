// Styles
import styles from "./feed-page.module.css";

// Components
import { FeedOrders } from "../components/feed-orders/feed-orders";
import { FeedStatus } from "../components/feed-status/feed-status";
import { useAppSelector } from "../services/hooks/hooks";

function FeedPage(): JSX.Element {
  const { ordersFeedLoaded } = useAppSelector((store) => store.wsFeed);
  return (
    <>
      {ordersFeedLoaded && (
        <main className={`${styles.main}`}>
          <FeedOrders />
          <FeedStatus />
        </main>
      )}
    </>
  );
}

export { FeedPage };

import { FeedShowOrder } from "../components/feed-show-order/feed-show-order";
import styles from "./feed-show-order-page.module.css";
import { useAppSelector } from "../services/hooks/hooks";

function FeedShowOrderPage({
  isProfileOrder,
}: {
  isProfileOrder: boolean;
}): JSX.Element {
  const { ordersProfileLoaded } = useAppSelector((store) => store.wsProfile);
  const { ordersFeedLoaded } = useAppSelector((store) => store.wsFeed);
  const page = isProfileOrder ? (
    <>
      {ordersProfileLoaded && (
        <section className={`${styles.feed_show_order_section}`}>
          <FeedShowOrder isModal={false} isProfileOrder={isProfileOrder} />
        </section>
      )}
    </>
  ) : (
    <>
      {ordersFeedLoaded && (
        <section className={`${styles.feed_show_order_section}`}>
          <FeedShowOrder isModal={false} isProfileOrder={isProfileOrder} />
        </section>
      )}
    </>
  );
  return page;
}

export { FeedShowOrderPage };

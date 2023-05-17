import { FeedShowOrder } from "../components/feed-show-order/feed-show-order";
import styles from "./feed-show-order-page.module.css";
import { useAppSelector } from "../services/hooks/hooks";

function FeedShowOrderPage({
  isProfileOrder,
}: {
  isProfileOrder: boolean;
}): JSX.Element {
  const { ordersProfileLoaded } = useAppSelector((store) => store.wsProfile);
  return (
    <>
      {ordersProfileLoaded && (
        <section className={`${styles.feed_show_order_section}`}>
          <FeedShowOrder isModal={false} isProfileOrder={isProfileOrder} />
        </section>
      )}
    </>
  );
}

export { FeedShowOrderPage };

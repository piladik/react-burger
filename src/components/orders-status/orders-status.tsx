import styles from "./orders-status.module.css";
import { OrdersReady } from "../orders-ready/orders-ready";
import { OrdersInProgress } from "../orders-in-progress/orders-in-progress";
import { useAppSelector } from "../../services/hooks/hooks";
import { useMemo } from "react";

function OrdersStatus(): JSX.Element {
  const { orders } = useAppSelector((store) => store.wsFeed);
  const done = useMemo(
    () => orders.filter((el) => el.status === "done").slice(0, 24),
    [orders]
  );
  const pending = useMemo(
    () => orders.filter((el) => el.status === "pending"),
    [orders]
  );
  return (
    <section className={`${styles.order_status_section}`}>
      <OrdersReady done={done} />
      <OrdersInProgress pending={pending} />
    </section>
  );
}

export { OrdersStatus };

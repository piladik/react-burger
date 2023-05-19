import styles from "./orders-status.module.css";
import { OrdersReady } from "../orders-ready/orders-ready";
import { OrdersInProgress } from "../orders-in-progress/orders-in-progress";
import { useAppSelector } from "../../services/hooks/hooks";
import { useMemo } from "react";

function OrdersStatus(): JSX.Element {
  const { orders } = useAppSelector((store) => store.wsFeed);
  const checkedOrders = useMemo(
    () =>
      orders.filter((el) =>
        el.ingredients.every((id) => typeof id === "string")
      ),
    [orders]
  );
  const done = useMemo(
    () => checkedOrders.filter((el) => el.status === "done").slice(0, 24),
    [checkedOrders]
  );
  const pending = useMemo(
    () => checkedOrders.filter((el) => el.status === "pending"),
    [checkedOrders]
  );
  return (
    <section className={`${styles.order_status_section}`}>
      <OrdersReady done={done} />
      <OrdersInProgress pending={pending} />
    </section>
  );
}

export { OrdersStatus };

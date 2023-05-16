import styles from "./feed-show-order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/hooks/hooks";
import { useParams } from "react-router-dom";
import { countTotalById, getIngredientInfoById } from "../../utils/helpers";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderStatusEn, OrderStatusRu } from "../../types/web-socket";

function FeedShowOrder({ isModal }: { isModal: boolean }): JSX.Element {
  const { id } = useParams();
  const order = useAppSelector((store) =>
    store.wsFeed.orders.find((el) => el._id === id)
  );
  const { ingredients } = useAppSelector((store) => store.ingredients);

  const urlPriceQtyList = getIngredientInfoById(
    order!.ingredients,
    ingredients
  );
  const total = countTotalById(order!.ingredients, ingredients);
  const status =
    order && order.status === OrderStatusEn.DONE ? (
      <p className="mb-15 text text_type_main-small">
        <span className={`${styles.status_colored}`}>{OrderStatusRu.DONE}</span>
      </p>
    ) : order && order.status === OrderStatusEn.CREATED ? (
      <p className="mb-15 text text_type_main-small">
        <span>{OrderStatusRu.CREATED}</span>
      </p>
    ) : (
      <p className="mb-15 text text_type_main-small">
        <span>{OrderStatusRu.PENDING}</span>
      </p>
    );
  return (
    <div className="p-10">
      {!isModal && (
        <h1
          className={`mt-10 mb-10 text text_type_digits-default ${styles.header_id}`}
        >
          #{order?.number}
        </h1>
      )}
      <p className="mb-3 text text_type_main-medium">{order?.name}</p>
      {status && status}
      <h2 className="mb-6 text text_type_main-medium">Состав:</h2>
      <div className={`mb-10 ${styles.ingredients_box}`}>
        {urlPriceQtyList.map((el, index) => (
          <Ingredient
            url={el.url}
            price={el.price}
            name={el.name}
            qty={el.qty}
            key={index}
          />
        ))}
      </div>
      <div className={`${styles.footer}`}>
        <p className="text text_type_main-small text_color_inactive">
          <FormattedDate date={new Date(order!.createdAt)} />
        </p>
        <div className={`${styles.flex_wrapper}`}>
          <p className="text text_type_digits-default">{total}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}

function Ingredient({
  url,
  price,
  name,
  qty,
}: {
  url: string;
  price: number;
  name: string;
  qty: number;
}): JSX.Element {
  return (
    <div className={`mr-6 ${styles.ingredient}`}>
      <div className={`${styles.flex_wrapper}`}>
        <div className={`${styles.img_wrapper}`}>
          <img src={url} alt="test" className={`${styles.ingredients_img}`} />
        </div>
        <p className="text text_type_main-small">{name}</p>
      </div>
      <div className={`${styles.flex_wrapper}`}>
        <p className="text text_type_digits-default">
          {qty} x {price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
}

export { FeedShowOrder };

import styles from "./feed-order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, Link } from "react-router-dom";

interface IFeedOrderProps {
  name: string;
  orderId: string;
  imgs: Array<string>;
  timestamp: string;
  price: number;
}

function FeedOrder({
  order,
  isFromProfile,
}: {
  order: IFeedOrderProps;
  isFromProfile: boolean;
}): JSX.Element {
  const { name, orderId, imgs, timestamp, price } = order;
  const location = useLocation();

  return (
    <div className={`mb-6 mr-2 ${styles.feed_order_card}`}>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`${location.pathname}/${orderId}`}
        state={{ background: location }}
      >
        <div className="mr-6 ml-6 card_content">
          <div className={`pt-6 ${styles.card_header}`}>
            <p className="order_id text text_type_digits-default">{orderId}</p>
            <p className="order_date text text_type_main-default text_color_inactive">
              {timestamp}
            </p>
          </div>
          <p className="text text_type_main-medium pt-6">{name}</p>
          {isFromProfile && (
            <p className="mt-2 text text_type_main-small">Создан</p>
          )}
          <div className={`${styles.card_footer}`}>
            <div className={`pt-6 pb-6 mr-6 ${styles.ingredients_img_box}`}>
              {imgs.map((img, index) => (
                <div
                  className={`${styles.img_wrapper}`}
                  style={{ zIndex: 100 - index }}
                  key={index}
                >
                  <img
                    src={img}
                    alt="test"
                    className={`${styles.ingredients_img}`}
                  />
                </div>
              ))}
            </div>
            <div className={`${styles.total_box}`}>
              <p className="order_total text text_type_digits-default">
                {price}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { FeedOrder };

import styles from "./feed-order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function FeedOrder(): JSX.Element {
  return (
    <div className={`mb-6 ${styles.feed_order_card}`}>
      <div className="mr-6 ml-6 card_content">
        <div className={`pt-6 ${styles.card_header}`}>
          <p className="order_id text text_type_digits-default">#3303030</p>
          <p className="order_date text text_type_main-default text_color_inactive">
            Сегодня, 16:20
          </p>
        </div>
        <p className="text text_type_main-medium pt-6">My Burger</p>
        <div className={`${styles.card_footer}`}>
          <div className={`pt-6 pb-6 mr-6 ${styles.ingredients_img_box}`}>
            <div className={`${styles.img_wrapper}`} style={{ zIndex: 3 }}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt="test"
                className={`${styles.ingredients_img}`}
              />
            </div>
            <div className={`${styles.img_wrapper}`} style={{ zIndex: 2 }}>
              <img
                src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"
                alt="test"
                className={`${styles.ingredients_img}`}
              />
            </div>
            <div className={`${styles.img_wrapper}`} style={{ zIndex: 1 }}>
              <img
                src="https://code.s3.yandex.net/react/code/sauce-02-mobile.png"
                alt="test"
                className={`${styles.ingredients_img}`}
              />
            </div>
          </div>
          <div className={`${styles.total_box}`}>
            <p className="order_total text text_type_digits-default">1488</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeedOrder };

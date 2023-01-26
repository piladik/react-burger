import PropTypes from "prop-types";

// Styles
import styles from "./order-details.module.css";
import doneImg from "../../images/done.png";

function OrderDetails({ orderId }) {
  return (
    <div className={styles.modal_content}>
      <p className={`text text_type_digits-large ${styles.order_id}`}>
        {orderId.id}
      </p>
      <p
        className={`"text text_type_digits-small mt-8" ${styles.order_id_text}`}
      >
        Идентификатор заказа
      </p>
      <div className={"mt-15 mb-15"}>
        <img src={doneImg} alt="" />
      </div>

      <p className="mb-2 text text_type_main-default">
        Ваш заказ начали готовить
      </p>
      <p className="mb-30 text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  orderId: PropTypes.shape({ id: PropTypes.number }).isRequired,
};

export default OrderDetails;
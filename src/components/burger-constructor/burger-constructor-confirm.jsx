import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-constructor.module.css"

function BurgerConstructorConfirm() {
    return (
        <div className={`mt-10 ${styles.confirm_container}`}>
            <div className={`mr-10 ${styles.total_box}`}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon type="primary" className={styles.icon} />
            </div>
            <Button htmlType="button" type="primary" size="large">
            Оформить заказ
            </Button>  
        </div>
    ) 
}

export default BurgerConstructorConfirm
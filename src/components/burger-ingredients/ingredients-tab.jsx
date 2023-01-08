import React from "react"
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-ingredients.module.css";

function IngredientsTab() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={`mb-10 ${styles.tab_container}`}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
        </Tab>
        </div>
    )
}

export default IngredientsTab
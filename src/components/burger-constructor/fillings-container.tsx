import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/reducers";
import {
  TIngredientWithUniqueId,
  TIngredientsWithUniqueId,
} from "../../utils/types/ingredients-types";

// Components
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Styles
import styles from "./burger-constructor.module.css";

// ACTIONS-REDUCERS
import { counterDecrease } from "../../services/reducers/ingredients";
import {
  deleteFilling,
  moveFilling,
} from "../../services/reducers/constructor";

interface DragItem {
  index: number;
  id: string;
  type: string;
}

function FillingsContainer(): JSX.Element {
  const { ingredients }: { ingredients: TIngredientsWithUniqueId } =
    useSelector((store: RootState) => store.constructorBurger);

  return (
    <div className={styles.scrollable_box}>
      {ingredients.fillings.map((el, index) => (
        <FillingItem ingredient={el} key={el.nanoid} index={index} />
      ))}
      {ingredients.fillings.length === 0 ? (
        <div className={`${styles.constructor_empty_item} ${styles.fillings}`}>
          Выберите начинку
        </div>
      ) : null}
    </div>
  );
}

function FillingItem({
  ingredient,
  index,
}: {
  ingredient: TIngredientWithUniqueId;
  index: number;
}): JSX.Element {
  const dispatch = useDispatch();

  // Следующий код взят по сыллку от куратора из https://codesandbox.io/embed/react-dnd-rtk-ofjc4h?codemirror=1 и адаптирован под текущий проект
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ["filling"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      // Индекс перемещаемого элемента
      const dragIndex = item.index;
      // Индекс текущего элемента (над которым находится курсор при dnd)
      const hoverIndex = index;

      // Выходим, если индексы сопадают
      if (dragIndex === hoverIndex) {
        return;
      }

      // Получаем положение текущего элемента относительно экрана
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Получаем центр текущего элемента по вертикали
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Получаем положение курсора
      const clientOffset = monitor.getClientOffset();
      // Получаем положение курсора относительно текущего элемента
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Выходим, если перемещаемый элемент ниже, чем 50% от высоты текущего
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Выходим, если перемещаемый элемент выше, чем 50% от высоты текущего
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // dispatch({ type: MOVE_FILLING, from: dragIndex, to: hoverIndex });
      dispatch(moveFilling({ from: dragIndex, to: hoverIndex }));

      // Сразу меняем индекс перемещаемого элемента
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    type: "filling",
    item: () => {
      // Определяем элемент
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const deleteIngredient = (nanoid: string, id: string) => {
    dispatch(deleteFilling(nanoid));
    dispatch(counterDecrease(id));
  };
  return (
    <div
      className={styles.constructor_item}
      ref={ref}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => deleteIngredient(ingredient.nanoid, ingredient._id)}
      />
    </div>
  );
}

export default FillingsContainer;

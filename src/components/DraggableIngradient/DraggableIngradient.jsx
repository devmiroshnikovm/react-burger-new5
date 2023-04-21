import styles from "./styles.module.css";
import { useDrag } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import { deleteIngredientToBurger } from "../../services/actions/selectedIngredients";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

function DraggableIngradient(props) {
  const { element, index, moveCard } = props;

  const dispatch = useDispatch();

  // handle button click
  const handeOnDeleteIngredient = (element) => {
    dispatch(deleteIngredientToBurger(element));
  };

  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: "sort",
    item: { ...element, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  /////////////////////////////
  const [, drop] = useDrop({
    accept: "sort",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  //////////////////////////////

  //////
  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;

  const statusLock = element.type === "bun" ? true : false;

  return (
    <>
      <li
        className={`${styles.dragIconConstructorElementWrapper} mb-4 ml-4 mr-4`}
        key={element.dropUniqID}
        ref={ref}
        style={{ ...styles, opacity }}
      >
        <DragIcon />
        <ConstructorElement
          isLocked={statusLock}
          text={element.name}
          price={element.price}
          thumbnail={element.image}
          handleClose={() => handeOnDeleteIngredient(element)}
        />
      </li>
    </>
  );
}

export default DraggableIngradient;

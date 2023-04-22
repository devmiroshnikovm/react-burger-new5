// ... Other imports and code

function BurgerConstructor(props) {
  // ... Other code

  return (
    <>
      <div
        className={styles.box + " pt-25"}
        style={{ border: `1px solid ${borderColor}` }}
        ref={drop}
      >
        <div className={`${styles.scrollContainer} custom-scroll`}>
          <ul className={styles.list}>
            {elements.map((element) => {
              const statusLock = element.type === "bun" ? true : false;

              const elementRef = useRef(null);

              const [{ isDragging }, dragElement] = useDrag({
                type: "sort",

                item: () => {
                  return { ...element };
                },
                collect: (monitor) => ({
                  isDragging: monitor.isDragging(),
                }),
              });

              dragElement(elementRef);

              return (
                <li
                  className={`${styles.dragIconConstructorElementWrapper} mb-4`}
                  key={element.dropUniqID}
                  ref={elementRef}
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
              );
            })}
          </ul>
        </div>
        {/* ... Other elements */}
      </div>
      {/* ... Other elements */}
    </>
  );
}

// ... PropTypes and export

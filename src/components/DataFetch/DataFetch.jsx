import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchData } from "../../services/actions/ingredients.js";
import { getElementsFromAPISelector } from "../../services/actions/selectors/getElementsFromAPISelector";

const { data, dataRequest, dataFailed } = useSelector(
  getElementsFromAPISelector
);

function DataFetch() {
  const dispatch = useDispatch();
  const { data, dataRequest, dataFailed } = useSelector(
    getElementsFromAPISelector
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Handling the rendering of products and error
  return (
    <>
      {dataRequest && <div>dataRequest...</div>}
      {dataFailed && <div>dataFailed</div>}
      {data.map((element) => (
        <p key={element.key}>{element.name}</p>
      ))}
    </>
  );
}

export default DataFetch;

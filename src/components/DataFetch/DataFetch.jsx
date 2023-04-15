import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchData } from "../../services/actions/ingredients.js";

function DataFetch() {
  const dispatch = useDispatch();
  const { data, dataRequest, dataFailed } = useSelector(
    (state) => state.ingredients
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

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import stylesApp from "./stylesApp.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../Loading/Loading";

import { fetchData } from "../../services/actions/ingredients.js";
//import { addSyntheticLeadingComment, getAllJSDocTagsOfKind } from "typescript";
//import { store } from "../../services/store/store";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { getElementsFromAPISelector } from "../../services/actions/selectors/getElementsFromAPISelector";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data_old, setData_old] = useState([]);

  const [isOpen, setIsPopupOpen] = useState(false);

  function handleOpenModal() {
    setIsPopupOpen(true);
  }

  function handleCloseModal() {
    setIsPopupOpen(false);
  }

  const { data, dataRequest, dataFailed } = useSelector(
    getElementsFromAPISelector
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {dataRequest ? (
          <Loading />
        ) : (
          <>
            <div className={stylesApp.topBox}>
              <AppHeader />
              <main className={stylesApp.box}>
                <BurgerIngredients
                  isOpen={isOpen}
                  handleOpenModal={handleOpenModal}
                  handleCloseModal={handleCloseModal}
                />
                <BurgerConstructor
                  isOpen={isOpen}
                  handleOpenModal={handleOpenModal}
                  handleCloseModal={handleCloseModal}
                />
              </main>
            </div>
          </>
        )}
      </DndProvider>
    </>
  );
}

export default App;

/* 
// App.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data && data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}

export default App;
 */

/* return (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <div className={stylesApp.topBox}>
          <AppHeader />
          <main className={stylesApp.box}>
            <BurgerIngredients
              elements={data}
              isOpen={isOpen}
              handleOpenModal={handleOpenModal}
              handleCloseModal={handleCloseModal}
            />
            <BurgerConstructor
              elements={data}
              isOpen={isOpen}
              handleOpenModal={handleOpenModal}
              handleCloseModal={handleCloseModal}
            />
          </main>
        </div>
      </>
    )}
  </>
);
 */

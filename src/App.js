import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import stylesApp from "./stylesApp.module.css";
import { useEffect, useState } from "react";

import ErrorMock from "./components/ErrorMock/ErrorMock";
import Loading from "./components/Loading/Loading";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [isOpen, setIsPopupOpen] = useState(false);

  function handleOpenModal() {
    setIsPopupOpen(true);
  }

  function handleCloseModal() {
    setIsPopupOpen(false);
  }

  //test

  useEffect(() => {
    // Код эффекта

    console.log("start fetch");

    const config = {
      baseUrl: "https://norma.nomoreparties.space/api/ingredients",
      headers: {
        "Content-Type": "application/json",
      },
    };
    async function checkResponse(result) {
      if (result.ok) {
        return await result.json();
      } else {
        throw new Error(`Ошибка: ${result.status}`);
      }
    }

    async function getRequest() {
      const result = await fetch(config.baseUrl, {
        method: "GET",
        headers: config.headers,
      });
      return await checkResponse(result);
    }

    const getState = async () => {
      try {
        const result = await getRequest();
        console.log(result);

        setTimeout(() => {
          setData(result.data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    };

    getState();

    // Код сброса
    return () => {
      // отписка от событий, закрытие соединений
    };
  }, []);

  if (error) {
    return <ErrorMock error={error.message} />;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* отрисовываем главную страницу */}
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
}

export default App;

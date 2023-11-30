import React, { createContext, useState, useEffect, useMemo, useReducer } from "react";
import axios from "axios";

export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "grey",
  },
};

export const initialState = { theme: themes.light, data: [] };

const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter(card => card.id !== action.payload.id);
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

  const [theme, setTheme] = useState(storedTheme ? JSON.parse(storedTheme) : themes.light);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, storedFavorites || []);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.dark ? themes.light : themes.dark));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('theme', JSON.stringify(theme));
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.setItem('theme', JSON.stringify(theme));
      });
    };
  }, [theme]);

  const getData = async () => {
    try {
      const urlApi = "https://jsonplaceholder.typicode.com/users";
      setLoading(true);

      const res = await axios.get(urlApi);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = card => {
    dispatchFavorites({ type: ADD_TO_FAVORITES, payload: card });
  };

  const removeFromFavorites = card => {
    dispatchFavorites({ type: REMOVE_FROM_FAVORITES, payload: card });
  };

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    };
  }, [favorites]);

  const contextValue = useMemo(() => ({ theme, handleChangeTheme, data, favorites, addToFavorites, removeFromFavorites }), [theme, handleChangeTheme, data, favorites]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
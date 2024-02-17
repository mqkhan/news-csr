import { createContext, useReducer, useContext } from "react";

const NewsContext = createContext();

const initialState = {
  articles: [],
};

const newsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

// const NewsProvider = ({ children }) =>

function NewsProvider({ children }) {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  function setArticles(articles) {
    dispatch({ type: "SET_ARTICLES", payload: articles });
  }

  return (
    <NewsContext.Provider value={{ state, setArticles }}>
      {children}
    </NewsContext.Provider>
  );
}

const useNewsContext = () => useContext(NewsContext);

// const useNewsContext = () => {
//   const context = useContext(NewsContext);
//   if (!context) {
//     throw new Error("useNewsContext must be used within a NewsProvider");
//   }
//   return context;
// };

export { NewsProvider, useNewsContext };

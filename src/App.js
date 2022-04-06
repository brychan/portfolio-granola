import { Fragment, useEffect, useReducer, useRef } from "react";
import "./App.css";
import oats from "./images/oats.png";

import data from "./data/_ingredients";

import CategoriesPage from "./pages/CategoriesPage";
import {
  shapeDividerCalculator,
  shapeDividerRecipes,
  shapeDividerHome,
} from "./utilities/_svgs";

import CalculatorPage from "./pages/CalculatorPage";
import RecipePage from "./pages/RecipePage";

const initialState = {
  data,
  added: [
    {
      ...data[0],
      amount: data[0].portion,
    },
    {
      ...data[1],
      amount: data[1].portion,
    },
  ],
};

function reducer(state, action) {
  let index = 0;
  switch (action.type) {
    case "setAmountInput":
      index = state.added.findIndex((row) => row.id === action.payload.id);
      return {
        ...state,
        added: [
          ...state.added.slice(0, index),
          {
            ...state.added[index],
            amount: action.payload.amount,
          },
          ...state.added.slice(index + 1),
        ],
      };
    case "addToList":
      return {
        ...state,
        added: [
          ...state.added,
          {
            ...action.payload,
            amount: action.payload.portion,
          },
        ],
      };
    case "removeFromList":
      index = state.added.findIndex((row) => row.id === action.payload.id);
      return {
        ...state,
        added: [
          ...state.added.slice(0, index),
          ...state.added.slice(index + 1),
        ],
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const calculatorRef = useRef();
  const recipeRef = useRef();

  useEffect(() => {
    console.log("State changed", state.added);
  }, [state]);

  return (
    <Fragment>
      <section className="min-h-screen">
        <div className="container mt-5">
          <img className="h-32 w-32 float-left" src={oats} alt=""/>
          <h1 className="text-6xl font-serif font-extrabold">
            Homemade Granola is healthier, cheaper, and you have the control!
          </h1>
          <span className="text-lg font-sans">Heatlhiest Breakfast</span>
        </div>
        <div class="custom-shape-divider-bottom-1649262532">
          {shapeDividerHome}
        </div>
      </section>
      <section className="min-h-screen bg-brown-900">
        <div className="container text-center py-10 ">
          <CategoriesPage calculatorRef={calculatorRef} />
        </div>
      </section>

      <section className="min-h-screen bg-brown-100">
        <div
          class="custom-shape-divider-top-1649189188"
          id="calculator"
          ref={calculatorRef}
        >
          {shapeDividerCalculator}
        </div>
        <div className="container pt-6">
          <CalculatorPage
            dispatch={dispatch}
            state={state}
            recipeRef={recipeRef}
          />
        </div>
      </section>
      <section className="bg-brown-200">
        <div
          class="custom-shape-divider-top-1649243111"
          id="recipe"
          ref={recipeRef}
        >
          {shapeDividerRecipes}
        </div>
        <div className="container mt-6">
          <RecipePage data={state.added} />
        </div>
      </section>
    </Fragment>
  );
}

export default App;

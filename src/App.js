import { Fragment, useEffect, useReducer, useRef } from "react";
import "./App.css";
import homeImg from "./images/homeimg.png";

import data from "./data/_ingredients";

import {
  shapeDividerCalculator,
  shapeDividerRecipes,
  shapeDividerHome,
} from "./utilities/_svgs";
import CategoriesPage from "./pages/CategoriesPage";
import CalculatorPage from "./pages/CalculatorPage";
import RecipePage from "./pages/RecipePage";
import RoundedButton from "./components/RoundedButton";

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
  const categoriesRef = useRef();
  const calculatorRef = useRef();
  const recipeRef = useRef();

  useEffect(() => {
    console.log("State changed", state.added);
  }, [state]);

  return (
    <Fragment>
      <section className="min-h-screen">
        <div className="container text-center">
          <img
            className="mx-auto w-full md:w-4/5 lg:w-3/5 self-center pt-16 w-full"
            src={homeImg}
            alt=""
          />

          <h1 className="text-4xl font-sans mx-8 lg:mx-40 mt-16 text-brown-700">
            Start your journey to the perfect bowl of crunchy, healthy and cheap{" "}
            <span className="font-extrabold underline decoration-wavy decoration-2 text-brown-900">
              Granola!
            </span>
          </h1>
          <div className="mt-12 md:mt-16">
            <RoundedButton
              ref={categoriesRef}
              theme={{
                text: "text-brown-100",
                bg: "bg-brown-900",
                fill: "fill-brown-100",
              }}
              text="To Ingredients"
            />
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1649326114">
          {shapeDividerHome}
        </div>
      </section>
      <section className="min-h-screen bg-brown-900">
        <div className="container text-center py-10 " ref={categoriesRef}>
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

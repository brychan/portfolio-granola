import { Fragment } from "react";
import CompositionBar from "../components/CompositionBar";
import Table from "../components/Table";
import NutritionalFactsTable from "../components/NutritionalFactsTable";
import SelectInput from "../components/SelectInput";
import RoundedButton from "../components/RoundedButton";

export default function CalculatorPage({ dispatch, state, recipeRef }) {
  return (
    <Fragment>
      <div className=" grid md:grid-cols-3 md:my-6 gap-4 ">
        <div className="md:col-span-2">
          <div className="mb-6">
            <h1 className="text-6xl font-extrabold leading-none font-serif tracking-wide text-brown-900 mb-6">
              Create your recipe
            </h1>
            <span className="text-brown-700">
              Start by adding your favorite ingredients, check the oils:solid
              ratio and nutrition facts, and adjust if needed!
            </span>
          </div>
          <SelectInput
            data={state.data}
            added={state.added}
            dispatch={dispatch}
          />
          <Table data={state.added} dispatch={dispatch} />
          <div className="bg-brown-900 my-8 p-6 rounded-lg text-brown-100 shadow-md">
            <h1 className="font-bold text-xl">
              Recommended for a crunchy Granola:
            </h1>
            It's best to keep a ratio of 5:1 solids to fat content. The current
            ratio is:
            <CompositionBar data={state.added} />
          </div>
        </div>
        <div className="md:col-span-1">
          <NutritionalFactsTable data={state.added} />
        </div>
      </div>
      <RoundedButton
        ref={recipeRef}
        theme={{
          text: "text-brown-100",
          bg: "bg-brown-900",
          fill: "fill-brown-100",
        }}
        text="To the Recipe"
      />
    </Fragment>
  );
}

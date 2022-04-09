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
              Add your favorite ingredients and see the results instantly!
            </span>
          </div>
          <SelectInput
            data={state.data}
            added={state.added}
            dispatch={dispatch}
          />
          <Table data={state.added} dispatch={dispatch} />
          <div className="bg-brown-900 my-8 p-6 rounded-lg text-white shadow-md">
            <h1 className="text-xl">Current ratio</h1>
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

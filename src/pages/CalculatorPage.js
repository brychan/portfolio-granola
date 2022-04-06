import { Fragment } from "react";
import CompositionBar from "../components/CompositionBar";
import Table from "../components/Table";
import NutritionalFactsTable from "../components/NutritionalFactsTable";
import SelectInput from "../components/SelectInput";
import { downChevronIcon } from "../utilities/_svgs";
import scrollTo from "../utilities/_scrollTo";

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
      <button
        onClick={() => scrollTo(recipeRef)}
        className="bg-brown-900 w-fit mx-auto my-10 py-2 px-4 rounded-3xl text-brown-100 flex shadow-lg"
      >
        {downChevronIcon("fill-brown-100")}
        <span className="self-center"> To Recipe Maker</span>
      </button>
    </Fragment>
  );
}

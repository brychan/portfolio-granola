import { Fragment } from "react";
import _categories from "../utilities/_categories";
import { downChevronIcon } from "../utilities/_svgs";
import scrollTo from "../utilities/_scrollTo";

export default function CategoriesPage({ calculatorRef }) {
  return (
    <Fragment>
      <h1 className="text-6xl font-extrabold leading-none font-serif tracking-wide text-brown-100 mt-8">
        Play around with the mix-ins and spices and make it{" "}
        <span className="underline decoration-4">your</span> favorite granola.
      </h1>
      <div className="text-lg m-12 text-brown-200">
        Wether you want a super healthy granola, or one that's
      </div>
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="col-span-3 md:col-span-1">
          <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
            <h2 className="text-3xl text-brown-900 font-semibold">
              Oats & Cereals
            </h2>
            {_categories.Cereals.image}
            <div className="text-md text-brown-700">
              Oats, formally named Avena sativa, is a type of cereal grain from
              the Poaceae grass family of plants. The grain refers specifically
              to the edible seeds of oat grass, which is what ends up in our
              breakfast bowls. Whether loved or hated for their mushy yet hearty
              texture when cooked,
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
            <h2 className="text-3xl text-brown-900 font-semibold">Oils</h2>
            {_categories.Oils.image}
            <div className="text-md text-brown-700">
              Oats, formally named Avena sativa, is a type of cereal grain from
              the Poaceae grass family of plants. The grain refers specifically
              to the edible seeds of oat grass, which is what ends up in our
              breakfast bowls. Whether loved or hated for their mushy yet hearty
              texture when cooked,
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
            <h2 className="text-3xl text-brown-900 font-semibold">Nuts</h2>
            {_categories.Nuts.image}
            <div className="text-md text-brown-700">
              Oats, formally named Avena sativa, is a type of cereal grain from
              the Poaceae grass family of plants. The grain refers specifically
              to the edible seeds of oat grass, which is what ends up in our
              breakfast bowls. Whether loved or hated for their mushy yet hearty
              texture when cooked,
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
            <h2 className="text-3xl text-brown-900 font-semibold">Seeds</h2>
            {_categories.Seeds.image}
            <div className="text-md text-brown-700">
              Oats, formally named Avena sativa, is a type of cereal grain from
              the Poaceae grass family of plants. The grain refers specifically
              to the edible seeds of oat grass, which is what ends up in our
              breakfast bowls. Whether loved or hated for their mushy yet hearty
              texture when cooked,
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
            <h2 className="text-3xl text-brown-900 font-semibold">Sweetener</h2>
            {_categories.Sweetener.image}
            <div className="text-md text-brown-700">
              Oats, formally named Avena sativa, is a type of cereal grain from
              the Poaceae grass family of plants. The grain refers specifically
              to the edible seeds of oat grass, which is what ends up in our
              breakfast bowls. Whether loved or hated for their mushy yet hearty
              texture when cooked,
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
            <h2 className="text-3xl text-brown-900 font-semibold">Toppings</h2>
            {_categories.Toppings.image}
            <div className="text-md text-brown-700">
              Oats, formally named Avena sativa, is a type of cereal grain from
              the Poaceae grass family of plants. The grain refers specifically
              to the edible seeds of oat grass, which is what ends up in our
              breakfast bowls. Whether loved or hated for their mushy yet hearty
              texture when cooked,
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-brown-100 w-fit mx-auto py-2 px-4 rounded-3xl text-brown-900 flex shadow-lg mb-16"
        onClick={() => scrollTo(calculatorRef)}
      >
        {downChevronIcon("fill-brown-900")}
        <span className="self-center"> To calculator</span>
      </button>
    </Fragment>
  );
}

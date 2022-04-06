import { Fragment, useState } from "react";
import { downloadIcon } from "../utilities/_svgs";
export default function RecipePage({ data }) {
  const [portions, setPortions] = useState(4);
  return (
    <Fragment>
      <h1 className="text-6xl font-extrabold leading-none font-serif tracking-wide text-brown-900 mb-6">
        Here is your Recipe:
      </h1>

      <div className="text-brown-700 grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1 h-fit">
          <div className="bg-brown-900 p-8 mb-4 rounded-xl shadow-md  text-brown-100 ">
            <h2 className="text-3xl mb-4 text-white xl:inline">
              Adjust the quantities
            </h2>
            <input
              type="number"
              value={portions}
              onChange={(e) => setPortions(e.target.value)}
              className="rounded-lg p-2 text-brown-700 bg-brown-100 w-1/3 xl:inline xl:ml-4"
            />
            <span className="text-xl"> portions</span>
          </div>
          <div className="bg-brown-100 p-8 rounded-xl shadow-md">
            <h2 className="text-3xl text-brown-900 mb-4">Ingredients</h2>
            <ul className="list-disc pl-10">
              {data.map((ingredient) => (
                <li>
                  {ingredient.amount * portions} grams of{" "}
                  <span className="font-bold">{ingredient.name}</span>.
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-brown-100 p-8 rounded-xl shadow-md col-span-2 md:col-span-1">
          <h2 className="text-3xl text-brown-900 mb-4">Instructions</h2>
          <ol className="list-decimal pl-10">
            <li>
              Preheat oven to 350 degrees Fahrenheit and line a large, rimmed
              baking sheet with parchment paper.
            </li>
            <li>
              In a large mixing bowl, combine the oats, nuts and/or seeds, salt
              and spices. Stir to blend.
            </li>
            <li>
              Pour in the oil and/or sweeteners. Mix well, until every oat and
              nut is lightly coated. Pour the granola onto your prepared pan and
              use a large spoon to spread it in an even layer.
            </li>
            <li>
              Bake until lightly golden, about 21 to 24 minutes, stirring
              halfway (for extra-clumpy granola, press the stirred granola down
              with your spatula to create a more even layer). The granola will
              further crisp up as it cools.
            </li>
            <li>
              Let the granola cool completely, undisturbed (at least 45
              minutes). Top with the dried fruit (and optional chocolate chips,
              if using). Break the granola into pieces with your hands if you
              want to retain big chunks, or stir it around with a spoon if you
              don’t want extra-clumpy granola.
            </li>
            <li>
              Store the granola in an airtight container at room temperature for
              1 to 2 weeks, or in a sealed freezer bag in the freezer for up to
              3 months. The dried fruit can freeze solid, so let it warm to room
              temperature for 5 to 10 minutes before serving.
            </li>
          </ol>
        </div>
      </div>
      <div className="pb-6">
        <button className="bg-brown-900 w-fit mx-auto my-10 py-2 px-4 rounded-3xl text-brown-100 flex shadow-lg">
          {downloadIcon}
          <span className="self-center">Download Recipe</span>
        </button>
      </div>
    </Fragment>
  );
}

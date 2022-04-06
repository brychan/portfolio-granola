import { v4 as uuidv4 } from "uuid";
import leven from "leven";
import { useEffect, useState } from "react";
import CategoryBadge from "./CategoryBadge";
import data from "../data/_ingredients";
import { searchIcon } from "../utilities/_svgs";

function fetchData(filter, added) {
  // Mock an API call
  let result = [];

  data.forEach((element) => {
    let exists = added.find((e) => e === element.id);
    if (leven(element.name, filter) < 6 && !exists) {
      result.push(element);
    }
  });

  return result;
}
export default function SelectInput({ added, dispatch }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    let addedIds = added.map((i) => i.id);
    setData(fetchData(input, addedIds));
  }, [input, added]);
  return (
    <div className="shadow-md rounded-xl">
      <div className="relative">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
            {searchIcon}
          </div>
          <input
            type="text"
            placeholder="Search for ingredients..."
            className="pl-16 pr-4 py-4 bg-black-200 text-black-900 rounded-lg border-0 w-full outline-none placeholder:italic placeholder:text-black-800
            transition ease-in-out focus:bg-black-300 duration-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => {
              setOpen(true);
            }}
            onBlur={() => {
              setTimeout(() => setOpen(false), 150);
            }}
          />
        </div>

        <ul
          className={` transition-all delay-150 duration-300  ounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3 rounded-xl ${
            !open || data.length === 0 ? "hidden" : ""
          }`}
        >
          <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
            Recommended
          </li>
          {data.map((ingredient) => (
            <Row
              key={uuidv4()}
              ingredient={ingredient}
              dispatch={dispatch}
              setInput={setInput}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Row({ ingredient, dispatch, setInput }) {
  return (
    <li
      className="grid grid-cols-10 gap-1 justify-center items-center cursor-pointer px-4 py-2 rounded-lg transition ease-in-out hover:bg-black-200 duration-300"
      onClick={() => {
        dispatch({
          type: "addToList",
          payload: ingredient,
        });
        setInput("");
      }}
    >
      <div className="font-bold col-span-3">
        <CategoryBadge category={ingredient.category} />
      </div>
      <div className="col-span-7 pl-7 border-l-2 border-solid border-gray">
        <h3 className="text-gray-900 font-semibold text-lg">
          {ingredient.name}
        </h3>
        <p className="text-gray-500 mt-1 font-regular text-sm">
          {ingredient.description}
        </p>
      </div>
    </li>
  );
}

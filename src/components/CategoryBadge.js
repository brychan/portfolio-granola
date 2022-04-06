import _categories from "../utilities/_categories";

export default function CategoryBadge({ category }) {
  return (
    <div
      className={
        "w-fit md:pl-1 md:pr-2 md:py-1 p-2 rounded-xl flex justify-self-center border " +
        _categories[category].bg +
        _categories[category].border +
        _categories[category].text
      }
    >
      <span className="hidden md:inline md:pr-1">
        {_categories[category].icon}
      </span>
      <span className="font-bold self-center">{category}</span>
    </div>
  );
}

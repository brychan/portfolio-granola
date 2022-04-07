import cerealsImg from "../images/oats.png";
import oilsImg from "../images/oils.png";
import nutsImg from "../images/nuts.png";
import sweetenerImg from "../images/sweetener.png";
import seedsImg from "../images/seeds.png";
import toppingsImg from "../images/toppings.png";

const _categories = {
  Cereals: {
    bg: "bg-brown-100 ",
    text: "text-brown-900 ",
    border: "border-brown-900 ",
    icon: <img src={cerealsImg} alt="" className="w-9 h-9 inline" />,
    image: (
      <img src={cerealsImg} alt="" className="w-2/5 m-auto self-center mt-5" />
    ),
  },
  Nuts: {
    bg: "bg-red-100 ",
    text: "text-red-300 ",
    border: "border-red-300 ",
    icon: <img src={nutsImg} alt="" className="w-9 h-9 inline" />,
    image: (
      <img src={nutsImg} alt="" className="w-2/5 m-auto self-center mt-5" />
    ),
  },
  Oils: {
    bg: "bg-yellow-100 ",
    text: "text-yellow-200 ",
    border: "border-yellow-200 ",
    icon: <img src={oilsImg} alt="" className="w-9 h-9 inline" />,
    image: (
      <img src={oilsImg} alt="" className="w-2/5 m-auto self-center mt-5" />
    ),
  },
  Sweetener: {
    bg: "bg-yellow-100 ",
    text: "text-yellow-200 ",
    border: "border-yellow-200 ",
    icon: <img src={sweetenerImg} alt="" className="w-9 h-9 inline" />,
    image: (
      <img
        src={sweetenerImg}
        alt=""
        className="w-2/5 m-auto self-center mt-5"
      />
    ),
  },
  Toppings: {
    bg: "bg-yellow-100 ",
    text: "text-yellow-200 ",
    border: "border-yellow-200 ",
    icon: <img src={toppingsImg} alt="" className="w-9 h-9 inline" />,
    image: (
      <img src={toppingsImg} alt="" className="w-2/5 m-auto self-center mt-5" />
    ),
  },
  Seeds: {
    bg: "bg-yellow-100 ",
    text: "text-yellow-200 ",
    border: "border-yellow-200 ",
    icon: <img src={seedsImg} alt="" className="w-9 h-9 inline" />,
    image: (
      <img src={seedsImg} alt="" className="w-2/5 m-auto self-center mt-5" />
    ),
  },
};

export default _categories;

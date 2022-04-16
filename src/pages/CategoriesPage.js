import { Fragment } from 'react'
import _categories from '../utilities/_categories'
import RoundedButton from '../components/RoundedButton'

export default function CategoriesPage({ calculatorRef }) {
    return (
        <Fragment>
            <h1 className="text-6xl font-extrabold leading-none font-serif tracking-wide text-brown-100 mt-8">
                Different bowls for different people.
            </h1>
            <div className="text-lg m-12 text-brown-200">
                Explore the assortment of ingredients and their benefits! Play
                around with the mix-ins and spices and make it{' '}
                <span className="underline decoration-2">your</span> favorite
                granola.
            </div>
            <div className="grid grid-cols-3 gap-8 mb-16">
                <div className="col-span-3 md:col-span-1">
                    <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
                        <h2 className="text-3xl text-brown-900 font-semibold">
                            Oats & Cereals
                        </h2>
                        {_categories.Cereals.image}
                        <div className="text-md text-brown-700">
                            Heart-healthy, hearty, whole-grain old-fashioned
                            oats keep their shape during baking. Be sure to use
                            certified gluten-free oats if you need gluten-free
                            granola.{' '}
                            <span className="font-bold">
                                Rolled Quinoa flakes
                            </span>{' '}
                            are a good alternative too!
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
                        <h2 className="text-3xl text-brown-900 font-semibold">
                            Oils
                        </h2>
                        {_categories.Oils.image}
                        <div className="text-md text-brown-700">
                            Oil helps make granola crisp and irresistible.{' '}
                            <span className="font-bold">
                                Unrefined coconut oil
                            </span>{' '}
                            is recommended, which is delicious (you can barely
                            taste the coconut, if at all) and produces the
                            perfect texture. You can use{' '}
                            <span className="font-bold">
                                Extra-virgin olive oil
                            </span>{' '}
                            instead, if you’d like your granola to be a little
                            more on the savory side.
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
                        <h2 className="text-3xl text-brown-900 font-semibold">
                            Nuts
                        </h2>
                        {_categories.Nuts.image}
                        <div className="text-md text-brown-700">
                            Nuts are high in "good" fats, low in carbs, good
                            source of fibre, and packed with several important
                            nutrients. Explore the different types, though we
                            recommend{' '}
                            <span className="font-bold">
                                Walnuts, Almonds and Pecans
                            </span>{' '}
                            for their health benefits.
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
                        <h2 className="text-3xl text-brown-900 font-semibold">
                            Seeds
                        </h2>
                        {_categories.Seeds.image}
                        <div className="text-md text-brown-700">
                            Seeds are great sources of fiber, healthy fats, and
                            many important vitamins, minerals and antioxidants.
                            When consumed as part of a healthy diet, seeds can
                            help reduce blood sugar, cholesterol and blood
                            pressure! We recommend{' '}
                            <span className="font-bold">
                                Pumpink and Sunflower seeds
                            </span>
                            .
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
                        <h2 className="text-3xl text-brown-900 font-semibold">
                            Sweeteners
                        </h2>
                        {_categories.Sweetener.image}
                        <div className="text-md text-brown-700">
                            Though not really necessary, Natural Sweeteners will
                            make your granola taste amazing, give it structure,
                            and as a bonues, infuse it with extra-delicious
                            flavours. We recommend{' '}
                            <span className="font-bold">
                                Real maple syrup or Honey
                            </span>
                            .
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="bg-white  rounded-xl shadow-md p-8 mx-12 md:mx-0 text-center">
                        <h2 className="text-3xl text-brown-900 font-semibold">
                            Toppings
                        </h2>
                        {_categories.Toppings.image}
                        <div className="text-md text-brown-700">
                            There are several toppings ranging from healthy to
                            not so healthy. Dried fruit lends some extra
                            sweetness, chewy texture and irresistible fruity
                            flavor. You can add chocolate chips after the
                            granola has completely cooled (otherwise, they’ll
                            melt).
                        </div>
                    </div>
                </div>
            </div>
            <RoundedButton
                ref={calculatorRef}
                theme={{
                    text: 'text-brown-900',
                    bg: 'bg-brown-100',
                    fill: 'fill-brown-900',
                }}
                text="To Calculator"
            />
        </Fragment>
    )
}

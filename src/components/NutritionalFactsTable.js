import { useEffect, useState } from 'react'

export default function NutritionalFactsTable({ data }) {
    const [dataTable, setDataTable] = useState(null)
    useEffect(() => {
        setDataTable(calculateNutrition(data))
    }, [data])

    if (!dataTable) return <div>Loading...</div>
    const portion = dataTable.nutrition
    return (
        <div className="font-sans w-full bg-brown-100 text-brown-700 p-5 md:p-2 lg:p-4 rounded-lg border-brown-700 border-2">
            <div className="lg:text-6xl text-5xl font-extrabold leading-none font-serif tracking-wide text-brown-900">
                Nutrition Facts
            </div>
            <div className="flex justify-between font-bold border-b-8 border-black">
                <div>Serving size</div>
                <div>2/3 cup ({portion.weight}g)</div>
            </div>
            <div className="flex justify-between items-end font-extrabold my-2 text-brown-900">
                <div>
                    <div className="lg:text-3xl md:text-2xl text-3xl">
                        Calories
                    </div>
                </div>
                <div className="lg:text-4xl md:text-2xl text-4xl">
                    {portion.calories.toFixed(2)}
                </div>
            </div>
            <div className="border-t-4 border-black text-md pb-1">
                <div className="text-right font-bold pt-1 pb-1">
                    % Daily value*
                </div>
                <hr className="border-gray-500" />
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Total Fat</span>{' '}
                        {portion.fat.toFixed(2)}g
                    </div>
                    <div className="font-bold">{dataTable.cDV.fat}%</div>
                </div>
                <hr className="border-gray-500" />
                <div className="flex justify-between">
                    <div>Saturated Fat {portion.fat_sat.toFixed(2)}g</div>
                    <div className="font-bold">{dataTable.cDV.fat_sat}%</div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Monounsaturated Fat {portion.fat_mono.toFixed(2)}g
                    </div>
                    <div className="font-bold">{dataTable.cDV.fat_mono}%</div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Polyunsaturated Fat {portion.fat_poly.toFixed(2)}g
                    </div>
                    <div className="font-bold">{dataTable.cDV.fat_poly}%</div>
                </div>
                <div>
                    <span className="italic">Trans Fat</span>{' '}
                    {portion.fat_trans.toFixed(2)}g
                </div>
                <hr className="border-gray-500" />
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Cholesterol</span> 0mg
                    </div>
                    <div className="font-bold">0%</div>
                </div>
                <hr className="border-gray-500" />
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Sodium</span> 160mg
                    </div>
                    <div className="font-bold">7%</div>
                </div>
                <hr className="border-gray-500" />
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Total Carbohydrate</span>{' '}
                        {portion.carbs.toFixed(2)}g
                    </div>
                    <div className="font-bold">{dataTable.cDV.carbs}%</div>
                </div>
                <hr className="border-gray-500" />
                <div className="flex justify-between">
                    <div className="pl-4">
                        Dietary Fiber {portion.carbs_fiber.toFixed(2)}g
                    </div>
                    <div className="font-bold">
                        {dataTable.cDV.carbs_fiber}%
                    </div>
                </div>
                <hr className="border-gray-500" />
                <div className="pl-4">
                    Total Sugar {portion.carbs_sugar.toFixed(2)}g
                </div>
                <hr className="border-gray-500" />
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Protein</span>{' '}
                        {portion.protein.toFixed(2)}g
                    </div>
                    <div className="font-bold">{dataTable.cDV.protein}%</div>
                </div>
            </div>
            <div className="text-sm">
                <div className="border-t-4 border-black flex leading-none text-xs pt-2 pb-1">
                    <div className="pr-1">*</div>
                    <div>
                        The % Daily Value (DV) tells you how much a nutrient in
                        a serving of food contributes to a daily diet. 2,000
                        calories a day is used for general nutrition advice.
                    </div>
                </div>
            </div>
        </div>
    )
}

const DV = {
    carbs_fiber: 28,
    carbs: 300,
    protein: 50,
    fat: 78,
    fat_sat: 17,
    fat_poly: 17,
    fat_mono: 44,
}

function calculateNutrition(data) {
    let nutrition = {
        weight: 0,
        calories: 0,
        protein: 0,
        carbs_fiber: 0,
        carbs: 0,
        carbs_sugar: 0,
        fat: 0,
        fat_sat: 0,
        fat_trans: 0,
        fat_poly: 0,
        fat_mono: 0,
    }

    data.forEach((ingredient) => {
        nutrition = {
            weight: Number(nutrition.weight) + Number(ingredient.amount),
            calories:
                nutrition.calories +
                (ingredient.nutrition.calories_100 * ingredient.amount) / 100,
            protein:
                nutrition.protein +
                (ingredient.nutrition.protein * ingredient.amount) / 100,
            carbs_fiber:
                nutrition.carbs_fiber +
                (ingredient.nutrition.carbs_fiber * ingredient.amount) / 100,
            carbs:
                nutrition.carbs +
                (ingredient.nutrition.carbs * ingredient.amount) / 100,
            carbs_sugar:
                nutrition.carbs_sugar +
                (ingredient.nutrition.carbs_sugar * ingredient.amount) / 100,
            fat:
                nutrition.fat +
                (ingredient.nutrition.fat * ingredient.amount) / 100,
            fat_sat:
                nutrition.fat_sat +
                (ingredient.nutrition.fat_sat * ingredient.amount) / 100,
            fat_trans:
                nutrition.fat_trans +
                (ingredient.nutrition.fat_trans * ingredient.amount) / 100,
            fat_poly:
                nutrition.fat_poly +
                (ingredient.nutrition.fat_poly * ingredient.amount) / 100,
            fat_mono:
                nutrition.fat_mono +
                (ingredient.nutrition.fat_mono * ingredient.amount) / 100,
        }
    })
    let cDV = {
        carbs_fiber: parseInt((nutrition.carbs_fiber / DV.carbs_fiber) * 100),
        carbs: parseInt((nutrition.carbs / DV.carbs) * 100),
        fat: parseInt((nutrition.fat / DV.fat) * 100),
        protein: parseInt((nutrition.protein / DV.protein) * 100),
        fat_sat: parseInt((nutrition.fat_sat / DV.fat_sat) * 100),
        fat_poly: parseInt((nutrition.fat_poly / DV.fat_poly) * 100),
        fat_mono: parseInt((nutrition.fat_mono / DV.fat_mono) * 100),
    }
    return { nutrition, cDV }
}

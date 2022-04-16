import _categories from '../utilities/_categories'
function calculateComposition(data) {
    let weight = 0
    let result = {}
    data.forEach((element) => {
        if (result.hasOwnProperty(element.category))
            result[element.category] += element.amount
        else
            result = {
                ...result,
                [element.category]: element.amount,
            }
        weight += element.amount
    })
    return {
        categories: result,
        weight,
    }
}

export default function CompositionBar({ data }) {
    const composition = calculateComposition(data)
    return (
        <div className="mt-4">
            {Object.keys(composition.categories).map((category) => {
                let percentage =
                    (composition.categories[category] * 100) /
                    composition.weight
                return (
                    <div
                        key={category}
                        className={
                            'text-md leading-none py-1 text-center inline-block font-semibold min-w-min ' +
                            _categories[category].bg +
                            _categories[category].text
                        }
                        style={{ width: `${Number(percentage)}%` }}
                    >
                        {percentage.toFixed(1)}% {category}
                    </div>
                )
            })}
        </div>
    )
}

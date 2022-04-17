import { useState } from 'react'
import { closeIcon, editIcon, confirmIcon } from '../utilities/_svgs'
import CategoryBadge from './CategoryBadge'
import Input from './Input'

export default function Table({ data, dispatch }) {
    const [inputData, setInputData] = useState({
        id: null,
        amount: 0,
    })
    const handleConfirm = (id) => {
        console.log(inputData)
        dispatch({
            type: 'setAmountInput',
            payload: {
                id: inputData.id,
                amount: parseFloat(inputData.amount),
            },
        })
        setInputData({
            id: null,
            amount: 0,
        })
    }
    return (
        <div className="w-full text-xl mt-6 rounded-lg bg-white p-4 shadow-md">
            {data.map((row) => (
                <div
                    key={row.id}
                    className="text-brown-900 border-b-2 border-brown-900 grid grid-cols-4 md:grid-cols-8 place-items-center items-center py-2"
                    aria-label={`table-ingredient-${row.name}`}
                    role="listitem"
                >
                    <div className="md:col-span-2">
                        <CategoryBadge category={row.category} />
                    </div>
                    <div className="md:col-span-3">
                        <span className="font-bold">{row.name}</span>
                    </div>
                    <div className="md:col-span-2">
                        {inputData.id === row.id ? (
                            <Input
                                value={inputData.amount}
                                label={`edit-input-${row.name}`}
                                onChange={(e) => {
                                    setInputData({
                                        ...inputData,
                                        amount: e.target.value,
                                    })
                                }}
                            />
                        ) : (
                            <span>{row.amount} grams</span>
                        )}
                    </div>

                    <div className="md:col-span-1 justify-self-end">
                        {inputData.id === row.id ? (
                            <button
                                aria-label={`confirm-edit-ingredient-item-${row.name}`}
                                onClick={() => handleConfirm(row.id)}
                            >
                                {confirmIcon}
                            </button>
                        ) : (
                            <button
                                aria-label={`edit-ingredient-item-${row.name}`}
                                onClick={() =>
                                    setInputData({
                                        id: row.id,
                                        amount: row.amount,
                                    })
                                }
                            >
                                {editIcon}
                            </button>
                        )}
                        <button
                            aria-label={`delete-ingredient-item-${row.name}`}
                            onClick={() =>
                                dispatch({
                                    type: 'removeFromList',
                                    payload: {
                                        id: row.id,
                                    },
                                })
                            }
                        >
                            {closeIcon}
                        </button>
                    </div>
                </div>
            ))}
            {data.length === 0 && (
                <div className="p-2">No ingredients found.</div>
            )}
        </div>
    )
}

import {
    render,
    fireEvent,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Happy Path', () => {
    test('The input renders empty & No results in DOM', async () => {
        render(<App />)
        const searchInput = screen.getByRole('textbox', {
            name: 'search-ingredients',
        })
        expect(searchInput).toHaveValue('')

        const resultIngredient = await screen.queryByRole('button', {
            name: 'search-ingredients-item',
        })
        expect(resultIngredient).not.toBeInTheDocument()
    })

    test('On writing, Box shows up and results appear. On clearing input, Box dissapears.', async () => {
        render(<App />)

        const hiddenResultBox = screen.queryByRole('list', {
            name: 'search-ingredients-item',
        })
        expect(hiddenResultBox).not.toBeInTheDocument()

        const searchInput = screen.getByRole('textbox', {
            name: 'search-ingredients',
        })
        userEvent.clear(searchInput)
        userEvent.type(searchInput, 'walnuts')

        await waitFor(async () => {
            const resultsBox = await screen.findByRole('list', {
                name: 'search-ingredients-list',
            })
            expect(resultsBox).toBeInTheDocument()
        })

        userEvent.clear(searchInput)
        waitForElementToBeRemoved(() =>
            screen.queryByRole('list', {
                name: 'search-ingredients-list',
            })
        )
    })

    test('Adds, Removes and Edits Ingredient', async () => {
        render(<App />)
        // Open Search input, type and click to Add Ingredient
        const searchInput = screen.getByRole('textbox', {
            name: 'search-ingredients',
        })
        userEvent.clear(searchInput)
        userEvent.type(searchInput, 'wal')

        const addIngredientButton = await screen.findByRole('button', {
            name: 'search-ingredients-item-Walnuts',
        })

        fireEvent.click(addIngredientButton)

        // It gets added to the table of ingredients
        const ingredientsTableItem = await screen.findByRole('listitem', {
            name: 'table-ingredient-Walnuts',
        })
        expect(ingredientsTableItem).toBeInTheDocument()

        // It gets added to the composition table
        const compositionBar = await screen.findByText(/41.4/)
        expect(compositionBar).toBeInTheDocument()

        // It gets added to the recipe list
        const recipeIngredientsList = await screen.findAllByRole('listitem', {
            name: 'recipe-ingredient-item',
        })
        expect(recipeIngredientsList).toHaveLength(3)

        // It gets added to the Nutritional Facts Table
        const nutritionalTable = await screen.findByText(/136.6g/)
        expect(nutritionalTable).toBeInTheDocument()

        // Delete the ingredient
        const deleteButton = screen.getByRole('button', {
            name: 'delete-ingredient-item-Walnuts',
        })
        fireEvent.click(deleteButton)

        // It gets deleted from the table of ingredients
        const deletedIngredientFromTable = screen.queryByRole('listitem', {
            name: 'table-ingredient-Walnuts',
        })
        expect(deletedIngredientFromTable).not.toBeInTheDocument()

        // It gets deleted from the composition table
        const deletedIngredientFromComposition = screen.queryByText(/41.4/)
        expect(deletedIngredientFromComposition).not.toBeInTheDocument()

        // It gets deleted from the recipe list
        const deletedFromRecIngList = screen.getAllByRole('listitem', {
            name: 'recipe-ingredient-item',
        })
        expect(deletedFromRecIngList).toHaveLength(2)

        // It gets deleted from the Nutritional Facts Table
        const deletedNutritionalTable = screen.queryByText(/136.6g/)
        expect(deletedNutritionalTable).not.toBeInTheDocument()

        // Edit Amount - Clicks on Edit button, checks that Edit inputs shows up, then edits and clicks on confirm Button
        const editButton = screen.getByRole('button', {
            name: 'edit-ingredient-item-Oats',
        })
        fireEvent.click(editButton)

        const editInput = await screen.findByRole('textbox', {
            name: 'edit-input-Oats',
        })
        expect(editInput).toBeInTheDocument()

        await userEvent.type(editInput, '0')
        const confirmEditButton = screen.getByRole('button', {
            name: 'confirm-edit-ingredient-item-Oats',
        })
        fireEvent.click(confirmEditButton)

        // It gets edited in the Table of Ingredients
        const newAmountValue = screen.getByText(/800 grams/i)
        expect(newAmountValue).toBeInTheDocument()

        // It gets edited at the Composition Table
        const editedIngredientFromComposition = screen.queryByText(/96.6/)
        expect(editedIngredientFromComposition).toBeInTheDocument()

        // It gets edited at the Nutritional Facts Table
        const editedNutritionalTable = screen.queryByText(/3198.97/)
        expect(editedNutritionalTable).toBeInTheDocument()

        // It gets edited at the Recipe's Ingredients List
        const editedRecipesList = screen.getByText(/3200 grams/i)
        expect(editedRecipesList).toBeInTheDocument()
    })
})

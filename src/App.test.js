import { render, screen } from '@testing-library/react'
import App from './App'

/*
  TODOs Before:
    - Set fetch from 'API' to timeout.
    - Try to async/await .

      Not Happy path: validate input.
  Sections:
    - Calculator Page: test:
        * The input renders empty
        * On writing, results show up
        * On clearing input, results dissapear
        * On clicking on an ingredient:
              * It gets added to the table of ingredients
              * It gets added to the Nutritional Facts Table
              * It gets added to the composition table
              * It gets added to the recipe list
        * On deleting the ingredient:
              * It gets deleted from table of ingredients
              * It gets deleted from Nutritional Facts Table
              * It gets deleted from composition table
              * It gets deleted from recipe list
        * On editing the ingredient:
          * An input shows up
          * On modifying the input value:
              * It gets added to the table of ingredients
              * It gets added to the Nutritional Facts Table
              * It gets added to the composition table
              * It gets added to the recipe list
*/

test('App Happy Path', () => {
    render(<App />)
    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toBeInTheDocument()
})

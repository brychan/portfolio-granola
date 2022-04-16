import React from 'react'
import { downChevronIcon } from '../utilities/_svgs'
import scrollTo from '../utilities/_scrollTo'

const RoundedButton = React.forwardRef(({ theme, text }, ref) => (
    <button
        className={
            'w-fit mx-auto py-2 px-4 rounded-3xl flex shadow-lg mb-16 ' +
            theme.bg +
            ' ' +
            theme.text
        }
        onClick={() => scrollTo(ref)}
    >
        {downChevronIcon(theme.fill)}
        <span className="self-center">{text}</span>
    </button>
))

export default RoundedButton

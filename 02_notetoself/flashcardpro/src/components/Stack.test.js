import React from 'react'
import { shallow } from 'enzyme'

/* The Stack component is in curlies here since Stack.js itself is a connected component
which we cannot test (at least easily) by itself. So I have exported the class Stack (see Stack.js)
instead of the exported, connected component. This allows me to test the class rather than the
exported component */
import { Stack } from './Stack'
import { stack } from '../data/fixtures'

// The Stack component which has been imported needs a notion of props.
const props = { stack }

// This is now a data object called fixtures.js within the ./data folder
// const props = {
//     stack: {
//         id: 0,
//         title: 'test title',
//         cards: [{ id: 0, prompt: 'test prompt', answer: 'test answer' },
//                 { id: 1, prompt: 'test prompt deux', answer: 'test answwer deux'}]
//     }
// }

describe('Stack', () => {
    const stack = shallow(<Stack {...props} />)

    it('renders the title', () => {
        // console.log(stack.debug())
        expect(stack.find('h3').text()).toEqual(props.stack.title)
    })

    it('renders the Link home', () => {
        expect(stack.find('Link h4').text()).toEqual('Home')
    })

    it('renders the correct number of cards', () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length)
    })
})
import React from 'react'
import ReactDom from 'react-dom'
import BurgerNav from '../../src/BurgerNav'

let Demo = React.createClass({

    getItems() {
        let items = [
            <a key="0" href="">Favorites</a>,
            <a key="1" href="">Alerts</a>,
            <a key="2" href="">Messages</a>,
            <a key="3" href="">Comments</a>,
            <a key="4" href="">Analytics</a>,
            <a key="5" href="">Reading List</a>
        ]

        return items
    },

    getMenu() {
        const   Menu = BurgerNav,
                items = this.getItems()

        let jsx = (
            <Menu>{items}</Menu>
        )

        return jsx
    },

    render() {

        return (
            <div>
                { this.getMenu() }
            </div>
        )
    }

})

ReactDom.render(<Demo />, document.getElementById('app'))

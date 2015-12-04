import React from 'react'
import baseStyles from './baseStyles'
import BurgerIcon from './BurgerIcon'
import CrossIcon from './CrossIcon'

const BurgerNav = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        isOpen: React.PropTypes.bool,
        children: React.PropTypes.node
    },


    getDefaultProps() {
        return {
            id: '',
            isOpen: false
        }
    },

    getInitialState() {
        return {isOpen: false}
    },

    componentDidMount() {
        window.onkeydown = this.listenForClose
        window.onclick = this.listenForClose
    },

    componentWillUnmount() {
        window.onkeydown = null
        window.onclick = null
    },

    listenForClose(e) {
        const event = e || window.event

        if (this.state.isOpen && (
            event.target.id === 'rbn-overlay' ||
            event.key === 'Escape' ||
            event.keyCode === 27)) {
            this.toggleMenu()
        }
    },

    toggleMenu() {
        this.setState({isOpen: !this.state.isOpen})
    },

    render() {
        let items
        let closeButtonStyles
        const menuWrapStyles = baseStyles.menuWrap(this.state.isOpen)
        const menuStyles = baseStyles.menu()
        const itemListStyles = baseStyles.itemList()

        if (this.props.children) {
            items = React.Children.map(this.props.children, (item, index) => {
                const extraProps = {
                    key: index
                }

                return React.cloneElement(item, extraProps)
            })
        }

        return (
            <div className="rbn-burger-nav">
                <div className="rbn-overlay" onClick={this.toggleMenu}
                  style={baseStyles.overlay(this.state.isOpen)}></div>
                <div id={this.props.id} className={"rbn-menu-wrap"} style={menuWrapStyles}>
                    <div className="rbn-menu" style={menuStyles} >
                        <nav className="rbn-item-list" style={itemListStyles}>
                            {items}
                        </nav>
                    </div>
                    <div style={closeButtonStyles}>
                        <CrossIcon onClick={this.toggleMenu} />
                    </div>
                </div>
                <BurgerIcon onClick={this.toggleMenu} />
            </div>
        )
    }

})

export default BurgerNav

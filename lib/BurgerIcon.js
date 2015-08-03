'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = require('react');
var appendVendorPrefix = require('react-kit/appendVendorPrefix');

var BurgerIcon = React.createClass({
    displayName: 'BurgerIcon',

    getLineStyle: function getLineStyle(index) {
        return appendVendorPrefix({
            borderRadius: 2,
            position: 'absolute',
            height: 4,
            width: 25,
            left: 7,
            top: 10 + 7 * index,
            opacity: this.state.hover ? 0.8 : 1
        });
    },

    handleHover: function handleHover() {
        this.setState({ hover: !this.state.hover });
    },

    getInitialState: function getInitialState() {
        return { hover: false };
    },

    render: function render() {
        var buttonStyle = appendVendorPrefix({
            position: 'relative',
            padding: 0,
            width: 40,
            height: 40,
            border: 'none',
            textIndent: '-60em',
            color: 'transparent',
            background: 'transparent',
            outline: 'none',
            whiteSpace: 'pre'
        });

        return React.createElement(
            'div',
            {
                className: 'rbn-burger-nav',
                style: { position: 'relative' }
            },
            React.createElement('span', { className: 'rbn-burger-icon', style: this.getLineStyle(0) }),
            React.createElement('span', { className: 'rbn-burger-icon', style: this.getLineStyle(1) }),
            React.createElement('span', { className: 'rbn-burger-icon', style: this.getLineStyle(2) }),
            React.createElement(
                'button',
                {
                    onClick: this.props.onClick,
                    onMouseEnter: this.handleHover,
                    onMouseLeave: this.handleHover,
                    style: buttonStyle
                },
                'Open Menu'
            )
        );
    }
});

exports['default'] = BurgerIcon;
module.exports = exports['default'];

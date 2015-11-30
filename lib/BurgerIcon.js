'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BurgerIcon = _react2.default.createClass({
    displayName: 'BurgerIcon',

    propTypes: {
        onClick: _react2.default.PropTypes.func.isRequired
    },

    getInitialState: function getInitialState() {
        return { hover: false };
    },
    getLineStyle: function getLineStyle(index) {
        return {
            position: 'absolute',
            height: '20%',
            left: 0,
            right: 0,
            top: 20 * (index * 2) + '%',
            opacity: this.state.hover ? 0.6 : 1
        };
    },
    handleHover: function handleHover() {
        this.setState({ hover: !this.state.hover });
    },
    render: function render() {
        var buttonStyle = {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 0,
            padding: 0,
            border: 'none',
            fontSize: 14,
            color: 'transparent',
            background: 'transparent',
            outline: 'none',
            cursor: 'pointer'
        };

        return _react2.default.createElement(
            'div',
            { className: 'rbn-burger-button', style: { zIndex: 1 } },
            _react2.default.createElement('span', { className: 'rbn-burger-bars', style: this.getLineStyle(0) }),
            _react2.default.createElement('span', { className: 'rbn-burger-bars', style: this.getLineStyle(1) }),
            _react2.default.createElement('span', { className: 'rbn-burger-bars', style: this.getLineStyle(2) }),
            _react2.default.createElement(
                'button',
                { onClick: this.props.onClick,
                    onMouseEnter: this.handleHover,
                    onMouseLeave: this.handleHover,
                    style: buttonStyle },
                'Open Menu'
            )
        );
    }
});

exports.default = BurgerIcon;
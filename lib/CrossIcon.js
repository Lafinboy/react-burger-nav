'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CrossIcon = _react2.default.createClass({
    displayName: 'CrossIcon',

    propTypes: {
        onClick: _react2.default.PropTypes.func.isRequired
    },

    getCrossStyle: function getCrossStyle(type) {
        return {
            position: 'absolute',
            width: 3,
            height: 14,
            top: 14,
            right: 18,
            cursor: 'pointer',
            transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)',
            zIndex: 1
        };
    },
    render: function render() {
        var buttonStyle = {
            width: 20,
            height: 20,
            position: 'absolute',
            right: 13,
            top: 14,
            padding: 0,
            overflow: 'hidden',
            textIndent: 14,
            fontSize: 14,
            border: 'none',
            background: 'transparent',
            color: 'transparent',
            outline: 'none',
            zIndex: 1,
            cursor: 'pointer'
        };

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('span', { className: 'rbn-cross', style: this.getCrossStyle('before') }),
            _react2.default.createElement('span', { className: 'rbn-cross', style: this.getCrossStyle('after') }),
            _react2.default.createElement(
                'button',
                { onClick: this.props.onClick, style: buttonStyle },
                'Close Menu'
            )
        );
    }
});

exports.default = CrossIcon;
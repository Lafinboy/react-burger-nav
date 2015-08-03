'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = require('react');
var appendVendorPrefix = require('react-kit/appendVendorPrefix');

var CrossIcon = React.createClass({
    displayName: 'CrossIcon',

    getCrossStyle: function getCrossStyle(type) {
        return appendVendorPrefix({
            position: 'absolute',
            width: 3,
            height: 14,
            top: 14,
            right: 18,
            cursor: 'pointer',
            transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)',
            zIndex: 1
        });
    },

    render: function render() {
        var buttonStyle = appendVendorPrefix({
            width: 14,
            height: 14,
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
            zIndex: 1
        });

        return React.createElement(
            'div',
            null,
            React.createElement('span', { className: 'rbn-cross', style: this.getCrossStyle('before') }),
            React.createElement('span', { className: 'rbn-cross', style: this.getCrossStyle('after') }),
            React.createElement(
                'button',
                {
                    onClick: this.props.onClick,
                    style: buttonStyle
                },
                'Close Menu'
            )
        );
    }
});

exports['default'] = CrossIcon;
module.exports = exports['default'];

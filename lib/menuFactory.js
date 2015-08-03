'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = require('react');
var Snap = require('snapsvg');
var appendVendorPrefix = require('react-kit/appendVendorPrefix');
var BurgerIcon = require('./BurgerIcon');
var CrossIcon = require('./CrossIcon');

exports['default'] = function (styles) {

    return React.createClass({

        propTypes: {
            items: React.PropTypes.array,
            id: React.PropTypes.string
        },

        toggleMenu: function toggleMenu() {
            this.setState({ isOpen: !this.state.isOpen });
        },

        listenForClose: function listenForClose(e) {
            if (this.state.isOpen && (e.target.id === 'rbn-overlay' || e.key === 'Escape' || e.keyCode === 27)) {
                this.toggleMenu();
            }
        },

        getDefaultProps: function getDefaultProps() {
            return {
                items: [],
                id: ''
            };
        },

        getInitialState: function getInitialState() {
            return { isOpen: false };
        },

        // componentWillMount: function componentWillMount() {
        //     // Warn if the selected menu requires external wrapper elements
        //     // but none were supplied.
        //     // if (styles.pageWrap && !this.props.pageWrapId) {
        //     //     console.warn('No pageWrapId supplied');
        //     // }

        //     // if (styles.outerContainer && !this.props.outerContainerId) {
        //     //     console.warn('No outerContainerId supplied');
        //     // }
        // },

        componentDidMount: function componentDidMount() {
            window.addEventListener('click', this.listenForClose);
            window.addEventListener('keydown', this.listenForClose);
        },

        componentWillUnmount: function componentWillUnmount() {
            window.removeEventListener('click', this.listenForClose);
            window.removeEventListener('keydown', this.listenForClose);
        },

        // componentDidUpdate: function componentDidUpdate() {
        //     var s, path;

        //     if (styles.svg) {
        //         s = Snap('.bm-morph-shape');
        //         path = s.select('path');

        //         if (this.state.isOpen) {
        //             // Animate SVG path.
        //             styles.svg.animate(path);
        //         } else {
        //             // Reset path (timeout ensures animation happens off screen).
        //             setTimeout(function () {
        //                 path.attr('d', styles.svg.pathInitial);
        //             }, 300);
        //         }
        //     }
        // },

        render: function render() {
            var _this = this;

            var items, svg, closeButtonStyles;

            // Add animation styles to user-defined menu items.
            items = this.props.children.map(function (item, index) {
                var extraProps = {
                    key: index,
                    style: styles.item(_this.state.isOpen, index + 1),
                    onClick: _this.toggleMenu
                };

                return React.cloneElement(item, extraProps);
            });

            // Add a morph shape for animations that use SVG.
            // if (styles.svg) {
            //     svg = React.createElement(
            //         'div',
            //         { className: 'bm-morph-shape', style: styles.morphShape() },
            //         React.createElement(
            //             'svg',
            //             { xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', viewBox: '0 0 100 800', preserveAspectRatio: 'none' },
            //             React.createElement('path', { d: styles.svg.pathInitial })
            //             )
            //         );
            // }

            return React.createElement(
                'div',
                null,
                React.createElement('div', { id: 'rbn-overlay', style: styles.overlay(this.state.isOpen) }),
                React.createElement(
                    'div',
                    {
                        id: this.props.id,
                        style: styles.menuWrap(this.state.isOpen)
                    },
                    svg,
                    React.createElement(
                        'div',
                        {
                            className: 'rbn-menu',
                            style: styles.menu(this.state.isOpen)
                        },
                        React.createElement(
                            'nav',
                            {
                                className: 'rbn-item-list',
                                style: { height: '100%' }
                            },
                            items
                        )
                    ),
                    React.createElement(
                        'div',
                        {
                            style: styles.closeButton ? styles.closeButton(this.state.isOpen) : {}
                        },
                        React.createElement(CrossIcon, { onClick: this.toggleMenu })
                    )
                ),
                React.createElement(BurgerIcon, { onClick: this.toggleMenu })
            );
        }
    });
};

module.exports = exports['default'];

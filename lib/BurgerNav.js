'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _baseStyles = require('./baseStyles');

var _baseStyles2 = _interopRequireDefault(_baseStyles);

var _BurgerIcon = require('./BurgerIcon');

var _BurgerIcon2 = _interopRequireDefault(_BurgerIcon);

var _CrossIcon = require('./CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BurgerNav = _react2.default.createClass({
    displayName: 'BurgerNav',

    propTypes: {
        id: _react2.default.PropTypes.string,
        isOpen: _react2.default.PropTypes.bool,
        children: _react2.default.PropTypes.node
    },

    getDefaultProps: function getDefaultProps() {
        return {
            id: '',
            isOpen: false
        };
    },
    getInitialState: function getInitialState() {
        return { isOpen: false };
    },
    componentDidMount: function componentDidMount() {
        window.onkeydown = this.listenForClose;
        window.onclick = this.listenForClose;
    },
    componentWillUnmount: function componentWillUnmount() {
        window.onkeydown = null;
        window.onclick = null;
    },
    listenForClose: function listenForClose(e) {
        var event = e || window.event;

        if (this.state.isOpen && (event.target.id === 'rbn-overlay' || event.key === 'Escape' || event.keyCode === 27)) {
            this.toggleMenu();
        }
    },
    toggleMenu: function toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    },
    render: function render() {
        var items = undefined;
        var closeButtonStyles = undefined;
        var menuWrapStyles = _baseStyles2.default.menuWrap(this.state.isOpen);
        var menuStyles = _baseStyles2.default.menu();
        var itemListStyles = _baseStyles2.default.itemList();

        if (this.props.children) {
            items = _react2.default.Children.map(this.props.children, function (item, index) {
                var extraProps = {
                    key: index
                };

                return _react2.default.cloneElement(item, extraProps);
            });
        }

        return _react2.default.createElement(
            'div',
            { className: 'rbn-burger-nav' },
            _react2.default.createElement('div', { className: 'rbn-overlay', onClick: this.toggleMenu,
                style: _baseStyles2.default.overlay(this.state.isOpen) }),
            _react2.default.createElement(
                'div',
                { id: this.props.id, className: "rbn-menu-wrap", style: menuWrapStyles },
                _react2.default.createElement(
                    'div',
                    { className: 'rbn-menu', style: menuStyles },
                    _react2.default.createElement(
                        'nav',
                        { className: 'rbn-item-list', style: itemListStyles },
                        items
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: closeButtonStyles },
                    _react2.default.createElement(_CrossIcon2.default, { onClick: this.toggleMenu })
                )
            ),
            _react2.default.createElement(_BurgerIcon2.default, { onClick: this.toggleMenu })
        );
    }
});

exports.default = BurgerNav;
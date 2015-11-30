import React from 'react'

const CrossIcon = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },

    getCrossStyle(type) {
        return {
            position: 'absolute',
            width: 3,
            height: 14,
            top: 14,
            right: 18,
            cursor: 'pointer',
            transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)',
            zIndex: 1
        }
    },

    render() {
        const buttonStyle = {
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
        }

        return (
            <div>
                <span className="rbn-cross" style={this.getCrossStyle('before')}></span>
                <span className="rbn-cross" style={this.getCrossStyle('after')}></span>
                <button onClick={this.props.onClick} style={buttonStyle}>Close Menu</button>
            </div>
        )
    }
})

export default CrossIcon

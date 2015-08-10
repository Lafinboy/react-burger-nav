# react-burger-nav

A hamburger icon triggered, off-canvas sidebar React component, using CSS transitions to show/hide the sidebar content.

Original implementation by [Negomi](https://github.com/negomi) at [negomi.github.io/react-burger-nav](http://negomi.github.io/react-burger-nav/). This pseudo fork was created to provide a single effect implementation for a specific project. Many thanks to Negomi for the hard work :)

## Installation

Install via npm and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

```
npm install react-burger-nav --save
```

## Usage

Items for the sidebar should be passed as child elements of the component using JSX.

``` javascript
var RBN = require('react-burger-nav');

var Example = React.createClass({
  render: function() {
    return (
      <RBN>
        <a className="external-link" href="https://github.com/">GitHub</a>
        <Link className="react-router-link" to="/">Home</Link>
        <img src="https://assets-cdn.github.com/images/modules/dashboard/bootcamp/octocat_setup.png"/>
      </RBN>
    );
  }
});

```

### Properties

There is an optional `id` prop, which will simply add an ID to the rendered menu's outermost element. This is not required for any functionality.

``` javascript
<RBN id={ "sidebar" }/>
```

### Styling

All the animations are handled internally by the component. However, the visual styles (colors, fonts etc.) are not, and need to be included with CSS.

The component has the following helper classes:

``` css
// Color of burger icon
.rbn-burger-icon {
  background: #373a47;
}

// Color of close button cross
.rbn-cross {
  background: #bdc3c7;
}

// Background color of sidebar
.rbn-menu
  background: #373a47;
}

// General menu styles
.rbn-menu {
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

// Wrapper for item list
.rbn-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

```

### Browser Support

Because this project uses CSS3 features, it's only meant for modern browsers. It also relies on React's implementation of inline styles.

Chrome and Firefox have full support.

### License

ICS


## Release History

* 1.0.0 Intial Release
* 1.0.1 Added left assignment to fixed position elements
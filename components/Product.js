import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
        <p>{this.props.hasWatermark ? 'true' : 'false'}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, name) => {
    const weight = props[name]
    if (!(weight < 300 && weight > 80)) {
      return new console.error('no')
    }
  }
};

module.exports = Product

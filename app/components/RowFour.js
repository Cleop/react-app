var React = require('react');
var styles = require('./styles');

var row = styles.row;
var leftCube = styles.leftCube;
var rightCube = styles.rightCube;
var startText = styles.startText;

var imageRocket = {
  position: 'absolute',
  height: '200px',
  right: '14.5vw'
};

var RowFour = React.createClass({
  render: function() {
    return (
      <div style={row}>
      <div style={rightCube}>
      <p style={startText}>
      Now I'm looking for an opportunity to channel my passion and skills into. Please take a look at examples of my work below.
      </p>
      </div>
      <div style={leftCube}>
      <img style={imageRocket} src="../../images/rocket.png" />
      </div>
      </div>
    )
  }
});

module.exports = RowFour;

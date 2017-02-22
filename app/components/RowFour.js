const React = require('react');
const s = require('./styling/introStyles.js');

const row = s.row;
const leftCube = s.leftCube;
const rightCube = s.rightCube;
const startText = s.startText;

const imageRocket = {
  position: 'absolute',
  height: '200px',
  right: '14.5vw'
};

const RowFour = React.createClass({
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

const React = require('react');
const s = require('./styling/introStyles.js');

const row = s.row;
const leftCube = s.leftCube;
const rightCube = s.rightCube;
const startText = s.startText;

const imageHeart = {
  position: 'absolute',
  height: '70px',
  top: '25.5%',
  right: '19.5vw'
};

const imageLaptop = {
  position: 'absolute',
  height: '200px',
  right: '14.5vw'
};

const RowTwo = React.createClass({
  render: function() {
    return (
      <div style={row}>
      <div style={rightCube}>
      <p style={startText}>
      I decided to become a developer in order to embrace a medium and craft that I loved whilst building products that could help shape lives for the better.
      </p>
      </div>
      <div style={leftCube}>
      <img style={imageLaptop} src="../../images/laptop.png" />
      <img style={imageHeart} src="../../images/heart.png" />
      </div>
      </div>
    )
  }
});

module.exports = RowTwo;

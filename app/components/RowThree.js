var React = require('react');
var styles = require('./styles');

var row = styles.row;
var leftCube = styles.leftCube;
var rightCube = styles.rightCube;
var startText = styles.startText;

var imageFAC = {
  position: 'absolute',
  height: '150px',
  bottom: '20%',
  right: '16vw'
};

var RowThree = React.createClass({
  render: function() {
    return (
      <div style={row}>

      <div style={leftCube}>
      <p style={startText}>
      I'm an alumni of the presitgious Founders & Coders Full Stack Bootcamp. During the course I built projects using Javascript, Node, SQL, TDD, OAuth and APIs.
      </p>
      </div>

      <div style={rightCube}>
      <img style={imageFAC} src="../../images/FAC.png" />
      </div>

      </div>
    )
  }
});

module.exports = RowThree;

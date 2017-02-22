const React = require('react');
const styles = require('./styles');

const row = styles.row;
const leftCube = styles.leftCube;
const rightCube = styles.rightCube;
const startText = styles.startText;

const imageCode = {
  position: 'absolute',
  height: '50px',
  top: '16%',
  right: '26vw'
};

const imageIdea = {
  position: 'absolute',
  height: '100px',
  bottom: '6%',
  right: '19vw'
};

const imageDesign = {
  position: 'absolute',
  height: '120px',
  top: '1%',
  right: '10vw'
};

const RowOne = React.createClass({
  render: function() {
    return (
      <div style={row}>

      <div style={leftCube}>
      <p style={startText}>
      I began my coding journey when I was inspired by the film <cite>'CODE: Debugging the Gender Gap'</cite>. This coincided with reading <cite>'Happiness by Design'</cite> by Professor Paul Dolan.
      </p>
      </div>

      <div style={rightCube}>
      <img style={imageCode} src="http://photos3.meetupstatic.com/photos/event/1/3/b/4/600_445145044.jpeg" />
      <img style={imageIdea} src="../../images/idea.png" />
      <img style={imageDesign} src="https://pbs.twimg.com/profile_images/469809849664950272/U65LrcAN_400x400.png"/>
      </div>

      </div>
    )
  }
});

module.exports = RowOne;

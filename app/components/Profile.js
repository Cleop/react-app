var React = require('react');
var styles = require('./styles');

var story = {
  fontFamily: styles.fontFamily,
  margin: styles.margin,
};

var row = {
  position: 'relative',
  display: 'block',
  height: '30vh',
  width: '90vw',
  margin: 'auto',
  // background: 'grey'
};

var leftCube = {
  display: 'inline-block',
  width: '41vw',
  height: '100%',
  padding: '0 2vw',
  position: 'absolute',
  left: '0',
  textAlign: 'center',
  // background: 'green'
};

var rightCube = {
  display: 'inline-block',
  width: '41vw',
  height: '100%',
  padding: '0 2vw',
  position: 'absolute',
  right: '0',
  textAlign: 'center',
  // background: 'yellow'
};

var imageCode = {
  position: 'absolute',
  height: '50px',
  top: '16%',
  right: '26vw'
};

var imageIdea = {
  position: 'absolute',
  height: '100px',
  bottom: '6%',
  right: '19vw'
};

var imageDesign = {
  position: 'absolute',
  height: '120px',
  top: '1%',
  right: '10vw'
};

var imageHeart = {
  position: 'absolute',
  height: '70px',
  top: '25.5%',
  right: '19.5vw'
};

var imageLaptop = {
  position: 'absolute',
  height: '200px',
  right: '14.5vw'
};

var imageFAC = {
  position: 'absolute',
  height: '150px',
  bottom: '20%',
  right: '16vw'
};

var imageRocket = {
  position: 'absolute',
  height: '200px',
  right: '14.5vw'
};

var startText = {
  padding: '12% 0 13.5% 0',
  width: '80%',
  margin: 'auto',
  fontSize: '1.1em',
  lineHeight: '140%'
};


var RowOne = React.createClass({
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

var RowTwo = React.createClass({
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

var Profile = React.createClass({
  render: function() {
    return (
      <section style={story}>
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
      </section>
    )
  }
});

module.exports = Profile;

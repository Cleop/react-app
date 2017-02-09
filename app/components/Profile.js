var React = require('react');
var styles = require('./styles');

var divStyle = {
  fontFamily: styles.fontFamily
};

var Profile = React.createClass({
  render: function() {
    return (
      <div style={divStyle}>
      <p>
      I am a junior developer with experience in startups on both the technical and non-technical sides. I love learning about new technologies, producing clean code and understanding the user’s needs to deliver a strong user experience.
      </p>
      <p>
      My talents have been recognised by my selection for LocalGlobe’s Ambitious Ladies in Technology scheme. Previously I worked in documentaries for Channel 4, the BBC and the Guardian and changed direction having been inspired by engineering as a medium to shape lives for the better.
      </p>
      </div>
    )
  }
});

module.exports = Profile;

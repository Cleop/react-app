var React = require('react');
var styles = require('./styles');

var divStyle = {
  fontFamily: styles.fontFamily,
  margin: styles.margin,
  width: '80%',
  padding: '20px 0px'
};

var Profile = React.createClass({
  render: function() {
    return (
      <div style={divStyle}>
      <p>
        I began my coding journey when I watched and was inspired by the film <cite>'CODE: Debugging the Gender Gap'</cite>. This coincided with reading <cite>'Happiness by Design'</cite> by Professor Paul Dolan</p>
      <p>
        I decided to become a developer in order to embrace a medium and craft that I loved whilst building products that could help shape lives for the better.
      </p>
      </div>
    )
  }
});

module.exports = Profile;

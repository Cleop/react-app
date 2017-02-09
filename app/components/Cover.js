var React = require('react');
var styles = require('./styles');

var coverStyle = {
  background:'black url("https://s-media-cache-ak0.pinimg.com/736x/96/51/80/965180c2157bc052a741ba1d4b427247.jpg") left top no-repeat',
  fontSize: '6em',
  fontFamily: styles.fontFamily,
  margin: 0,
  height: '80vh'
};


var Cover = React.createClass({
  render: function() {
    return (
      <h1 style={coverStyle}>
      HI, I'M CLEO
      </h1>
    )
  }
});


module.exports = Cover;

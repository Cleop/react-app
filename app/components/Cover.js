var React = require('react');
var styles = require('./styles');

var coverStyle = {
  background:'black url("http://www.witness-this.com/content/uploads/2016/02/geometric-landscape-design3_by-threetonine.jpg") center center',
  backgroundSize: 'cover',
  overflow: 'hidden',
  fontSize: '3em',
  color: 'white',
  fontFamily: styles.fontFamily,
  margin: '0 auto',
  height: '90vh'
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

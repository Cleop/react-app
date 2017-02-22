var React = require('react');

var coverStyle = {
  background:'black url("http://www.witness-this.com/content/uploads/2016/02/geometric-landscape-design3_by-threetonine.jpg") center center',
  backgroundSize: 'cover',
  overflow: 'hidden',
  margin: '0 auto 1% auto',
  height: '100vh',
  color: 'white',
};

var titleStyle = {
  fontSize: '4vw',
  textAlign: 'left',
  position: 'relative',
  top: '42vh',
  margin: '0',
  left: '42vw'
}

var arrowStyle = {
  fontSize : '80px',
  position: 'absolute',
  bottom: '4vh',
  margin: '0',
  left: '48%',
  color:'white'
}

var Cover = React.createClass({
  render: function() {
    return (
      <div style={coverStyle}>
      <h1 style={titleStyle}>
      HI,<br/> I'M CLEO
      </h1>
      <p style={arrowStyle}>⌄</p>
      </div>
    )
  }
});


module.exports = Cover;

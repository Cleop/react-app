var React = require('react');
var Intro = require('./Intro');
var Cover = require('./Cover');

var appStyle = {
  textAlign: 'center'
};

var App = React.createClass({
     render: function (){
          return (
          	<div style={appStyle}>
              <Cover />
              <Intro />
            </div>
  		);
     }
});

module.exports = App;

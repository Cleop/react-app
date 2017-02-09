var React = require('react');
var Profile = require('./Profile');
var Cover = require('./Cover');

var appStyle = {
  textAlign: 'center'
};

var App = React.createClass({
     render: function (){
          return (
          	<div style={appStyle}>
              <Cover />
              <Profile />
            </div>
  		);
     }
});

module.exports = App;

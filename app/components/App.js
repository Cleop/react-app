var React = require('react');
var Profile = require('./Profile');
var Cover = require('./Cover');

var App = React.createClass({
     render: function (){
          return (
          	<div>
              <Cover />
              <Profile />
            </div>
  		);
     }
});

module.exports = App;

var React = require('react');
var Profile = require('./Profile');
var picture = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg";

var App = React.createClass({
     render: function (){
          return (
          	<div>
          		<h1>Cleo Pearson</h1>
        		<img src={picture} style={{height: 200}}/>
            <Profile />
            </div>
  		);
     }
});

module.exports = App;

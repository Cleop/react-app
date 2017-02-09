var React = require('react');

var picture = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg";

var MyComponentClass = React.createClass({
     render: function (){
          return (
          	<div>
          		<h1>Hello world</h1>
        		<img src={picture} style={{height: 200}}/>
            </div>
  		);
     }
});

module.exports = MyComponentClass;

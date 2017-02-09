var React = require('react');
var Profile = require('./Profile');
var picture = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg";
var bannerStyle = {
  background:'url("https://s-media-cache-ak0.pinimg.com/736x/96/51/80/965180c2157bc052a741ba1d4b427247.jpg") left top no-repeat',
  padding: '20%',
};


var App = React.createClass({
     render: function (){
          return (
          	<div>
          		<h1 style={bannerStyle}>Cleo Pearson</h1>
        		<img src={picture} style={{height: 200}}/>
            <Profile />
            </div>
  		);
     }
});

module.exports = App;

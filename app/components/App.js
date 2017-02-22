var React = require('react');
var Intro = require('./Intro');
var Cover = require('./Cover');

var App = React.createClass({
     render: function (){
          return (
          	<div>
              <Cover />
              <Intro />
            </div>
  		);
     }
});

module.exports = App;

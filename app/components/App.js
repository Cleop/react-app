var React = require('react');
var Cover = require('./Cover');
var Intro = require('./Intro');
var Skills = require('./Skills');

var App = React.createClass({
     render: function (){
          return (
          	<div>
              <Cover />
              <Intro />
              <Skills />
            </div>
  		);
     }
});

module.exports = App;

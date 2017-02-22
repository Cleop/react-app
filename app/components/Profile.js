var React = require('react');
var RowOne = require('./RowOne');
var RowTwo = require('./RowTwo');
var RowThree = require('./RowThree');
var RowFour = require('./RowFour');

var Profile = React.createClass({
  render: function() {
    return (
      <section>
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
      </section>
    )
  }
});

module.exports = Profile;

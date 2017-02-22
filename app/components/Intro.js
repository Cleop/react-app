const React = require('react');
const RowOne = require('./RowOne');
const RowTwo = require('./RowTwo');
const RowThree = require('./RowThree');
const RowFour = require('./RowFour');

const Intro = React.createClass({
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

module.exports = Intro;

const React = require('react');
const s = require('./styling/skillStyles.js');

const row = s.row;
const titleRow = s.titleRow;

const rule = {
  color: 'black',
  width: '100px'
}

const Skills = React.createClass({
  render: function() {
    return (
      <div>
      <div style={titleRow}>
      <h1>Skills</h1>
      <hr style={rule}/>
      </div>
      <div style={row}>

      </div>
    </div>
    )
  }
});

module.exports = Skills;

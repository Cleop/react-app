const React = require('react');
const s = require('./styling/skillStyles.js');

const row = s.row;
const titleRow = s.titleRow;

const rule = {
  width: '100px',
  marginTop: '-16px'
};

const col = {
  display: 'inline-block',
  width: '20%',
  height: '30vh',
  background: '#dbdbdb'
};

const col2 = {
  display: 'inline-block',
  width: '20%',
  height: '30vh',
  background: '#d7d7d7'
};

const Skills = React.createClass({
  render: function() {
    return (
      <div>
      <div style={titleRow}>
      <h1>Skills</h1>
      <hr style={rule}/>
      </div>
      <div style={row}>
      <div style={col}></div>
      <div style={col2}></div>
      <div style={col}></div>
      <div style={col2}></div>
      <div style={col}></div>
      </div>
    </div>
    )
  }
});

module.exports = Skills;

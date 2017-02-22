const fontSize   = '4em';
const padding = '45px 0';

const row = {
  position: 'relative',
  display: 'block',
  height: '30vh',
  width: '90vw',
  margin: 'auto',
  // background: 'grey'
};

const leftCube = {
  display: 'inline-block',
  width: '41vw',
  height: '100%',
  padding: '0 2vw',
  position: 'absolute',
  left: '0',
  textAlign: 'center',
  // background: '#dbdbdb'
};

const rightCube = {
  display: 'inline-block',
  width: '41vw',
  height: '100%',
  padding: '0 2vw',
  position: 'absolute',
  right: '0',
  textAlign: 'center',
  // background: '#d7d7d7'
};

const startText = {
  padding: '12% 0 13.5% 0',
  width: '80%',
  margin: 'auto',
  fontSize: '1.1em',
  lineHeight: '140%'
};

module.exports = {
  fontSize:   fontSize,
  padding:    padding,
  row,
  leftCube,
  rightCube,
  startText
}

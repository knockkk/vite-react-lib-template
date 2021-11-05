import ButtonExample from './Button';
import Build from './Build';

const containerStyle = {
  background: '#f0f0f0',
  minHeight: '100vh',
  padding: 200,
  gap: 20,
};

const Examples = () => (
  <div style={containerStyle}>
    <h1>Dev</h1>
    <ButtonExample />

    <h1>Build</h1>
    <Build />
  </div>
);

export default Examples;

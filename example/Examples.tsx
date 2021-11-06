import DevExample from './DevExample';
import BuildExample from './BuildExample';

const containerStyle = {
  background: '#f0f0f0',
  minHeight: '100vh',
  boxSizing: 'border-box',
  padding: 200,
  gap: 20,
};

const Examples = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      boxSizing: 'border-box',
      paddingTop: 100,
      background: '#f0f0f0',
    }}
  >
    <h1>Dev</h1>
    <DevExample />

    <h1>Build</h1>
    <BuildExample />
  </div>
);

export default Examples;

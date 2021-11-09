import Button from '../src';

const Example = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        boxSizing: 'border-box',
        paddingTop: 100,
        background: '#f0f0f0'
      }}
    >
      <h1>Example</h1>
      <Button onClick={() => alert('biu~')}>Send</Button>
    </div>
  );
};

export default Example;

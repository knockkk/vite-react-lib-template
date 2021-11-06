import './index.less';

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick} className="x-button">
      {children}
    </button>
  );
};

export default Button;

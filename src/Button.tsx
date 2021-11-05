interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({ onClick, children }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;

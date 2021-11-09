import { ReactComponent as SendSvg } from './send.svg';
import './index.less';

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

const SendButton = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick} className='send-button'>
      <SendSvg />
      {children}
    </button>
  );
};

export default SendButton;

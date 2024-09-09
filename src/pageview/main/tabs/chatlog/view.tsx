import FunctionTab from "../fuctionTabTemplates";
import ChatlogVM from "./vm";

const vm = ChatlogVM;

const ChatlogView = () => {
  return <FunctionTab vm={vm} />;
};

export default ChatlogView;

import FunctionTab from "../fuctionTabTemplates";
import PalleteVM from "./vm";

const vm = PalleteVM;

const PalleteView = () => {
  return <FunctionTab vm={vm} />;
};

export default PalleteView;

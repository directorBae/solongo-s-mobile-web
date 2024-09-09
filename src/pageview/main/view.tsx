import React from "react";
import TotalFrame from "./components/TotalFrame";
import { observer } from "mobx-react";
import PalleteView from "./tabs/palletes/view";
import ChatlogView from "./tabs/chatlog/view";

interface MainViewProps {
  vm: any;
}

const MainView = observer(({ vm }: MainViewProps) => {
  let view = null;

  switch (vm.showMode) {
    case "pallete":
      view = <PalleteView />;
      break;
    case "chatlogs":
      view = <ChatlogView />;
      break;
    default:
      view = null;
  }

  return <TotalFrame vm={vm} tabView={view} />;
});

export default MainView;

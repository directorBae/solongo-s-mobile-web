import React from "react";
import TotalFrame from "./components/TotalFrame";
import { observer } from "mobx-react";

interface MainViewProps {
    vm: any;
    }

const MainView = observer(({vm} : MainViewProps) => {
  return <TotalFrame vm={vm}/>;
});

export default MainView;

import React, { useState } from "react";
import {
  BeaconEvent,
  DAppClientOptions,
  defaultEventCallbacks,
  NetworkType,
} from "@airgap/beacon-sdk";
import { ReactTezProvider, Navbar } from "react-tez";
import { SelectThemeDropdown } from "./components/SelectThemeDropdown";
import { Home } from "./components/Home";
import Logo from "./components/Logo";

const dAppClientOptions: DAppClientOptions = {
  name: "MyApp",
  disableDefaultEvents: true,
  eventHandlers: {
    [BeaconEvent.PAIR_INIT]: {
      handler: defaultEventCallbacks.PAIR_INIT,
    },
    [BeaconEvent.PAIR_SUCCESS]: {
      handler: defaultEventCallbacks.PAIR_SUCCESS,
    },
  },
};

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div data-theme={theme}>
      <ReactTezProvider
        dAppClientOptions={dAppClientOptions as any}
        network={NetworkType.JAKARTANET}
      >
        <Navbar
          logo={
            <Logo className="fill-primary h-6" />
          }
          rightContent={
            <SelectThemeDropdown theme={theme} setTheme={setTheme} />
          }
        />
        <Home />
      </ReactTezProvider>
    </div>
  );
}

export default App;

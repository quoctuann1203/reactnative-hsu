// import React, { Component } from 'react';
// import Main from './component/MainComponent';

// class App extends Component {
//   render() {
//     return (<Main />);
//   }
// }
// export default App;

// redux
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import React, { Component } from "react";
import Main from "./component/MainComponent";
import { AppRegistry } from "react-native";
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
AppRegistry.registerComponent("Appname", () => App);
export default App;

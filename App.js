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
export default App;

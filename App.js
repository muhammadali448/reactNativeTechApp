import React from 'react';
import { AppRegistry, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers'
import { Container } from 'native-base';
import HeaderApp from './src/components/HeaderApp';
import LibraryList from './src/components/libraryLIst';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Container>
          <HeaderApp headerText={'Tech App'} />
          <LibraryList />
        </Container>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('touristappfirebase', () => App);
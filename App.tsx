import {NativeBaseProvider, View} from 'native-base';
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {ActionSheetContextProvider} from './src/context/ActionSheetContext';
import {Provider as ReduxProvider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ReduxProvider store={store}>
      <NativeBaseProvider>
        <ActionSheetContextProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootNavigator />
        </ActionSheetContextProvider>
      </NativeBaseProvider>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({});
export default App;

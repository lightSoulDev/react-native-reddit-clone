/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActionSheetContextProvider} from './src/context/ActionSheetContext';
import PostCard from './src/redux/components/PostCard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#2c2c2c' : '#2c2c2c',
  };

  return (
    <NativeBaseProvider>
      <SafeAreaProvider style={backgroundStyle}>
        <ActionSheetContextProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{width: '100%', height: '100%'}}>
            <PostCard backgroundColor="#aaa" />
          </ScrollView>
        </ActionSheetContextProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
function toggleSheet(
  arg0: {label: string; onPress: () => void; materialIcon: string}[],
) {
  throw new Error('Function not implemented.');
}

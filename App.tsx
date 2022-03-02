import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {ActionSheetContextProvider} from './src/context/ActionSheetContext';
import PostCard from './src/components/PostCard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#2c2c2c' : '#fff',
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <ActionSheetContextProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{width: '100%', height: '100%'}}>
            <PostCard backgroundColor="#aaa" />
          </ScrollView>
        </ActionSheetContextProvider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default App;

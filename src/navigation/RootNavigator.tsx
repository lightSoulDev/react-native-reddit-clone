import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React from 'react';
import PostCard from '../components/PostCard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore [EXPO]
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-             N A V I G A T I O N             -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const HOME_SCREEN = 'HomeScreen';
const NEWS_SCREEN = 'NewsScreen';

const TABS = [
  {
    route: HOME_SCREEN,
    component: HomeScreen,
    label: 'Home',
    iconActive: 'home',
    icon: 'home-outline',
  },
  {
    route: NEWS_SCREEN,
    component: NewsScreen,
    label: 'News',
    iconActive: 'newspaper-variant',
    icon: 'newspaper-variant-outline',
  },
];

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* ================== NAVIGATION SCREENS ================== */}
        {TABS.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarLabel: item.label,
                tabBarIcon: ({focused, color, size}) => (
                  <MaterialCommunityIcons
                    name={focused ? item.iconActive : item.icon}
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          );
        })}
        {/* ================== NAVIGATION SCREENS ================== */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

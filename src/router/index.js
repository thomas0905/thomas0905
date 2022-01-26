import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, SplashScreen, ListJerseyScreen, ProfileScreen} from '../pages';
import { BottomNavigator }from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp= () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="ListJersey" component={ListJerseyScreen} options={{ title: 'Jersey'}} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;

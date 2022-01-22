import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home,  Splash } from '../pages';

const stack = createNativeStackNavigator();

const Router = () => {
  return (
      <stack.Navigator  initialRouteName='Splash'>
           <stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <stack.Screen
             name="Home" 
             component={Home} 
             options={{headerShown:false}}/>
        
      </stack.Navigator>
  );
};

export default Router;
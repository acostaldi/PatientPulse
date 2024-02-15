import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/main-activity/main-activity';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
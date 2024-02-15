import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginNavigator from './login-navigator';
import RootNavigator from './root-navigator';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginNavigator} />
                <Stack.Screen name="Main" component={RootNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
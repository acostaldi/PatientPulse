import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleLoginPress = () => {
    // Handle login logic, navigate to the main screen, etc.
    navigation.navigate('Main');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  );
};

export default LoginScreen;
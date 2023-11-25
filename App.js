import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code from './Screens/Code';
import Predictor from './Screens/Predictor';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName='code' screenOptions={{ headerShown: false, animation: "flip" }}>
        <Stack.Screen name="code" component={Code} />
        <Stack.Screen name="predictor" component={Predictor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Game from './src/screens/Game';
import Lost from './src/screens/Lost';

import HistoryScreen  from './src/screens/History'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
             name="Login" 
             component={Login}
              options={{
                headerShown: false,
                // gestureEnabled: false
              }}
            />
            {/* <Stack.Screen name="Main" component={MainScreen} /> */}
            <Stack.Screen name="Game" component={Game} 
            options={{
              headerShown: false,
              // gestureEnabled: false
            }}/>
            <Stack.Screen name="Lost" component={Lost} 
            options={{
              headerShown: false,
              // gestureEnabled: false
            }}/>
            <Stack.Screen
              name="History"
              component={HistoryScreen}
              options={{
                headerShown: false,
                // gestureEnabled: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
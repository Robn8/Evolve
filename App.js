import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import PokemonScreen from './src/Screens/StartScreen';
import Train from './src/Screens/Train';

export default function App() {
  return (
    <Provider store={store}>
      <Train />
    </Provider>
  );
}
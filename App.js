import React, { useState } from 'react';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import MainLayout from './src/layouts/MainLayout';
import TodoState from "./src/context/todo/TodoState";
import ScreenState from './src/context/screen/ScreenState';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  async function loadApp() {
    await Font.loadAsync({
      'roboto-regular': require("./assets/fonts/Roboto-Regular.ttf"),
      'roboto-bold': require("./assets/fonts/Roboto-Bold.ttf")
    });
  }

  if(!isReady) {
    return(
      <AppLoading 
        startAsync={loadApp} 
        onFinish={() => setIsReady(true)} 
        onError={(err) => console.log(err)} />
    ); 
  }

  return (
    <ScreenState>
      <TodoState>
          <MainLayout />
      </TodoState>
    </ScreenState>
  );
}

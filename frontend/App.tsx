import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/state/store";
import HomeScreen from "./src/screens/HomeScreen";
import TodoList from "./src/screens/TodoList";
import AboutScreen from "./src/screens/AboutScreen";
import ProfileScreen from "./src/screens/ProfileScreem";
import Sidebar from "./src/components/common/Sidebar";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="TodoList"
            component={TodoList}
            options={{ title: "Todo List" }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: "About" }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "Profile" }}
          />
        </Stack.Navigator>
        <Sidebar />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import HomeScreen from "../src/screens/HomeScreen";
import TodoList from "../src/screens/TodoList";
import AboutScreen from "../src/screens/AboutScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";


function Root() {
    const Stack = createNativeStackNavigator();

    const { data: authUser, isLoading } = useQuery({
        queryKey: ["authUser"],
        queryFn: async () => {
          try {
            const res = await fetch("http://192.168.40.122:5000/api/auth/me");
            const data = await res.json();
            if (!res.ok) {
              throw new Error(data.error || "Something went wrong");
            }
            return data;
          } catch (error) {
            console.error("Error fetching user:", error);
            return null;
          }
        },
        retry: false,
      });
    
      if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0073e6" />
          </View>
        );
      }
    return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={authUser ? "Home" : "Login"} 
          >
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
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: "Register" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    );

    
      
}
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
});

export default Root;
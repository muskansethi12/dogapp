import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BreedListScreen from "./Components/BreedListScreen";
import SubBreedListScreen from './Components/SubBreedListScreen';
import Contact from "./Components/Contact";
import ImagesScreen from "./Components/ImageScreen";

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const BreedStack=()=>{
  return(
    <Stack.Navigator initialRouteName="BreedListScreen">
    <Stack.Screen name="BreedListScreen" component={BreedListScreen}></Stack.Screen>
    <Stack.Screen name="SubBreedListScreen" component={SubBreedListScreen}/>
    <Stack.Screen name="Contact" component={Contact}/>
    <Stack.Screen name="ImageScreen" component={ImagesScreen}/>
    </Stack.Navigator>

  )
}
const App=()=>{
  return(
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="Breed" component={BreedStack} options={{headerShown:false}} ></Tab.Screen>
        <Tab.Screen name="Contact" component={Contact}/>
      </Tab.Navigator>
    </NavigationContainer>
  );

}
export default App;
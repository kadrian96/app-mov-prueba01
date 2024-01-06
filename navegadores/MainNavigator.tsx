import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../screens/WelcomeScreen';
import RegistroGastosScreen from '../screens/RegistroGastosScreen';
import RegistroAlmacenadoScreen from '../screens/RegistroAlmacenadoScreen';
import EdicionRegistrosScreen from '../screens/EdicionRegistrosScreen';



const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro Gastos" component={RegistroGastosScreen} />
      <Tab.Screen name="Registros Almacenados" component={RegistroAlmacenadoScreen} />
      <Tab.Screen name="Edicion de Registros" component={EdicionRegistrosScreen} />
    </Tab.Navigator>
  );
}

function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Welcome"component={WelcomeScreen}/>
      </Stack.Navigator>
    );
  }


export default function TopTabNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
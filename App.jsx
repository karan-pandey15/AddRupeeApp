import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "./DrawerComponent/DrawerContent";
import WelcomeScreen from './components/WelcomeScreen';
import EmployeeRegister from './EmpComponents/EmpRegister';
import EmployeeLogin from './EmpComponents/EmpLogin';
import EmpDashboard from './EmpComponents/EmpDashboard';
import EmpForm from './EmpComponents/EmpForm';
import TermsAndConditions from './EmpComponents/TermsAndConditions';
import ContactScreen from './EmpComponents/ContactScreen';
import ReferShare from './EmpComponents/ReferShare';
import Tldashboard from './EmpComponents/Tldashboard';
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={WelcomeScreen} />
      <Stack.Screen
        name='EmpRegister'
        component={EmployeeRegister}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name='EmpLogin'
        component={EmployeeLogin}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />


      <Stack.Screen
        name='EmpDashboard'
        component={DrawerNav}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='Tldashboard'
        component={Tldashboard}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />



      <Stack.Screen
        name='TermsAndConditions'
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='ReferShare'
        component={ReferShare}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='Help'
        component={ContactScreen}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='EmpForm'
        component={EmpForm}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />
    </Stack.Navigator>
  )
}

const DrawerNav = () => {

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
        name='EmpDashboard' component={EmpDashboard} />
    </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
export default App;

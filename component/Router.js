import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import Izin from './Izin'
import History from './History'
import Login from './Login'
import FaceDetection from './FaceDetection'


const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
       
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="CheckIn" component={CheckIn}   options={{ title: 'Check In' }}/>
        <Stack.Screen name="CheckOut" component={CheckOut}  options={{ title: 'Check Out' }} />
        <Stack.Screen name="Izin" component={Izin}  options={{ title: 'Izin' }}/>
        <Stack.Screen name="History" component={History}  options={{ title: 'History' }}/>
        <Stack.Screen name="FaceDetection" component={FaceDetection}  options={{ title: 'Face' }}/>
        {/* <Stack.Screen name="Logout" component={Logout}   options={{ title: 'Logout' }}/> */}
      </Stack.Navigator>
    )
}

export default Router
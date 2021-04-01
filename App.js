import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, Linking, TouchableOpacity } from 'react-native'
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoTitle from './src/logo'

// import page
import StackHomeScreen from './src/home'
import UserScreen from './src/user'
import DrawerHomeScreen from './src/home_drawer'
import DrawerUserScreen from './src/user_drawer'
import Picktogram from './src/assets/pics/home_icon.png'
import SlideDrawer from './src/my_drawer'
import TabHomeScreen from './src/home_tab'
import TabUserScreen from './src/user_tab'
import TabMassageScreen from './src/message_tab'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

/*
  Stack Navigator
   - Tab Navigator
      - Tab Navigator D
      - Tab Navigator E
      - Tab Navigator F
   -  Stack Screen  B
   -  Stack Screen  C
*/

const TabComponent = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
      activeBackgroundColor:'skyblue', activeTintColor:'blue',
      inactiveTintColor:'#000', inactiveBackgroundColor:'#c6cbef', labelPosition:'beside-icon', labelStyle: {fontSize: 20}
    }}
    screenOptions={({route})=>({
      tabBarLabel: route.name,
      tabBarIcon: ({focused})=>(
        TabBalIcon(focused, route.name)
      )
    })}
    >
      <Tab.Screen name="Home" component={TabHomeScreen}/>
      <Tab.Screen name="User" component={TabUserScreen}/>
      <Tab.Screen name="Message" component={TabMassageScreen}/>
    </Tab.Navigator>
  )
}

const TabBalIcon = (focused, name) => {
  let iconImagePath
  if(name==='Home'){
    iconImagePath = require('./src/assets/pics/home_icon.png')
  } else if(name==='User'){
    iconImagePath = require('./src/assets/pics/user.png')
  } else if(name==="Message"){
    iconImagePath = require('./src/assets/pics/message.png')
  }

  return (
    <Image
      style={{
        width: focused ? 30 : 20,
        height: focused ? 30 : 20
      }}
      source = {iconImagePath}
    />
  )
}

// CustomDrawerContent = (props) => {
//   return(
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//       <DrawerItem
//         label="Help"
//         onPress={()=>Linking.openURL('http://www.google.com')}
//         icon={()=><LogoTitle/>}
//       />
//       <DrawerItem
//         label="Info"
//         onPress={()=>alert('Info Window')}
//       />
//     </DrawerContentScrollView>
//   )
// }

const DrawerComponent = () => {
  return (
                <Drawer.Navigator
              initialRouteName="Home"
              drawerType='front'
              drawerPosition='right'
              drawerStyle={{
                backgroundColor:'#c6cbef', width:200
              }}
              drawerContentOptions={{
                activeTintColor:'red',
                activeBackgroundColor:'skyblue'
              }}
              drawerContent={props => <SlideDrawer {...props}/>}
            >
              <Drawer.Screen name="Route" component={TabComponent}/>
            </Drawer.Navigator>
  )
} 

const HeaderRight = () =>{
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row', paddingRight:15}}>
      <TouchableOpacity
        onPress={()=>{
          navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  )
}

export default class App extends Component {

  // logoTitle = () => {
  //   return (
  //     <Image style={{width:40, height:60}}
  //       source={require('./src/assets/pics/home_icon.png')}
  //     />
  //   )
  // }

  render() {
    return (
          
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={DrawerComponent}
                options={{
                  headerRight: ({}) => <HeaderRight/>
                }}
              />
              <Stack.Screen name="Home_Stack" component={StackHomeScreen}/>
            </Stack.Navigator>
          </NavigationContainer>

          // <NavigationContainer>
          //   <Drawer.Navigator
          //     initialRouteName="Home"
          //     drawerType='front'
          //     drawerPosition='right'
          //     drawerStyle={{
          //       backgroundColor:'#c6cbef', width:200
          //     }}
          //     drawerContentOptions={{
          //       activeTintColor:'red',
          //       activeBackgroundColor:'skyblue'
          //     }}
          //     drawerContent={props => <SlideDrawer {...props}/>}
          //   >
          //     <Drawer.Screen 
          //     name="Home" 
          //     component={DrawerHomeScreen}
          //     options={{
          //       drawerIcon: () => (
          //         <Image 
          //           source={Picktogram}
          //           style={{width:40, height:40 }}
          //         />
          //       )
          //     }}
          //     />
          //     <Drawer.Screen name="User" component={DrawerUserScreen}/>
          //   </Drawer.Navigator>
          // </NavigationContainer>

      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home"
      //       screenOptions={{
      //       headerStyle: {
      //           backgroundColor: '#a4511e'
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight:'bold',
      //         color:'#f3d612'
      //       }
      //     }}
      //   >
      //     <Stack.Screen name="Home" component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle/>,
      //         headerTitleAlign: 'center',
      //         headerRight: () => (
      //           <Button
      //             title='Info'
      //             onPress={()=>alert('test')}
      //           />
      //         )
      //     }}
      //     />
      //     <Stack.Screen name="User" component={UserScreen}
      //     initialParams={{
      //       userIdx: 50,
      //       userName: 'Gildong',
      //       userLastName: 'Go'
      //     }}
      //       options={{title: 'User Screen',
      //       headerStyle: {
      //           backgroundColor: 'pink'
      //       },
      //       headerTintColor: 'red',
      //       headerTitleStyle: {
      //         fontWeight:'bold',
      //         color:'purple'
      //       }
      //     }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

})

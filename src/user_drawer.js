import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, Image } from 'react-native'
import Logo from './assets/pics/home_icon.png'

export default class User_drawer extends Component {

    drawerStyle = () => {
        this.props.navigation.setOptions({
            drawerIcon: () => (
                <Image
                    source={Logo}
                    style={{width: 40, height:40}}
                />
            )
        })
    }

    render() {
        this.drawerStyle()
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> User Screen </Text>
                <Button
                    title="To Home Screen"
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }}
                />
            </View>
        )
    }
}

import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class TabHomeScreen extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> Home Screen </Text>
                <Button
                    title="Go To Home Stack Screen"
                    onPress={()=>{
                        this.props.navigation.navigate('Home_Stack')
                    }}
                />
            </View>
        )
    }
}

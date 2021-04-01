import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class Home_drawer extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="To User Screen"
                    onPress={()=>{
                        this.props.navigation.navigate('User')
                    }}
                />
            </View>
        )
    }
}

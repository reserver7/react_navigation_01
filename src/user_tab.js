import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TabUserScreen extends Component {
    render() {
        console.warn(this.props.route)
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> User Screen </Text>
            </View>
        )
    }
}

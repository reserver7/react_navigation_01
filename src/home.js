import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> HomeScreen </Text>
                <View style={{marginTop:10}}>
                <Button
                    title="TO User Screen"
                    onPress={()=>{
                        this.props.navigation.navigate('User',{
                            userIdx: 100,
                            userName: 'Gildong',
                            userLastName: 'Hong'
                        })
                    }}
                />
                </View>
                <View style={{marginTop:10}}>
                <Button
                    title="Change the title"
                    onPress={()=>{
                        this.props.navigation.setOptions({
                            title: 'Changed!!!!',
                            headerStyle: {
                                backgroundColor: 'pink'
                            },
                            headerTintColor: 'red'
                        })
                    }}
                />
                </View>
            </View>
        )
    }
}

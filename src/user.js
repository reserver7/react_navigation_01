import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class UserScreen extends Component {

    headerStyle = () => {
        this.props.navigation.setOptions({
            title:'Customzing',
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'green'
            },
            headerBackTitle: 'BACK',
            headerRight: () => (
                <Button
                title='Go Back'
                onPress={()=>{
                    this.props.navigation.navigate('Home')
                }}
                />
            )
        })
    }

    render() {
        this.headerStyle()
        const {params} = this.props.route
        const userIdx = params ? params.userIdx : null
        const userName = params ? params.userName : null
        const userLastName = params ? params.userLastName : null
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> UserScreen </Text>
                <Button
                    title="TO Home Screen"
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }}
                />

                <Text>User Idx: {JSON.stringify(userIdx)}</Text>
                <Text>User Name: {JSON.stringify(userName)}</Text>
                <Text>User LastName: {JSON.stringify(userLastName)}</Text>
            </View>
        )
    }
}

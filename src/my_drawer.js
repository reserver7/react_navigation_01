import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Logo from './assets/pics/home_icon.png'
import {CommonActions} from '@react-navigation/native'

export default class SlideDrawer extends Component {

    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {}
            })
        )
    }
    render() {
        return (
            <View style={{flex:1, paddingTop:50}}>
                <ScrollView>
                    <View>
                        <View style={{alignItems:'center', padding:50}}>
                            <Image
                                source={Logo}
                                style={{width:40, height:40}}
                            />
                        </View>
                        <Text style={{color:'#fff', backgroundColor:'#aaa', paddingVertical:10, paddingHorizontal:15, fontWeight:'bold'}}>Section 1</Text>
                        <View style={{backgroundColor:'#04b6ff'}}>
                            <Text style={styles.text} onPress={this.navigateToScreen('Home')}>Home</Text>
                            <Text style={styles.text} onPress={this.navigateToScreen('User')}>User</Text>
                            <Text style={styles.text} onPress={()=>alert('Help Window')}>Help</Text>
                            <Text style={styles.text} onPress={()=>alert('info')}>Info</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ paddingLeft:20, paddingBottom:15}}>
                    <Text>Copyright @ Wintho, 2021</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color:'#fff', padding:10
    }
})
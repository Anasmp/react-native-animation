import React, { Component } from 'react'
import { Text, StyleSheet, View ,Animated,TouchableOpacity,Keyboard} from 'react-native'
import { Icon } from 'native-base'
import CodeInput from 'react-native-confirmation-code-input';

export default class Otpscreen extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        opacity:0
    }

    _onFulfill = () => {
        this.setState({opacity:1})
    }

  render() {
    return (
    <View style={styles.container}>
    {/* top section */}
        <View style={styles.top}> 

             <Animated.View
                    style={{
                        position: 'absolute',
                        height: 60, width: 60,
                        top: 60,
                        left: 25,
                        zIndex: 100,
                        
                    }}
                >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Icon name="md-arrow-back" style={{ color: 'black' }} />
                    </TouchableOpacity>
                </Animated.View>
        </View>

 {/* middle section */}
         <View style={styles.middle}> 
                        <Text style={styles.enterOtp}>Enter the 4-digit code send to you</Text>

                <CodeInput
                ref="codeInputRef1"
                keyboardType="numeric"
                className={'border-b'}
                activeColor='black'
                inactiveColor='#bcbcbc'
                space={5}
                codeLength={4}
                size={60}
                inputPosition='left'
                containerStyle={{ marginTop: 30 }}
                onFulfill={(code) => this._onFulfill()}
                />

                 <Animated.View
                    style={{
                        position: 'absolute',
                        height: 60, width: 60,
                        right: 10,
                        bottom: 10, 
                        opacity: this.state.opacity,
                        zIndex: 100,
                        backgroundColor: '#54575e',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30
                    }}
                >
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
                    <Icon name="md-arrow-forward" style={{ color: 'white' }} />
                 </TouchableOpacity>
                 </Animated.View>
        </View>


    </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    top:{
        flex:2,
        alignItems:'flex-start',
        justifyContent:'center',
        // borderWidth:2,
        // borderColor:'red'
    },
    middle:{
        flex:6,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginHorizontal:25,
        // borderWidth:2,
        // borderColor:'red'
    },
   
    enterOtp:{
        fontSize:18,
       
    }
})

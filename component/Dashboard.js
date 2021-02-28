import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Image, Alert} from 'react-native'
import Header from './Header';




class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state ={
            buttonEnabled: false,
            
        }
    }


onCheckin = () => {
          this.props.navigation.navigate('FaceDetection')  
    
}







    render(){
        
        return(
            <View style={styles.container}>
                    <Header/>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.inner} onPress={this.onCheckin}
                        disabled={this.state.buttonEnabled}>
                            <Image  source={require('../image/checkin.png')}/>
                            <Text>Check In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity style={styles.inner} onPress={()=>this.props.navigation.navigate('CheckOut')}>
                            <Image  source={require('../image/checkout.png')}/>
                            <Text>Check Out</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity style={styles.inner} onPress={()=>this.props.navigation.navigate('Izin')}>
                            <Image  source={require('../image/izin.png')}/>
                            <Text>Izin</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <TouchableOpacity style={styles.inner} onPress={()=>this.props.navigation.navigate('History')}>
                            <Image  source={require('../image/history.png')}/>
                            <Text>History</Text>
                        </TouchableOpacity>
                    </View>

                      {/* <View style={styles.box}>
                        <TouchableOpacity style={styles.inner} onPress={()=>this.props.navigation.navigate('Logout')}>
                            <Image  source={require('../image/logout.png')}/>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View> */}

                    
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    } ,
    box: {
        width:'50%',
        height:'40%',
        padding: 5,
    } ,
    inner: {
        flex : 1,
        backgroundColor : '#eee',
        alignItems: 'center',
        justifyContent: 'center'

    }

});


export default Dashboard;
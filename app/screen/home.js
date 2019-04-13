import React,{Component} from 'react';
import {Text,View,StyleSheet,SafeAreaView,Image,ScrollView,Animated} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {screenHeight,screenWidth} from '../helper/constant'
export default class Home extends Component{
    constructor(props){
        super(props);
        this.images=['shopimg1','shopimg2','shopimg3']
    }
    render(){
        const {statusbar,
            container,
            menuicon,
            topcontainer,
            txtstyle,
            imgStyle}=styles
        return(
            <SafeAreaView style={statusbar}>
                <View style={topcontainer}>
                    <Image source={{uri:'menu_icon'}} style={menuicon} />
                    <Text style={txtstyle}>Shopping App</Text>
                    <Image source={{uri:'search-icon'}}/>
                </View>
                <View style={container}>
                    <ScrollView
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    >
                        {this.images.map((item,key)=>(
                            <View >
                                <View >
                                    <Image  key={key} source={{uri:item}} style={imgStyle} />
                                </View>

                            </View>
                        ))
                        }
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    statusbar:{
            flex:1,
            backgroundColor:'#e23640'
        },
    topcontainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
    },
    container:{
            flex:10,
            backgroundColor: '#fff'
    },
    menuicon:{
            width:wp('10%'),
            height:hp('5%'),
            margin:10
    },
    txtstyle:{
        color:'#fff',
        fontSize:hp('3%')
    },
    imgStyle:{
        width:screenWidth,
        height: hp('30%')

    }
});
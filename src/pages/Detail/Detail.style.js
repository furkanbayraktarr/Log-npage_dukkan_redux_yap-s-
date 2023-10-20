import { StyleSheet,Dimensions } from "react-native"

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container:{flex:1

    },
    body_container:{
        padding:10,
    },
    image:{
        width: deviceSize.width,
        height: deviceSize.height/3,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'black'

    },
    des:{
        fontSize:18,
        marginVertical:5,
        color:'black',
        fontStyle:'italic'
    },
    price:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'right',
        fontWeight:'bold',
        color:'black'
    },

})
/*Dimensions Modülü: Dimensions modülü, React Native uygulamalarında cihazın ekran boyutlarına
 erişmek için kullanılır. Bu modül, get metodu ile cihazın boyutlarını almanızı sağlar.

Dimensions.get('window'): Bu ifade, cihazın penceresinin (ekranın) boyutlarını alır. "window" 
parametresi, cihazın penceresinin boyutlarını ifade eder. Bu, cihazın ekranın genişliği ve yüksekliği
 gibi bilgileri içeren bir JavaScript nesnesi döndürür.

const deviceSize = ...: Elde edilen pencere boyutları, deviceSize adlı bir sabit değişkene atanır.
 Bu, daha sonra bu boyutları stil tanımlarında veya bileşenlerde kullanmak için kullanılır. */
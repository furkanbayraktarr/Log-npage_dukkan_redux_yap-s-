import React from 'react'
import { Image, SafeAreaView,Text,View,Alert } from 'react-native'
import styles from './Login.style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Formik } from 'formik'
import Config from "react-native-config";
import usePost from '../../hooks/usePost'
import {useDispatch} from 'react-redux'

const Login = () => {
 
    const {data,loading,error,post} = usePost()
    const dispatch = useDispatch()


    function handleLogin (values) {
        
            post(Config.API_AUTH_URL , values)
        
    }
    
    if(error){
        Alert.alert('Dükkan', 'Bir hata oluştu')
        console.log(error)
        
        
    }

    if(data){ 
        if (data.status === "Error") {
        Alert.alert("Dükkan", "Kullanıcı Bulunamadı")}
        else{
            dispatch({type:'SET_USER', payload:{user}})
            /*en dış katmanda uygulamayı provider ile sardığım için
            dispatch direk provider içindeki storedan(reducers,initialstate)
            reducersa gider.
            navigation.navigate('ProductPage') yapmamıza gerek kalmadı,
            nedenini routers sayfası altında yazdım*/
        }
    }

    

    return(
    <Formik initialValues={{username:'', password:''}} 
            onSubmit={handleLogin} 
            >
       { ({handleChange, handleSubmit, values}) => (
        <SafeAreaView style={styles.container}>
    <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/login-logo.png")} />
    </View>
    <View style={styles.body_container} >
        <Input placeholder="Kullanıcı adını giriniz..." 
               value={values.username} 
               onType={handleChange('username')}
               iconName='account' 
        />
        <Input placeholder="Şifrenizi giriniz..." 
               value={values.password}
               onType={handleChange('password')}
               iconName='key'
               isSecure
               />
        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
    </View>
</SafeAreaView>)}
</Formik>
)}
export default Login
/* formik yapısı bizi gereksiz render işleminden kurtarır.
usestate kullanımında her harf girişinde tekrar render işlemi oluyordu.
çünkü her harf girildiğinde state güncelleniyor ve her güncellemede 
component render oluyordu. formikte bu durum geçerli değil 
onSubmit={formValues=>{console.log(formValues)}} burada formvalues
kısmına istediğimizi yazabiliriz, values değerlerini döndürür.*/

const user =[{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},
"city":"kilcoole","street":"new road","number":7682,"zipcode":
"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd"
,"password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},
"phone":"1-570-236-7033","__v":0},
{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},
"city":"kilcoole","street":"Lovers Ln","number":7267,"zipcode":"12926-3874"},
"id":2,"email":"morrison@gmail.com","username":"mor_2314","password":"83r5^_",
"name":{"firstname":"david","lastname":"morrison"},"phone":"1-570-236-7033","__v":0},
{"address":{"geolocation":{"lat":"40.3467","long":"-30.1310"},"city":"Cullman","street":"Frances Ct","number":86,"zipcode":"29567-1452"},
"id":3,"email":"kevin@gmail.com","username":"kevinryan","password":"kev02937@","name":{"firstname":"kevin","lastname":"ryan"},
"phone":"1-567-094-1345","__v":0},
{"address":{"geolocation":{"lat":"50.3467","long":"-20.1310"},"city":"San Antonio","street":"Hunters Creek Dr","number":6454,"zipcode":"98234-1734"},"id":4,"email":"don@gmail.com","username":"donero","password":"ewedon","name":{"firstname":"don","lastname":"romer"},"phone":"1-765-789-6734","__v":0},
{"address":{"geolocation":{"lat":"40.3467","long":"-40.1310"},"city":"san Antonio","street":"adams St","number":245,"zipcode":"80796-1234"},"id":5,"email":"derek@gmail.com","username":"derek","password":"jklg*_56","name":{"firstname":"derek","lastname":"powell"},"phone":"1-956-001-1945","__v":0},
{"address":{"geolocation":{"lat":"20.1677","long":"-10.6789"},"city":"el paso","street":"prospect st","number":124,"zipcode":"12346-0456"},"id":6,"email":"david_r@gmail.com","username":"david_r","password":"3478*#54","name":{"firstname":"david","lastname":"russell"},"phone":"1-678-345-9856","__v":0},
{"address":{"geolocation":{"lat":"10.3456","long":"20.6419"},"city":"fresno","street":"saddle st","number":1342,"zipcode":"96378-0245"},"id":7,"email":"miriam@gmail.com","username":"snyder","password":"f238&@*$","name":{"firstname":"miriam","lastname":"snyder"},"phone":"1-123-943-0563","__v":0},
{"address":{"geolocation":{"lat":"50.3456","long":"10.6419"},"city":"mesa","street":"vally view ln","number":1342,"zipcode":"96378-0245"},"id":8,"email":"william@gmail.com","username":"hopkins","password":"William56$hj","name":{"firstname":"william","lastname":"hopkins"},"phone":"1-478-001-0890","__v":0},
{"address":{"geolocation":{"lat":"40.12456","long":"20.5419"},"city":"miami","street":"avondale ave","number":345,"zipcode":"96378-0245"},"id":9,"email":"kate@gmail.com","username":"kate_h","password":"kfejk@*_","name":{"firstname":"kate","lastname":"hale"},"phone":"1-678-456-1934","__v":0},
{"address":{"geolocation":{"lat":"30.24788","long":"-20.545419"},"city":"fort wayne","street":"oak lawn ave","number":526,"zipcode":"10256-4532"},"id":10,"email":"jimmie@gmail.com","username":"jimmie_k","password":"klein*#%*",
"name":{"firstname":"jimmie","lastname":"klein"},"phone":"1-104-001-4567","__v":0}]
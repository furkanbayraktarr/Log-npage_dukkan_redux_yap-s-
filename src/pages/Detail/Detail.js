import React from "react";
import { View,Text ,Image} from "react-native";
import Config from "react-native-config";
import styles from './Detail.style'
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


const Detail = ({route}) => {
const {id} = route.params
const {data, error,loading} = useFetch(`${Config.API_PRODUCT_URL}/${id}`)

if(loading)
{
    return (
       <Loading/>
)}

if(error){
    return <>
    <Text style = {{fontSize:25, fontWeight:'bold', color:'black'}}>{error}!!!</Text>
    <Error />
    </>
}

return(
    
     <View style={styles.container} >
     <Image style={styles.image} source={{uri:data.image}}/>
     <View style={styles.body_container}>
     <Text style={styles.title}>{data.title}</Text>
     <Text style={styles.des}>{data.description}</Text>
     <Text style={styles.price}>{data.price} ₺</Text>
     </View>
     </View>

)
    
}
export default Detail
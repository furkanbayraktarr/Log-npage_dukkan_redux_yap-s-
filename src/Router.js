import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products/Products";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login";
import {useSelector} from 'react-redux'
import Loading from "./components/Loading";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import {useDispatch} from 'react-redux'

const Stack = createNativeStackNavigator()

 function Router() {
     
    const userSession = useSelector(selector=>selector.user)
    const isAuthLoading = useSelector(selector=>selector.isAuthLoading)
    const dispatch = useDispatch()


    return(
        <NavigationContainer>
            
                {isAuthLoading ? (
                    <Loading/>
                ) : !userSession ? (
                <Stack.Navigator>
                    <Stack.Screen name='LoginPage' component={Login} 
                    options={{
                       headerShown: false,
                    }} />
                    </Stack.Navigator>
                    ) : (
                <>
                <Stack.Navigator>
                <Stack.Screen name='ProductsPage' component={Products} 
                options={{
                    title:'Store',
                    headerStyle:{backgroundColor:'#64b5f6'},
                    headerTitleStyle:{color:'white',fontSize:23},
                    headerRight: () => (
                    <Icon 
                    name="logout"
                    size={23} 
                    color="white" 
                    onPress={()=> dispatch({ type:'REMOVE_USER'})}/>)
                }} />
                <Stack.Screen name='DetailPage' component={Detail} 
                options={{
                    title:'Detail',
                    headerStyle:{backgroundColor:'#64b5f6'},
                    headerTitleStyle:{color:'white',fontSize:23},
                    headerTintColor:'white',
                }}/>
                </Stack.Navigator>
                </>)
                }                
            
        </NavigationContainer>
    )
}

export default Router

/*  
    burada uygulama açıldığında eğer userSession yoksa yani initialstateyi
    oluşturduğumuz user yoksa (bu da herhangi bir kullanıcı daha önceden giriş yapmamışsa
    anlamına geliyor çünkü giriş yapsa ve kullanıcı ismi ve parola geçerliyse
    initialstateye userı ekliyoruz ve selector.user var olmuş oluyor)
    Login sayfasını göster. eğer usesession varsa direk ProductPagei göster 
    diyoruz. Hani instagramda bir kere login yapınca logout yapana kadar uygulamaya
    her girişimizde anasayfamız açılır login sayfası çıkmaz. yaptığımız şey 
    bu mantık. o zaman bizim Login sayfasında navigation.navigate('ProductPage)
    işlemi yapmamıza gerek kalmıyor.
    en başa koyduğumuz isAuthLoading ? (<Loading/>) sayesinde uygulamayı
    ilk açtığımızda daha önce login yapmış olmamıza rağmen 1-2 saniye 
    login sayfasının gözükmesini engellemiş bunun yerine loading dönmesini sağladık.
    loading en başta true durumunda ancak authprovider sayfasında
    useeffect devreye girdiğinde false durumuna geçer o kısacık sürede
    login sayfası değilde loading gözüksün diye 
    isAuthLoading ? (<Loading/>) ile başlattık
    
    */
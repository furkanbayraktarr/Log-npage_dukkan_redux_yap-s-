import AsyncStorage from "@react-native-async-storage/async-storage/";
import React , {useState,useEffect} from 'react'
import { Provider } from "react-redux";
import {legacy_createStore as createStore } from "redux";
import reducers from "./reducers";



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthLoading, setAuthLoading] = useState(true)

    useEffect((()=> {
        AsyncStorage.getItem('@USER').then(userSession=>{
            userSession && setUser(JSON.parse(userSession))
            setAuthLoading(false)
        })
    }),[])

    const store = createStore(reducers, {user,isAuthLoading})
    return <Provider store={store} >{children}</Provider>

}

export default AuthProvider

 /* AsyncStorage.getItem ve AsyncStorage.setItem promise yapısında kullanılabilir. yani
 const user= AsyncStorage.getItem('@USER') diyip bu user verisini
 store.js dosyasındaki initialstate'ye atamıyoruz, then yapısı(promise) kullanmak zorundayız.
 bu yüzden promise yapısından aldığımız veriyi initialstate olarak 
 const store = createStore(reducers, {user,isAuthLoading}) kısmında {user,isAuthLoading}
 olarak belirliyoruz. yani veriyi getItem ile depodan aldık ve bunu initialstate
 yaptık. ayrı bir store dosyasında bu then li yapıyı koyamazdık.
 userSession ? setUser(JSON.parse(userSession)) : (...)  yerine  
 userSession && setUser(JSON.parse(userSession)) kullanmamızın sebebi
 sadece usersessionun olduğu durumda bir işlem istiyoruz.
  userSession ? setUser(JSON.parse(userSession)) : (...) bu kullanımda : dan
  sonra aksi durumda yapılacak işlem belirtmek gerekiyor ama biz aksi durumla
  ilgilenmiyoruz.  
  bizim bir store.js dosyamız dolayısıyla bir initialstatemiz yok,
  useeffect fonksiyonunda biz initialstate değerini belirlemiş oluyoruz.
  yani normalde stateye değer gönderip stateyi güncelliyorduk.
  burada stateyi provider sayfasında usestate ile güncellemiş oluyoruz.
  ilk değeri null verip sonradan bunu useeffect fonksiyonuyla gerekli koşul varsa
  güncelliyoruz.
 */
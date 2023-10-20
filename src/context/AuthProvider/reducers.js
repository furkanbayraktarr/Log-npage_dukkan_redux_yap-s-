import AsyncStorage from '@react-native-async-storage/async-storage'

export default function reducers (state, action){
 switch(action.type) {
    case 'SET_USER':
      const {user} = action.payload
      AsyncStorage.setItem('@USER', JSON.stringify(user))
      return{...state, user}
    
    case 'REMOVE_USER':
      AsyncStorage.removeItem('@USER')
      return{...state, user}

      default: 
      return state
 }
}

/* action.payloaddan gelen userı çekip state ye ekliyoruz.
 AsyncStorage.setItem('@USER', JSON.stringify(user)) kısmında await kullanmadık 
 çünkü hem çok kısa süren bir işlem bekleme yapmaz hem de yapsa 
 bile bir sorun teşkil etmez. */
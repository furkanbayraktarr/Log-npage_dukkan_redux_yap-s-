import React from 'react'
import LottieView from 'lottie-react-native'

function Error() {
    return ( 
    <LottieView style={{flex: 1}} source={require('../../assets/error.json')} autoPlay  />
    )
}
export default Error
/*style vermeden animasyonun ekranda gözükmeme nedeni, <LottieView> bileşeninin 
belirli bir boyut veya stil  verilmeden önce otomatik olarak sıfır boyutlu (0x0) 
olarak kabul edilmesidir. 
Bu nedenle, animasyonun görüntülenmesi için bileşene bir boyut veya stil atamak 
gereklidir. Kodunuzdaki <LottieView> bileşenine style={{flex: 1}} eklediğinizde, 
bu bileşeni  içeren üst düzey bir bileşen (örneğin bir View) zaten esnek bir şekilde 
tüm mevcut alanı kaplayacak ve içindeki LottieView bileşeni de bu alana uygun şekilde 
genişleyecektir. Bu nedenle animasyon ekranda görünecektir.
Ancak, direkt olarak <LottieView> bileşenine stil vermezseniz veya 
boyut belirtmezseniz, animasyonun boyutu otomatik olarak sıfır olarak kabul 
edileceğinden, görünmez olacaktır. Bu tür durumlar için bileşenlere boyut veya stil 
belirtmek önemlidir, böylece içerik düzgün bir şekilde yerleştirilir ve görünür 
hale gelir. */
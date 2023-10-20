import { useState, useEffect } from "react";
import axios from "axios";


function useFetch( url){
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data,Setdata] = useState([])
    
const fetchData = async () => {
try{
    const {data : responseData} = (await axios.get(url))
    Setdata(responseData)
    setLoading(false)
}
catch(err) {
    setLoading(false)
    setError(err.message)
}
}
useEffect(()=>
{fetchData()}, [])

return ( 
    {error, loading, data}
)
    
}
export default useFetch

/* {data : productData} yazmamızın sebebi;await axios.get(Config.API_URL) buradan 
gelen responsenin data olmaması, hatırla buradan gelen response bir object oluyordu
ve içerisinda data sekmesi oluyordu o datada da json objemiz oluyordu.
o yüzden biz await axios.get(Config.API_URL) buradan gelen responseden süslü parantez 
içinde data yazarak responseden datayı parçalayıp alıyoruz. bunu da productData'ya
eşitlememizin sebebi setSata(data) yazmanın çok sağlıklı durmamasından dolayı olablir.
zaten süslü parantez içine data yazınca gelen responseden datayı parçalamış oluyoruz,
const ifadesi kullandığımız için bu parçaladığımız datayı bi isme atamamız daha 
sağlıklı olur.
kodu şöyle de yazabilirdik : 
const response =(await axios.get(Config.API_URL))
Setdata (response.data) yazdığımızla bu örnek aynı sonucu veriyor.
yada şöylede yazabilirdik:
const {data} = (await axios.get(Config.API_URL))
Setdata(data)
useState deki data ile buradaki data aynı şey değil, karıştırma, usestatedeki datayı
başlangıç değeri olarak bi array yaptık([]) setData ile o zaten direk productData 
olmuş olacak.
fetchData adında bir fonksiyon oluşturduk ve bu fonksiyon asenkron bir fonksiyondur.
Asenkron fonksiyonlar, içinde "await" kelimesini kullanarak asenkron işlemleri
senkron bir şekilde yönetmeye olanak tanır.
Axios kütüphanesini kullanarak Config.API_URL değişkeninde belirtilen API URL'ine
HTTP GET isteği gönderiyoruz. Bu istek bir "promise" döndürür ve "await" kelimesiyle
bu promise'ın çözülmesini bekliyoruz. Sonuç olarak, API'den alınan veri "productData"
değişkenine atanır.*/
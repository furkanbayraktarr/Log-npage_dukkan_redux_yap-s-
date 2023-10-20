import React from "react";
import { SafeAreaView,Text,FlatList } from "react-native";
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";




const Products = ({navigation}) => {

const handleProductSelect = (id) => {
    navigation.navigate('DetailPage', {id})
}
const {data,error,loading} = useFetch(Config.API_PRODUCT_URL)
const renderProduct = ({item}) => 
<ProductCard product={item} 
onSelect={() => handleProductSelect(item.id)}/>

if (loading) {
    return (
       
    <Loading/>)
}

if(error){
    return <>
    <Text style = {{fontSize:25, fontWeight:'bold', color:'black'}}>{error}!!!</Text>
    <Error />
    </>
}

return(
    <SafeAreaView>
        <FlatList
        data={data}
        renderItem = {renderProduct}
        />
    </SafeAreaView>
)
}

export default Products

/*returnlerden sonra sadece tek bişey döndürdüğümüz için parantez kullanmadık 
ancak birden fazla şey veya iç içe yapılar kullansak parantez kullanmamız gerekecekti*/

/* eğer loading varsa yani true ise ki başlangıç durumunda true ,bir 
yüklenme sembolü döndr dedik. eğer get isteğimize response gelirse false
set et dedik. böylece uygulama ilk açıldığında başlangıç değerine göre 
dönence döner ve response gelince yok olur.
errorun başlangıcını null yaptık ve if (error) döngüsünde hata yoksa bişi
döndürmemiş olacak. eğer error varsa err ismiyle yakalamış olucaz ve
hata mesajını error için set edicez. sonra return ile hata mesajını ekrana
basıcaz. catch(err) {
    setLoading(false)
    setError(err.message)
} burada setLoading(false) yapmazsak hata mesajı yakaladıgında mesajı ekrana vermeden,
    sürekli dönence ekranda kalır. 

onSelect={handleProductSelect(item.id)} şeklinde değil de
onSelect={() => handleProductSelect(item.id)} şeklinde yazmamızın sebebi bir parametre kullanmamız.
yani item.id parametresi kullandığımız için bunu bir fonksiyon şeklinde yazıyoruz.
id bilgisini detail sayfasına route ({id}) ile gönderiyoruz yani tıkladığımız itemin id sini
detay sayfasına route ile gönderdik. route kelime anlamı zaten sevketmek demek.
hatırla navigation ile başka sayfaya geçme ve route ile o sayfaya bilgi gönderme işlemi yapıyorduk.

*/

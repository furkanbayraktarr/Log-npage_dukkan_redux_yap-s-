import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#bdbdbd',
        flexDirection:'row',
        margin:10,
        backgroundColor:'#e0e0e0'
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    body_container:{
        flex:1,
        justifyContent:'space-between',
        padding:5,
    },
    title:{
        fontSize:16,
        color:'black',
        fontWeight:'bold'
    },
    price:{
        fontStyle:'italic',
        fontSize:16,
        textAlign:'right',
        color:'black'
    },
})
/* <Image> bileşeni, resimleri görüntülemek için kullanılan bir bileşendir ve bu prop, resimlerin ekrana nasıl 
yerleştirileceğini ve boyutlandırılacağını belirlemek için kullanılır.

resizeMode prop'u, aşağıdaki değerlerden birini alabilir:

cover: Resmi tamamen kaplamak için boyutlandırırken, resmin oranını koruyarak resmi ekrana sığdırmaya çalışır. Resim, ekranın
tamamını kaplayacak şekilde düzenlenir, ancak resmin bir kısmı kesilebilir.

contain: Resmi oranını koruyarak tamamen ekrana sığdırmaya çalışır, ancak resim tamamen ekranı kaplamayabilir ve ekranın kenarlarında 
boş alanlar olabilir.

stretch: Resmi, bileşenin boyutlarına zorlar ve oranını korumaz. Bu, resmi bileşenin boyutlarına göre gerer ve resmin oranını bozabilir.

center: Resmi ekranda tam ortalamak için boyutlandırır, resmin oranını korur ve resmin kenarlarında boşluk bırakabilir.

repeat: Resmi tekrar eden desenler oluşturmak için yineleyerek ekrana sığdırır.

none: Resmi orijinal boyutuyla kullanır ve boyutlandırmaz.

image'ın arka planında kalan grilikleride backgroundColor:'white vererek 
beyaz yapmış olduk.*/
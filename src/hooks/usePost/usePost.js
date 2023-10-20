import { useState} from 'react'
import axios from 'axios'


function usePost() {
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(false)

    const post = async(url, apiData) => {
        try{
           setError(false)
           setLoading(true)
           const {data:responseData}= await axios.post(url, apiData)
           setData(responseData)
           setLoading(false)
           
           
        }
        catch (err){
            setError(err)
            setLoading(false)
    }
}

return(
    {data,loading,error,post}
)

}

export default usePost
/* önceki dükkan projesinde Product sayfasında
const {data,error,loading} = useFetch(Config.API_PRODUCT_URL) şeklinde url göndermiştik
Ancak bu örnekte url ve apiData post propsları post fonksiyonunda verdik.
Bu yüzden return işlemine postu dahil ettik ve Login sayfasında postu çağırıp
onun içine url ve apiData gönderdik. 
useEffect(() => {post()}, []) koymamamızın sebebi ben usePost çalıştığında
post çalışsın istemiyorum, buttona(giriş yap) basıldığında post fonksiyonu
çalışsın istiyorum.
 */
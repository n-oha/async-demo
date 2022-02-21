import axios from 'axios' 

export const fetchData = async () => {          //async function でtry内の詳細を基にして指定のurlからデータを持ってくる様に指示してます
    try {
       const data = {
            method: 'get',
            url: '',
            headers: {
                
            }
        }

        await axios.request(data).then((res) => console.log(res.data))      //awaitを使って撮ってきたデータをコンソールに出してねと指示しています

        } catch (error) {
        console.error(error)        //不具合等があればエラーを表示してねという指示
    }
}

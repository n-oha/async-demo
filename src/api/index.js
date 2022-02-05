import axios from 'axios' 

export const fetchData = async () => {          //async function でtry内の詳細を基にして指定のurlからデータを持ってくる様に指示してます
    try {
       const data = {
            method: 'get',
            url: 'https://covid-19-data.p.rapidapi.com/totals',
            headers: {
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                'x-rapidapi-key': 'aa4ac8ce04msh9a6283c48f5d93fp19a3a5jsnacb4dd1a5c68'
            }
        }

        await axios.request(data).then((res) => console.log(res.data))      //awaitを使って撮ってきたデータをコンソールに出してねと指示しています

        } catch (error) {
        console.error(error)        //不具合等があればエラーを表示してねという指示
    }
}

import React from 'react'

import styles from './App.module.css'

import { HelloWorld } from './components'

import { fetchData } from './api'   //api内のasync functionによって収集したデータをAppにインポートする為の呼び出し

export default class App extends React.Component {

    async componentDidMount() {
                                                    //App内のasyncの役割はcomponentDidMount内でasyncを使ってapiからのデータを受け取ってコンソールに出力します
        const data = await fetchData()              

        console.log(data);                          //受け取ったデータをコンソールに出力してねという最終指示。結果ブラウザのインスペクト内のコンソール部分に結果が表示されます
    }

    render() {
        return (
            <div className={styles.container}>
                <HelloWorld />
            </div>
        )
    }
}


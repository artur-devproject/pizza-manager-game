import React from 'react'
import './App.css';
import ScreenList from '../Screens/ScreenList'
import ScreenBody from '../Screens/ScreenBody'
import { Money } from '../Money/Money'
import Time from '../Time/Time'
import { useState, useEffect } from 'react'
import { PARAMS } from '../../data/params'
import { AppStore } from '../../store'
import { Modal } from '../Modal/Modal'

let appStore = new AppStore()

function App() {

    const [currentScreenId, setCurrentScreenId] = useState(1)
    const [time, setTime] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    function handleRestart() {
        appStore = new AppStore()
        setGameOver(false)
        setTime(0)
    }

    useEffect(() => {
        if(gameOver) return
        const timeoutID = setTimeout(() => {
            setTime(time + 1)
            appStore.orderBook.run()
            appStore.kitchen.run()
            appStore.delivery.run()
            appStore.finance.hourUpdate()
            if((time + 1) % 12 === 0) {
                appStore.finance.dailyUpdate()
            }
            if(appStore.finance.balance < 0) setGameOver(true)
        }, PARAMS.hour)
        
        return () => clearInterval(timeoutID)
    }, [time])

    return (
        <div className="App">
            <div className="App__header">
                <Time time={time} />
                <Money appStore={appStore} />
            </div>
            <div className="App__body">
                <ScreenList 
                    currentScreenId={currentScreenId} 
                    setCurrentScreenId={setCurrentScreenId} 
                    appStore={appStore} 
                />
                <ScreenBody 
                    currentScreenId={currentScreenId} 
                    setCurrentScreenId={setCurrentScreenId} 
                    appStore={appStore} 
                />
            </div>
            {gameOver && <Modal handleRestart={handleRestart} />}
        </div>
    )
}

export default App;

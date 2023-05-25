import React from 'react'
import { observer } from "mobx-react"
import './Storage.css';
import StorageItem from './StorageItem'

export const StorageScreen = observer(({ appStore }) => {

    return (
        <div className="storageList">
            {appStore.storage.content.length 
            ? appStore.storage.content.map((item) => (<StorageItem key={item.id} item={item} />))
            : <>Склад пустой</>}
        </div>
    );
})

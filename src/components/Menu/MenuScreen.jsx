import React from 'react'
import './Menu.css'
import { MenuItem } from './MenuItem'
import { observer } from 'mobx-react';

export const MenuScreen = observer(({ appStore }) => {
    return (
        <div className="menuList">
            {appStore.menu.list.map(dish => <MenuItem key={dish.id} dish={dish} appStore={appStore} />)}
        </div>
    )
})

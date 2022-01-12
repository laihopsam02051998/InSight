import React from 'react'
import { Logo } from '../Logo'
import { Tags } from '../Tags'
import "./styles.scss"
 function Menu() {
    return (
        <div className='menuContainer'>
            <Logo />
            <div className='frameContainer'>
              <Tags status={true} title='Trang chủ' icon=""/> 
              <Tags status={false} title='Quản lý vé' icon=""/>
              <Tags status={false} title='Đổi soát vé' icon=""/>
               
                <div className='GroupContainer'>
                <Tags status={false} title='Cài đặt' icon=""/> 
                <p>Gói dịch vụ</p>
                    </div>
            </div>
        </div>
    )
}

export default Menu

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../Logo'
import { Tags } from '../Tags'
import "./styles.scss"

type MenuProps={
   
}
 function Menu(props:MenuProps) {

    const location = useLocation();
    // lấy pathName của trang và bỏ dấu "/"
    let linkName = location.pathname.substr(1)
 
        
  

    return (
        <div className='menuContainer'>
            <Logo />
            <div className='frameContainer'>
                <Link to='/' > <Tags status={linkName===""?true:false} title='Trang chủ' icon=""/> </Link>
                <Link to='/QuanLyVe' > <Tags status={linkName==="QuanLyVe"?true:false} title='Quản lý vé' icon=""/> </Link>
                <Link to='/SoatVe'> <Tags status={linkName==="SoatVe"?true:false} title='Đổi soát vé' icon=""/> </Link>
                <div className='GroupContainer'>
                <Tags status={false} title='Cài đặt' icon=""/> 
                <p>Gói dịch vụ</p>
                    </div>
            </div>
        </div>
    )
}

export default Menu

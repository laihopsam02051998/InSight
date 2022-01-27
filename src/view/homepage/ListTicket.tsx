import React, { CSSProperties, useState } from 'react'
import Search from '@shared/components/Search'  
import  OutlineXLLeftIcon  from '@shared/components/Buttons/OutlineXLLeftIcon'
import { OutlineXLDefault } from '@shared/components/Buttons/OutlineXLDefault' 
import "./styles.scss"

type ListTicketProps = {
    carArrays:Array<number|string|boolean>
    carFunction:(name:string, age:string) => void
    style:CSSProperties
}

 function ListTicket({carArrays, carFunction}:ListTicketProps) {
    const [name, setName] = useState(null)
    return (
        <div>
            <h1>Danh sách vé</h1>
            <div className='ticketController'>
            
                <Search />
                <div>
                   <div>
                     <OutlineXLLeftIcon name={"Lọc vé"}/>
                   </div>
                   <div>
                   <OutlineXLDefault name={"Xuất file (.csv)"} />
                   </div>
            
                </div>
            </div>
            <div className='ticketTable'>

            </div>
        </div>
    )
}

export default ListTicket

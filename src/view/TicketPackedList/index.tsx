import React, { useEffect, useState } from 'react'
import { Search } from '../../Shared/components/Search'
import { OutlineXLLeftIcon } from '../../Shared/components/Buttons/OutlineXLLeftIcon'
import { OutlineXLDefault } from '../../Shared/components/Buttons/OutlineXLDefault'
import Status from '../../Shared/components/Status'
import ticketData from './../../Data/ticket.json'
import {TicketPackedListState}from './TicketPackedList.type'
import "./styles.scss" 
import TicketFilter from './TicketFilter'



 function TicketPackedList() {
     const [ticketList, setTicketList] = useState<TicketPackedListState>([]);

    useEffect(()=>{
        const tickets = ticketData.ticketList
        setTicketList([...tickets]) 
    },[])
    

// console.log(ticketList);

    return (
        <div className='ticketListContainer'>
            <h1>Danh sách vé</h1>
            <TicketFilter />
            <div className='ticketListController'>
                <div className='controllerLeft'>
                    <Search placeholder="Tìm bằng số vé"/>
                </div>
                <div className='controllerRight'>
                    <OutlineXLLeftIcon />
                    <OutlineXLDefault />
                </div>
            </div>
            <div className='ticketListTable'>
            <table className='ticketTable '>
            <tr>
                <th>STT</th>
                <th>Booking code</th>
                <th>Số vé</th>
                <th>Tên sự kiện</th>
                <th>Tình trạng sử dụng</th>
                <th>Ngày sử dụng</th>
                <th>Ngày xuất vé</th>
                <th>Cổng check-in</th>
              
            </tr>
            {ticketList.map((item:any , index:any)=>{
                return(
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.id}</td>
                        <td>{item.ticketQuality}</td>
                        <td>{item.eventName}</td>
                        <td><Status status={item.status} /></td>
                        <td>{item.date}</td>
                        <td>{item.buyDate}</td>
                        <td>{item.entrance}</td>
                        <td></td>
                    </tr>
                )
            })}
          </table>
          <div className='panigation'>
               <p>1</p>
          </div>
            </div>
        </div>
    )
}

export default TicketPackedList

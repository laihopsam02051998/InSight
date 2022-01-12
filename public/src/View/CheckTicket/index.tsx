import React from 'react'
import { FillXLDefault } from '../../Shared/components/Buttons/FillXLDefault'
import { OutlineXLDefault } from '../../Shared/components/Buttons/OutlineXLDefault'
import { FillRightIcon } from '../../Shared/components/Fill/FillRightIcon'
import { NomalRightIcon } from '../../Shared/components/Fill/NomalRightIcon'
import { RadioButtons } from '../../Shared/components/RadioButtons'
import { Search } from '../../Shared/components/Search'
import "./styles.scss"
function CheckTicket() {
    return (
       <div className='checkContainer'>
            <div className='checkContainerLeft'>
                <h2>Đối soát vé</h2>
                <Search />          
                <FillXLDefault buttonName="Chốt đối soát" />
                <table className='ticketTable '>
            <tr>
                <th>STT</th>
                <th>Số vé</th>
                <th>Ngày sử dụng</th>
                <th>Tên loại vé</th>
                <th>Cổng check-in</th>
                <th> </th>

            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>14/04/2021</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>14/04/2021</td>
                <td>Vé cổng</td>
                <td>Cổng 1</td>
                <td>Chưa đối soát</td>
                
            </tr>
            
                </table>
                <div className='checkPanigation'>
                    <h1>checkPanigation</h1>
                </div>
            </div>
            <div className='checkContainerRight'>
                <h2>Lọc vé</h2>
                <p>Tình trạng đối soát</p>
                <p>Loại vé</p>
                <p>Từ ngày</p>
                <p>Đến ngày</p>
                <div className='statusContainer'>
                    <RadioButtons  type='enable'/>
                    <RadioButtons  type='enable'/> 
                    <RadioButtons type='enable'/> 
                    <p>Tất cả</p>
                    <p>Đã đối soát</p>
                    <p>Chưa đối soát</p>
                </div>
                <NomalRightIcon />
                <FillRightIcon />
                <OutlineXLDefault />
            </div>
       </div>
    )
}

export default CheckTicket

import React from 'react'
import "./styles.scss" 
import { Search } from '../../Shared/components/Search'
import { OutlineXLLeftIcon } from '../../Shared/components/Buttons/OutlineXLLeftIcon'
import { OutlineXLDefault } from '../../Shared/components/Buttons/OutlineXLDefault'
import Status from '../../Shared/components/Status'


 function TicketPackedList() {
    return (
        <div className='ticketListContainer'>
            <h1>Danh sách vé</h1>
            <div className='ticketListController'>
                <div className='controllerLeft'>
                    <Search />
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
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"opening"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"finish"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"coming"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"opening"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"finish"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"coming"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"opening"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"finish"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"coming"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"opening"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"finish"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>ALT20210501</td>
                <td>123456789034</td>
                <td>Hội chợ triển lãm tiêu dùng 2021</td>
                <td><Status status={"coming"} /></td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
            </tr>
          </table>
         
          <div className='panigation'>
               <p>1</p>
               <p>2</p>
               <p>3</p>
          </div>

            </div>
        </div>
    )
}

export default TicketPackedList

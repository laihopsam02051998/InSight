import React, {useRef} from 'react';
import CheckBoxs from '../../../Shared/components/CheckBoxs';


import { NomalRightIcon } from '../../../Shared/components/Fill/NomalRightIcon';
import { RadioButtons } from '../../../Shared/components/RadioButtons';
import'./styles.scss'

 function TicketFilter() {
    const ticketStatus = useRef("all")

    console.log(ticketStatus.current);
    
  return <div className='container'>
      <h3>Lọc vé</h3>
      <p id='startDate'>Từ ngày</p>
      <p id='endDate'>Đến ngày</p>
      <p id='statusTicket'>Tình trạng sử dụng</p>
      <div className='NomalRightIcon1'>
         <NomalRightIcon />
      </div>
      <div className='NomalRightIcon2'>
         <NomalRightIcon />
      </div>
      <div className='radiobutton1'>
      <RadioButtons type={ticketStatus.current==="all"?"enable":"disable"} name="Tất cả" status={true}/>
      </div>
      <div className='radiobutton2'>
      <RadioButtons type={"enable"} name="Đã sử dụng"/>
      </div>
      <div className='radiobutton3'>
      <RadioButtons type={"enable"} name="Chưa sử dụng"/>
      </div>
      <div className='radiobutton4'>
      <RadioButtons type={"enable"} name="Hết hạn"/>
      </div>
      <p id='entruance'>Cổng check-in</p>
      
      <div className='entruanceStation'>
      <div className='checkbox1'>
      <CheckBoxs name='Tất cả' CheckBoxType="enable"/> 
      </div>
      <div className='checkbox2'>
      <CheckBoxs name='Cổng 1' CheckBoxType="enable"/> 
      </div>
      <div className='checkbox3'>
      <CheckBoxs name='Cổng 2' CheckBoxType="enable"/> 
      </div>
      <div className='checkbox4'>
      <CheckBoxs name='Cổng 3' CheckBoxType="enable"/> 
      </div>
      <div className='checkbox5'>
      <CheckBoxs name='Cổng 4' CheckBoxType="enable"/> 
      </div>
      <div className='checkbox6'>
      <CheckBoxs name='Cổng 5' CheckBoxType="enable" /> 
      </div>
      </div>
      
  </div>;
}

export default TicketFilter

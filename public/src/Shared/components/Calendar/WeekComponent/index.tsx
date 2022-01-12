import CheckBoxs from '../../CheckBoxs';
import './styles.scss';

export const WeekComponent =()=>{
    return (
   
        <div className='weekComponent'>
            <div className='calendar'>
            </div>
            <div className='background'>
                <div className='chooseDay'> 
                    <CheckBoxs CheckBoxType={'enable'} />
                    <p>Theo Ngày</p>
                </div>
                <div className='chooseMonth'> 
                    <CheckBoxs CheckBoxType={'enable'} />
                    <p>Theo Tháng</p>
                </div>
            </div>
            <div className='monthSelector'>
                 <div className='arrows'>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.65685 1.34315L1 7L6.65685 12.6569" stroke="#1E0D03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p>Tháng 4, 2021</p>
                
                   <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.97059 1.34315L7.62744 7L1.97059 12.6569" stroke="#1E0D03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                 

                </div>
            </div>
      
        </div>
 
    )
}
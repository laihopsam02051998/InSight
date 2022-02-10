
import { Avatar } from "../../Shared/components/Notice/Avatar"
import { BellNotice } from "../../Shared/components/Notice/BellNotice"
import { MailNotice } from "../../Shared/components/Notice/MailNotice"
import { Search } from '../../Shared/components/Search'
import "./styles.scss"
const Header=()=>{

   return (
      <div className="headerContainer">
         <Search />
         <div className="noticeContainer">
            <MailNotice />
            <BellNotice />
            <Avatar />
         </div>
      </div>

   )
}

export  default Header
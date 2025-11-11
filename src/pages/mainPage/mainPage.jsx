import './mainPage.css'
import Info from '../../component/info/info.jsx'
import Experiences from '../../component/experiences/Experiences.jsx'
import Button from '@mui/material/Button'
export default function MainPage(){
       return(

        <div className='mainPage'>
           <Info/>
            <Experiences/>
            <div className="bottom-btns">
            <Button variant="contained" >مشاريعي</Button>
            <Button variant="contained" >طلب خدمة</Button>
            </div>

             
        </div>
       
    )
}

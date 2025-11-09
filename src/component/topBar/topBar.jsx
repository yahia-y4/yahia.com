import './topBar.css'
import TopImg from '../topImg/topImg'
import MenuIcon from '@mui/icons-material/Menu';
export default function TopBar(){
    return(
        <>
        <div className='topBar'>
      
            <h1 className='name'>Yahia Alhamoud | يحيى الحمود</h1>
          
            <MenuIcon sx={{fontSize: 40, color: '#006effff'}} className='menu-icon'/>

        </div>
        </>
    )
}

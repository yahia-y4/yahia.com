import './mainPage.css'
import MainImg from '../../component/mainImg/mainImg.jsx'
export default function MainPage(){
    return(
        <>
        <div className='mainPage'>
            <div className="top-info">
                <MainImg/>
                <h1 className='title'>Full Stack Developer</h1>
                <p className='description'>
                    I am a full stack developer with a passion for creating beautiful and functional websites.
                </p>
                
            </div>
            
        </div>
        </>
    )
}

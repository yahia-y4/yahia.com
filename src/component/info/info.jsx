import './info.css'
import MainImg from '../../component/mainImg/mainImg.jsx'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
export default function Info(){
     const description = `أنا مطور فل ستاك (Full Stack Developer) متخصص في تطوير واجهات الويب باستخدام React وتطبيقات الخلفية باستخدام Node.js.
أمتلك خبرة واسعة في بناء مواقع وتطبيقات ويب متكاملة تتميز بالكفاءة، السرعة، والتصميم الحديث.
كما أعمل أيضًا على تطوير تطبيقات سطح المكتب باستخدام أحدث التقنيات، لتلبية احتياجات المستخدمين سواء على الإنترنت أو دون اتصال.`

    return(
         <div className="top-info">
                <MainImg/>
                <h2 className='title'>Full Stack Developer</h2>
                <p className='description'>
                    {description}
                </p>
     <Button sx={{marginTop:5}} variant="contained" endIcon={<SendIcon />}>
     Contact me
</Button>
                
            </div>
    )
}

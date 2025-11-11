import "./Experiences.css"
import Language from "../Language/Language"
export default function Experiences(){
    const lans = ["C","Dart","PHP","SQL","C++","JS","Python"]
    const front = ["HTML", "CSS", "JS", "React","Next.js","axios","Bootstrap","Material UI","Tailwind CSS"]
    const back = ["Node.js", "Express.js", "ASP.NET","Laravel","MySQL","SQLite","sql server","REST API"]
    const other = ["Git","Postman","VS Code","Android Studio","command line"]
    return(
        <div className="experiences">
            <h2 className="experiences-title">الخبرات</h2>
            <div className="Languages">
                <h3 className="Languages-title">لغات البرمجة</h3>
                <div className="Languages-container">
                    {
                        lans.map((lan, index) => (
                            <Language key={index} lan={lan}/>
                        ))
                    }
                </div>
            </div>
            <div className="web">
                <h3 className="web-title">تقنيات الويب</h3>
                <div className="web-container">
                   <h3 className="web-title">front end</h3>
                   <div className="web-content">
                        {
                            front.map((lan, index) => (
                                <Language key={index} lan={lan}/>
                            ))
                        }
                   </div>
                    <h3 className="web-title">back end</h3>
                <div className="web-content">
                    {
                        back.map((lan, index) => (
                            <Language key={index} lan={lan}/>
                        ))
                    }
                </div>
                    <h3 className="web-title">اخرى</h3>
                <div className="web-content">
                    {
                        other.map((lan, index) => (
                            <Language key={index} lan={lan}/>
                        ))
                    }
                </div>
                </div>
               
            </div>
            
        </div>
    )
}

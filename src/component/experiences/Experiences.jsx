import "./Experiences.css"
import Language from "../Language/Language"
export default function Experiences(){
    const lans = ["C++", "C", "Python","JS", "HTML", "CSS","Dart","PHP","SQL"]
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
            
        </div>
    )
}

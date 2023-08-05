import "./HeroSecStyle.css";

function HeroSec(props){
    return(
        <>
    <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg}/>
        <div className="hero-text">
        <center><h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.buttontext}</a></center>
        </div>
    </div>
    </>
    )
}
export default HeroSec;

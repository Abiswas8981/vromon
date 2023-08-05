import { NavLink } from "react-router-dom";
const Privacy = () => {
    return (
        <>
            <div>
                <img src="img/privacy.jpeg" style={{ width: "100%", height: "33rem" }}></img><br />
                <lebal id="privacy-h1" style={{ marginTop: "-12rem" }}>Privacy & Security</lebal><br />
            </div>
            <div>
                <lebal className="privacy-link">
                    <NavLink to="/">Home</NavLink>/Privacy & Security
                </lebal>
                <h1 className="privacy-head">Privacy Policy</h1>
                <p className="privacy-p" style={{ width: "85%" }}>TourMyIndia.com respects your privacy and recognizes the need to protect the personally identifiable information (any information by which you can be identified, such as name, address and telephone number) you share with us. We would like to assure you that we follow appropriate standards when it comes to protecting your privacy on our web sites.</p>
                <p className="privacy-p" style={{ width: "85%" }}>Some of our web pages use "cookies" so that we can better serve you with customized information when you return to our site. Cookies are identifiers which a web site can send to your browser to keep on your computer to facilitate your next visit to our site. You can set your browser to notify you when you are sent a cookie, giving you the option to decide whether or not to accept it. The information we collect and analyze is used to improve our service to you.</p>
                <p style={{ marginLeft: "8rem", width: "85%" }} className="privacy-p">There are times when we may collect personal information from you such as name, physical address or telephone number. It is our intent to inform you before we do that and to tell you what we intend to do with the information. Generally, you will have the option not to provide the information, and in the future you will be able to "opt out" of certain uses of the information. If you choose not to provide the information we request, you can still visit our website https://www.tourmyindia.com, but you may be unable to access certain options, offers and services.</p>
                <h1 className="privacy-head">Online Security</h1>
                <p className="privacy-p" style={{ width: "85%" }}>TourMyIndia.com will not sell, trade or disclose to third parties any information derived from the registration for, or use of, any online service (including names and addresses) without the consent of the user or customer (except as required by subpoena, search warrant, or other legal process or in the case of imminent physical harm to the user or others). Tour MY India will allow suppliers to access the information for purposes of confirming your registration and providing you with benefits you are entitled to.</p>
            </div>
            <div style={{ marginLeft: "9rem", fontSize: "1.5rem", fontFamily: "none", marginBottom: "5rem" }}>
                <li>Providing you with the publications or services you have requested;</li>
                <li>Marketing communications;</li>
                <li>Complaint handling;</li>
                <li>Research and forecasting; and,</li>
                <li>Performing specific statutory or administrative functions.</li>
            </div>

        </>

    )
}
export default Privacy;
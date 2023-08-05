import { NavLink } from "react-router-dom";
const TermCondition = () => {
    return (
        <>
            <div>
                <img src="img/howrah.jpg" style={{ width: "100%", height: "33rem" }}></img><br />
                <lebal id="term-h1" style={{}}>Terms & Condition</lebal><br />
            </div>
            <div>
            <h1 className="privacy-head">Payments:</h1>
            <p className="privacy-p" style={{width:"85%"}}>For all the services contracted, certain advance payment should be made to hold the booking, on confirmed basis & the balance amount can be paid either before your departure from your country or upon arrival in INDIA but definitely before the commencement of the services. Management personnels hold the right to decide upon the amount to be paid as advance payment, based on the nature of the service & the time left for the commencement of the service.</p>
            <h1 className="privacy-head">Payment Mode</h1>
            <p className="privacy-p" style={{width:"85%"}}>Overseas advance payment can be made through Wire Transfer to our bank.</p>
            <h2 className="privacy-head">Cencellation policy</h2>
            <p className="privacy-p" style={{width:"85%"}}>cn the event of cancellation of tour / travel services due to any avoidable / unavoidable reason/s we must be notified of the same in writing. Cancellation charges will be effective from the date we receive advice in writing, and cancellation charges would be as follows:</p>
            <div style={{ marginLeft: "9rem", fontSize: "1.5rem", fontFamily: "none", marginBottom: "2rem" }}>
                <li>45 days prior to arrival: 10% of the Tour / service cost</li>
                <li>15 days prior to arrival: 25% of the Tour / service cost</li>
                <li>07 days prior to arrival: 50% of the Tour / service cost</li>
                <li>48 hours prior to arrival OR No Show: No Refund</li>
                <li>Performing specific statutory or administrative functions.</li>
            </div>
            <h2 className="privacy-head">Our liabilities & Limitation</h2>
            <p className="privacy-p" style={{width:"85%"}}>Please note that after the finalization of the Tour/ service Cost, if there are any Hike in entrance fees of monuments / museums, Taxes, fuel cost or guide charges – by Govt of India, the same would be charged as extra.</p>
            <p className="privacy-p" style={{width:"85%"}}>TourMyIndia.com act only in the capacity of agent for the hotels, airlines, transporters, railways & contractors providing other services & all exchange orders, receipts, contracts & tickets issued by us are issued subject to terms & conditions under which these services are provided by them.</p>
            <p className="privacy-p" style={{width:"85%"}}>All itineraries are sample itineraries, intended to give you a general idea of the likely trip schedule. Numerous factors such as weather, road conditions, the physical ability of the participants etc. may dictate itinerary changes either before the tour or while on the trail. We reserve the right to change any schedule in the interest of the trip participants' safety, comfort & general well being.</p>
            <p className="privacy-p" style={{marginBottom:"4rem",width:"85%"}}>We shall not be responsible for any loss, injury or damage to person, property, or otherwise in connection with any accommodation, transportation or other services, resulting – directly or indirectly – from any act of GOD, dangers, fire, accident, breakdown in machinery or equipment, breakdown of transport, wars, civil disturbances, strikes, riots, thefts, pilferages, epidemics, medical or custom department regulations, defaults, or any other causes beyond our control.</p>
            </div>
        </>
    )
}
export default TermCondition;
import "../Routes/Style.css"

const HomeRecentTrip = () => {
    return (
        <>
            <div className="trip">
                <center><h1>Recent Trip</h1>
                    <p>You can discover unique destinations using google maps.</p></center>
                <div className="card">
                    <div className="card-img">
                        <img alt="image" src="image\puri.jpg" />
                    </div>
                    <h4>Trip in Puri</h4>
                    <p>Puri is a popular city of Odisha state, famous for Sri Jagannath temple, and also as a beach destination of India. This is one of the most religious cities in the country and attracts a lot of crowd throughout the year.
                        For a budget destination, puri is a good choice within all neighboring states.
                        It has everything like lots of temples, some historical structures, beaches, Zoological gardens, lakes and many more.</p>
                </div>

                <div className="card" id="card2">
                    <div className="card-img">
                        <img alt="image" src="image\rajasthan.jpg" />
                    </div>
                    <h4>Trip in Rajasthan</h4>
                    <p>Rajasthan is a state of vibrant folk dance and music, gigantic forts and palaces, colourful and large turbans, extensive golden sand desert, camels and rich handicraft.
                        It is therefore,an incredible place to visit in India for enjoying unforgettable holidays.Sprawling in an area of 342239 sq km, Rajasthan is perfect for history buffs, culture aficionados, adventure lovers, wildlife enthusiasts, family vacations, honeymoon, and </p>
                </div>

                <div className="card" id="card3">
                    <div className="card-img">
                        <img alt="image" src="image\Delhi.jpg" />
                    </div>
                    <h4>Trip in Delhi</h4>
                    <p>A buzzing international metropolis home to seventeen million people sprawling Delhi is the capital of India, and also functions as the prime hub of wider South Asia.
                        While this may conjure visions of urban chaos, and while those visions may be almost precisely accurate in teeming Paharganj and other older districts,
                        much of the city is low-lying and as best witnessed from the elevated sections of the excellent metro system.</p>
                </div>
            </div>
        </>
    )

}
export default HomeRecentTrip;
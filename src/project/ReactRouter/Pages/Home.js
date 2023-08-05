import React from 'react'

function Home() {
  return (
  <>
    <div id='f1'>Let us plan you a perfect India Holiday</div>
    {/* <div><img src= "image\img.jpg" id='f2'/></div> */}
    <div id='carousel'>
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner" id='f10'>
    <div class="carousel-item active">
      <img src="image\amarnath.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="image\kedar1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="image\kailash.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='f3'>
<div class="card" style={{width: "18rem"}}>
  <img src="image\img.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Trekking <br/> 20+ packages</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='f4'>
<div class="card" style={{width: "18rem"}}>
  <img src="image\wild1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Wild Life <br/> 10+ packages</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='f5'>
<div class="card" style={{width: "18rem"}}>
  <img src="image\sea.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ocean Front.<br/> 15+ packages</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div id='f6'>Top trending india Holiday Destination</div>
<div className='A'>
<div class="card" style={{width: "18rem"}}>
  <img src="image\kasmir.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"><center>Kashmir</center></p>
  </div>
</div>
</div>
</div>

</>

  )
}

export default Home;
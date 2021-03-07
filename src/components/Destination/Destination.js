
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Destination() {
//  const [isAuth, setIsAuth] = useState(true);
  return (
 
 <section id="heroDestination">
     
<div class="page-title-area ptb-100">
<div class="container">
<div class="page-title-content">
<h1>Destinations</h1>
<ul>
<li class="item"><Link href="/index">Home</Link></li>
<li class="item"><Link href="/destinations"><i class='bx bx-chevrons-right'></i>Destinations</Link></li>
</ul>
</div>
</div>
<div class="bg-image">
<img src="assets/img/page-title-area/destinations.jpg" alt="Demo Image"/>
</div>
</div>

<section id="top-destination" class="top-destination-section pt-100 pb-70 bg-light">
<div class="container">
<div class="section-title">
<h2>Top Destinations</h2>
<p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
</div>
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination7.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>95 Fleet St, London</span>
<h3>
<Link href="/destination-details">Venice The Dream Place</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>9</span>
<span>Superb</span>
</div>
<p>
Two short getaway breaks in the Greece together and one mini caravan holiday.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>7 Days</li>
<li><i class='bx bx-group'></i>65+</li>
<li>$2000</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination8.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Versailles, France</span>
<h3>
<Link href="/destination-details">Palace of Versailles</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>7.5</span>
<span>Amazing</span>
</div>
<p>
A simple hunting lodging and later a small château with a moat occupied the site.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>3 Days</li>
<li><i class='bx bx-group'></i>160+</li>
<li>$1500</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 m-auto">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination9.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Inca Trail, Peru</span>
<h3>
<Link href="/destination-details">Inca Trail Machu Picchu</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>8.5</span>
<span>Superb</span>
</div>
<p>
The gorgeous play of light did justice to the mystique of the ancient ruins that.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>3 Days</li>
<li><i class='bx bx-group'></i>160+</li>
<li>$1500</li>
</ul>
</div>
</div>
</div>
 </div>
</div>
</section>


<section class="features-section pt-100 pb-70">
<div class="container">
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="item-single mb-30">
<i class='bx bx-calendar'></i>
<h3><Link href="#">Reservation</Link></h3>
<p>As compared with earlier times where a reservation personnel has to update its inventory every time.</p>
<div class="cta-btn">
<Link href="#" class="btn-primary">Read More</Link>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="item-single mb-30">
<i class='bx bxs-plane-take-off'></i>
<h3><Link href="#">Tour Pack</Link></h3>
<p>You can dream, create, design, and build the most wonder ful place in the world. But it requires people.</p>
<div class="cta-btn">
<Link href="#" class="btn-primary">Read More</Link>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 m-auto">
<div class="item-single mb-30">
<i class='bx bx-money'></i>
<h3><Link href="#">Payment</Link></h3>
<p>As compared with earlier times where a reservation personnel has to update its inventory every time.</p>
<div class="cta-btn">
<Link href="#" class="btn-primary">Read More</Link>
</div>
</div>
</div>
</div>
</div>
</section>


<section id="destination" class="destination-section ptb-100 bg-light">
<div class="container">
<div class="section-title">
<h2>Destinations</h2>
<p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
</div>
<div class="row">
<div class="col-md-8 m-auto">
<div class="filter-group">

<ul id="control" class="list-control">
<li class="active" data-filter="all">All</li>
<li data-filter="1">Budget-Friendly</li>
<li data-filter="2">Royal</li>
<li data-filter="3">Recommended</li>
</ul>
</div>
</div>
</div>
<div class="row filtr-container">
<div class="col-lg-4 col-md-6 filtr-item" data-category="1" data-sort="value">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination1.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Hvar, Croatia</span>
<h3>
<Link href="/destination-details">Piazza Castello</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>8.5</span>
<span>Superb</span>
</div>
<p>
A wonderful little cottage right on the seashore - perfect for exploring.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>3 Days</li>
<li><i class='bx bx-group'></i>160+</li>
<li>$500</li>
 </ul>
</div>
<div class="spacer"></div>
</div>
</div>
<div class="col-lg-4 col-md-6 filtr-item" data-category="2, 1" data-sort="value">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination2.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Santorini, Oia, Greece</span>
<h3>
<Link href="/destination-details">Santorini, Oia, Greece</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>9</span>
<span>Superb</span>
</div>
<p>
A wonderful little cottage right on the seashore - perfect for exploring.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>7 Days</li>
<li><i class='bx bx-group'></i>65+</li>
<li>$2000</li>
</ul>
</div>
<div class="spacer"></div>
</div>
</div>
<div class="col-lg-4 col-md-6 filtr-item" data-category="2" data-sort="value">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination3.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Rialto Bridge, Italy</span>
<h3>
<Link href="/destination-details">Rialto Bridge</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>7.5</span>
<span>Superb</span>
</div>
<p>
A wonderful little cottage right on the seashore - perfect for exploring.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>5 Days</li>
<li><i class='bx bx-group'></i>96+</li>
<li>$2100</li>
</ul>
</div>
<div class="spacer"></div>
</div>
</div>
<div class="col-lg-4 col-md-6 filtr-item" data-category="2, 3" data-sort="value">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination4.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Santorini, Oia, Greece</span>
<h3>
<Link href="/destination-details">Santorini, Oia, Greece</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>9</span>
<span>Superb</span>
</div>
<p>
A wonderful little cottage right on the seashore - perfect for exploring.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>7 Days</li>
<li><i class='bx bx-group'></i>65+</li>
<li>$2000</li>
</ul>
</div>
<div class="spacer"></div>
</div>
</div>
<div class="col-lg-4 col-md-6 filtr-item" data-category="1, 3" data-sort="value">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination5.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Oia, Greece</span>
<h3>
<Link href="/destination-details">Greek Cottage, Greece</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>8.5</span>
<span>Superb</span>
</div>
<p>
A wonderful little cottage right on the seashore - perfect for exploring.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>3 Days</li>
<li><i class='bx bx-group'></i>160+</li>
<li>$1500</li>
</ul>
</div>
<div class="spacer"></div>
</div>
</div>
<div class="col-lg-4 col-md-6 filtr-item" data-category="3, 1" data-sort="value">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/destination6.jpg" alt="Demo Image"/>
</div>
<div class="content">
<span class="location"><i class='bx bx-map'></i>Venice, Italy</span>
<h3>
<Link href="/destination-details">Metropolitan City</Link>
</h3>
<div class="review">
<i class='bx bx-smile'></i>
<span>8.5</span>
<span>Superb</span>
</div>
<p>
A wonderful little cottage right on the seashore - perfect for exploring.
</p>
<hr/>
<ul class="list">
<li><i class='bx bx-time'></i>3 Days</li>
<li><i class='bx bx-group'></i>160+</li>
<li>$1500</li>
</ul>
</div>
<div class="spacer"></div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12 col-md-12">
 <div class="pagination text-center">
<span class="page-numbers current" aria-current="page">1</span>
<Link href="#" class="page-numbers">2</Link>
<Link href="#" class="page-numbers">3</Link>
<Link href="#" class="page-numbers">Next</Link>
</div>
</div>
</div>
</div>
</section>

 </section>   );
}

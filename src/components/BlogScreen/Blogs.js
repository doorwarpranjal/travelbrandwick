import { Link } from "react-router-dom";
//import { ContentfulClient, ContentfulProvider } from 'react-contentful';

import { useState } from "react";

export default function Blog() {
  const [allBlogs,setAllBlogs]=useState([{
    fields:{},sys:{updatedAt:"24"}
  }])
   
  return (
    <section id="heroBlog">
<div class="page-title-area ptb-100">
<div class="container">
<div class="page-title-content">
<h1>News & Blog</h1>
<ul>
<li class="item"><Link to="/">Home</Link></li>
</ul>
</div>
</div>
<div class="bg-image">
<img src="assets/img/page-title-area/blog-style1.jpg" alt="Demo Image"/>
</div>
</div>

<section id="blog" class="blog-section ptb-100 bg-light">
<div class="container">
<div class="section-title">
<h2>Latest News & Blog</h2>
<p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
</div>
<div class="row">
<div class="col-lg-6">
<div class="item-single item-big mb-30">
<div class="image">
<img src="assets/img/blog/blog-lg1.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> {allBlogs[0].sys.updatedAt}</li>
<li><i class='bx bx-tag'></i>Tour, Tourism, Travel</li>
</ul>
<h3>
<a href="blog-details.html">The real voyage does not consist in seeking new landscapes, but in having new eyes.</a>
</h3>
<p>
I have personally participated in many of the programs mentioned on this site. One of the programs is Save Our I have personally in many of the programs mentioned on this site.
</p>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author1.jpg" alt="Demo Image"/>
<span>By - Envy Jeqlin</span>
</div>
</li>
<li>
<a href="blog.html" class="btn-primary">Read More</a>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog1.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Oct 10, 2020</li>
<li><i class='bx bx-tag'></i>Tour</li>
</ul>
<h3>
<a href="blog-details.html">Take only memories, leave only footprints.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author2.jpg" alt="Demo Image"/>
<span>By - David Stiffen</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog2.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Nov 10, 2020</li>
<li><i class='bx bx-tag'></i>Travel</li>
</ul>
<h3>
<a href="blog-details.html">Life is either a daring adventure.</a>
</h3>
<ul class="list">
<li>
<div class="author">
 <img src="assets/img/blog/author3.jpg" alt="Demo Image"/>
<span>By - David Milan</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog3.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Oct 5, 2020</li>
<li><i class='bx bx-tag'></i>Travel</li>
</ul>
<h3>
<a href="blog-details.html">Not all those who wander are lost.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author4.jpg" alt="Demo Image"/>
<span>By - Christina</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog4.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Nov 9, 2020</li>
<li><i class='bx bx-tag'></i>Tour</li>
</ul>
<h3>
<a href="blog-details.html">Mountains is always right destination.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author5.jpg" alt="Demo Image"/>
<span>By - Emma Watson</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="item-single item-big mb-30">
<div class="image">
<img src="assets/img/blog/blog-lg2.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> October 5, 2020</li>
<li><i class='bx bx-tag'></i>Tour, Tourism, Travel</li>
 </ul>
<h3>
<a href="blog-details.html">Travel is fatal to prejudice, bigotry, and narrow mindedness, and many.</a>
</h3>
<p>
I have personally participated in many of the programs mentioned on this site. One of the programs is Save Our I have personally in many of the programs mentioned on this site.
</p>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author1.jpg" alt="Demo Image"/>
<span>By - Envy Jeqlin</span>
</div>
</li>
<li>
<a href="blog.html" class="btn-primary">Read More</a>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog5.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Oct 10, 2020</li>
<li><i class='bx bx-tag'></i>Tour</li>
</ul>
<h3>
<a href="blog-details.html">Like all great travellers, I have seen more.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author2.jpg" alt="Demo Image"/>
<span>By - David Stiffen</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog6.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Nov 10, 2020</li>
<li><i class='bx bx-tag'></i>Travel</li>
</ul>
<h3>
<a href="blog-details.html">If you think adventure is dangerous.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author3.jpg" alt="Demo Image"/>
<span>By - David Milan</span>
 </div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog7.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Oct 5, 2020</li>
<li><i class='bx bx-tag'></i>Travel</li>
</ul>
<h3>
<a href="blog-details.html">Great things never came so easily.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author4.jpg" alt="Demo Image"/>
<span>By - Christina</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog8.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Nov 9, 2020</li>
<li><i class='bx bx-tag'></i>Tour</li>
</ul>
<h3>
<a href="blog-details.html">If you are always trying to be normal.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author5.jpg" alt="Demo Image"/>
<span>By - Emma Watson</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog9.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Oct 10, 2020</li>
<li><i class='bx bx-tag'></i>Tour</li>
</ul>
<h3>
<a href="blog-details.html">Stop worrying about the potholes.</a>
</h3>
 <ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author2.jpg" alt="Demo Image"/>
<span>By - David Stiffen</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog10.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Nov 10, 2020</li>
<li><i class='bx bx-tag'></i>Travel</li>
</ul>
<h3>
<a href="blog-details.html">Fear is only temporary regrets last forever.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author3.jpg" alt="Demo Image"/>
<span>By - David Milan</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog11.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Oct 5, 2020</li>
<li><i class='bx bx-tag'></i>Travel</li>
</ul>
<h3>
<a href="blog-details.html">Life begins at the end of your comfort zone.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author4.jpg" alt="Demo Image"/>
<span>By - Christina</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="item-single mb-30">
<div class="image">
<img src="assets/img/blog/blog12.jpg" alt="Demo Image" />
</div>
<div class="content">
<ul class="info-list">
<li><i class='bx bx-calendar'></i> Oct 5, 2020</li>
<li><i class='bx bx-tag'></i>Travel</li>
</ul>
<h3>
<a href="blog-details.html">Travel makes one thing, you see what.</a>
</h3>
<ul class="list">
<li>
<div class="author">
<img src="assets/img/blog/author5.jpg" alt="Demo Image"/>
<span>By - Emily</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="col-lg-12 col-md-12">
<div class="pagination text-center">
<span class="page-numbers current" aria-current="page">1</span>
<a href="#" class="page-numbers">2</a>
<a href="#" class="page-numbers">3</a>
<a href="#" class="page-numbers">Next</a>
</div>
</div>
</div>
</div>
</section>

 </section>)}
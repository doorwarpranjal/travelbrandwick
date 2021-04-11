import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogbyId } from "../../API";
import parse from "html-react-parser";

export default function Blog() {
  const parsm=useParams()
  const [blog,setBlog]=useState({})
  useEffect(()=>{
    getBlog()
   
   },[])
   const getBlog=async()=>{
    let res=await getBlogbyId(parsm.id)
    if (res.status === 200) {
      console.log(res.data);
      setBlog(res.data)
     // setTripDetails(res.data)
    } else {
    console.log(res.response)
    }
   }
  return (
    <section id="heroBlog">
<div className="page-title-area ">
<div className="container">
<div className="page-title-content">
<h1>Blog Details</h1>
<ul>
<li className="item"><Link to="index.html">Home</Link></li>
</ul>
</div>
</div>
<div className="bg-image">
<img src="assets/img/page-title-area/blog-details.jpg" alt="demo"/>
</div>
</div>

<section className="blog-details-section pt-100 pb-70">
<div className="container">
<div className="section-title">
<h2>Latest News & Blog</h2>
<p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
</div>
<div className="row">
<div className="col-lg-4   " >
<aside className="widget-area blogger-details" >
<div className="widget widget-author ">
<div className="author-img">
<img src="https://res.cloudinary.com/dvu7miswu/image/upload/v1616061752/a2z5guhisnfrxvydcca3.jpg" alt="author" />
</div>
<div className="author-info">
<h3>Travel Brandwick</h3>
<span>Blogger & Youtuber</span>
</div>
<div className="social-link">
<Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
<Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
<Link to="#" target="_blank"><i className='bx bxl-linkedin'></i></Link>
<Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
</div>
</div>

</aside>
</div>

<div className="col-lg-8 col-md-12">
<div className="blog-details-desc mb-30">
<div className="image mb-20">
<img src={blog.thumbImage}alt="image" />
</div>
<ul className="info-list mb-20">
<li><i className='bx bx-tag'></i>Tour, Tourism, Travel</li>
</ul>
<h3>{blog.totle}</h3>
<div className="content ">
{parse(blog.content)}
</div>
<hr/>
</div>
</div>
</div>
</div>
</section>


 </section>)}
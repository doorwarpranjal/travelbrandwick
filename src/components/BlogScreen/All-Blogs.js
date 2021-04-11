import { Link, useParams } from "react-router-dom";
//import { ContentfulClient, ContentfulProvider } from 'react-contentful';

import { useEffect, useState } from "react";
import { getBlogs } from "../../API";
import { Pagination, PaginationItem } from "@material-ui/lab";

export default function Blog() {
  const [blogs,setBlogs]=useState([])
  const [allBlogs,setAllBlogs]=useState([{
    fields:{},sys:{updatedAt:"24"}
  }])
  const parsm=useParams()
  const [n,setN]=useState(0)
  const [pages,setPages]=useState(0)
  
  useEffect(()=>{
    getAllBlog()
    if(parsm.page){
  setN(parsm.page)
    }
    let totalBlog=blogs.length
    console.log(totalBlog/2)
    setPages(parseInt(totalBlog/2))
   },[parsm])
   const getAllBlog=async()=>{
    let res=await getBlogs()
    if (res.status === 200) {
      console.log(res.data);
      setBlogs(res.data)
     // setTripDetails(res.data)
    } else {
    console.log(res.response)
    }
   }

  return (
    <section id="heroBlog">
<div className="page-title-area ptb-100">
<div className="container">
<div className="page-title-content">
<h1>News & Blog</h1>
<ul>
<li className="item"><Link to="/">Home</Link></li>
</ul>
</div>
</div>
<div className="bg-image">
<img src="assets/img/page-title-area/blog-style1.jpg" alt="demo"/>
</div>
</div>

<section id="blog" className="blog-section ptb-100 bg-light">
<div className="container">
<div className="section-title">
<h2>Latest News & Blog</h2>
<p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
</div>
<div className="row">
  {blogs[2*n]?

<div className="col-lg-6">
<div className="item-single item-big mb-30">
<div className="image">
<img src={blogs[2*n].thumbImage} alt="demo" />
</div>
<div className="content">
<ul className="info-list">
<li><i className='bx bx-tag'></i>Tour, Tourism, Travel</li>
</ul>
<h3>
<Link to={{pathname:`blog-details/${blogs[2*n]._id}`}}> {blogs[2*n].title}</Link></h3>
<p>
{blogs[2*n].shortDescription}</p>
<ul className="list">
<li>
<div className="author">
<img src="assets/img/blog/author1.jpg" alt="demo"/>
<span>By - Travel Brandwick</span>
</div>
</li>
<li>
<Link to={{pathname:`blog-details/${blogs[2*n]._id}`}} className="btn-primary">Read More</Link>
</li>
</ul>
</div>
</div>
</div>
  :null}
  <div className="col-lg-6">
<div className="row">
  {blogs.map((item,index)=>{
    if(index===2*n+3 || index===2*n+4 || index===2*n+5 || index===2*n+6){
      return(
        <div className="col-lg-6 col-md-6">
<div className="item-single mb-30">
<div className="image">
<img src={item.thumbImage} alt="demo" />
</div>
<div className="content">
<ul className="info-list">
<li><i className='bx bx-tag'></i>Tour</li>
</ul>
<h3>
<Link to={{pathname:`blog-details/${item._id}`}}>{item.title}</Link>
</h3>
<ul className="list">
<li>
<div className="author">
<img src="assets/img/blog/author2.jpg" alt="demo"/>
<span>By Brandwick</span>
</div>
</li>
</ul>
</div>
</div>
</div>

      )
    }
  })}
</div>
</div>
{blogs[2*n+1]?
<div className="col-lg-6">
<div className="item-single item-big mb-30">
<div className="image">
<img src={blogs[2*n+1].thumbImage} alt="demo" />
</div>
<div className="content">
<ul className="info-list">
<li><i className='bx bx-tag'></i>Tour, Tourism, Travel</li>
 </ul>
<h3>
<Link to={{pathname:`blog-details/${blogs[2*n]._id}`}}>{blogs[2*n+1].title}</Link>
</h3>
<p>
{blogs[2*n+1].shortDescription}</p>
<ul className="list">
<li>
<div className="author">
<img src="assets/img/blog/author1.jpg" alt="demo"/>
<span>By - Envy Jeqlin</span>
</div>
</li>
<li>
<Link to={{pathname:`blog-details/${blogs[2*n]._id}`}}className="btn-primary">Read More</Link>
</li>
</ul>
</div>
</div>
</div>
:null}
<div className="col-lg-6">

<div className="row">
  {blogs.map((item,index)=>{
    if(index===2*n+7 || index===2*n+8 || index===2*n+9 || index===2*n+10){
      return(
        <div className="col-lg-6 col-md-6">
<div className="item-single mb-30">
<div className="image">
<img src={item.thumbImage} alt="demo" />
</div>
<div className="content">
<ul className="info-list">
<li><i className='bx bx-tag'></i>Tour</li>
</ul>
<h3>
<Link to={{pathname:`blog-details/${item._id}`}}>{item.title}</Link>
</h3>
<ul className="list">
<li>
<div className="author">
<img src="assets/img/blog/author2.jpg" alt="demo"/>
<span>By Brandwick</span>
</div>
</li>
</ul>
</div>
</div>
</div>

      )
    }
  })}
  </div>

</div>
<div className="col-lg-12 col-md-12">
<div className="pagination text-center">

<Pagination
              page={n}
              count={pages}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  url
                  to={{pathname:`/${item.page === 0 ? '' : `blog/${item.page}`}`}}
                  {...item}
                />)}
                />
<Link to="/blog/1" className="page-numbers">1</Link>

</div>
</div>
</div>
</div>
</section>

 </section>)}
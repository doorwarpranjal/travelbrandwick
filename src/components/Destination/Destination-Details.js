


import { useState,useEffect } from "react";
import Rating from '@material-ui/lab/Rating';
import { Link, useParams } from "react-router-dom";
import { getTourById,postComment as  addTestimonial} from "../../API";
export default function DestinationDetails() {
  const [tripDetails, setTripDetails] = useState({images:[],includes:[],testimonial:[]});
  const [showReplies,setShowReplies]=useState(false)
  const [isAuth,setIsAuth]=useState(false) 
  const [value, setValue] = useState(2);
  const [postComment,setPostComment]=useState("")

let parsms=useParams()

useEffect(()=>{
getTourByTourId(parsms.tourId)
let token=JSON.parse(localStorage.getItem('recoil-persist'))
if(token){
  setIsAuth(true)
}
},[])
const postMyComment=async (e)=>{
  e.preventDefault()
let res=await addTestimonial(parsms.tourId,{reviewContent:postComment,rating:value})
if (res.status === 200) {
  console.log(res.data);
 // setTripDetails(res.data)
} else {
console.log(res.response)
}
}
const getTourByTourId=
  async (id) => {
    console.log(id)
    let res = await getTourById(id);
    if (res.status === 200) {
        console.log(res.data);
        setTripDetails(res.data)
    } else {
      console.log("empty");
    }
  };

  return (
 <section id="heroDestinationDetails">

<section className="destinations-details-section pt-100 pb-70">
<div className="container">
<div className="section-title">
<h2>{tripDetails.tourPlace}</h2>
</div>
<div className="row">
 <div className="col-lg-8 col-md-12">
<div className="destination-details-desc mb-30">
<div className="row align-items-center">
<div className="col-md-6 col-sm-12" >
<div className="image mb-30 col-md-12" >
<img src={tripDetails.images[0]} style={{width:'280px',height:'330px'}} alt="demo" />
</div>
</div>
<div className="col-md-6 col-sm-12">
<div className="image mb-30">
<img src={tripDetails.images[1]} alt="demo" style={{width:'280px',height:'330px'}} />
</div>
</div>
</div>
<div className="content mb-20">
<h3>{tripDetails.price} Rs</h3>
<p>
{tripDetails.description}</p>

</div>
<div className="row align-items-center">
<div className="col-md-4 col-sm-12">
<div className="image mb-30">
<img src={tripDetails.thumbnailImage} alt="demo" />
</div>
</div>
<div className="col-md-8 col-sm-12 text-center">
<p className="mb-30 ">
{tripDetails.generalInfo}</p>
</div>
</div>
<p className="mb-20">
Lorem ipsum dolor sit amet, participated consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
vel facilisis consectetur adipiscing.
</p>
<div className="info-content">
<h3 className="sub-title">Some Information</h3>
<div className="row">
<div className="col-lg-6 col-md-6">
<div className="content-list">
<i className='bx bx-map-alt'></i>
<h6>{tripDetails.tourPlace}</h6>
</div>
</div>
<div className="col-lg-6 col-md-6">
<div className="content-list">
<i className='bx bx-book-reader'></i>
<h6><span>Language Spoken :</span> English</h6>
</div>
</div>
<div className="col-lg-6 col-md-6">
<div className="content-list">
<i className='bx bx-notepad'></i>
<h6 ><span>Includes :</span>

    </h6>
</div>
</div>
<div className="col-lg-6 col-md-6">
<div className="content-list">
<i className='bx bx-area'></i>
<h6><span>Area (km2) :</span> 1770.80 km2</h6>
</div>
</div>
<div className="col-lg-6 col-md-6">
<div className="content-list">
<i className='bx bx-user'></i>
<h6><span>Per Person :</span> $1200</h6>
</div>
</div>
<div className="col-lg-6 col-md-6">
<div className="content-list">
<i className='bx bx-group'></i>
<h6><span>Guide :</span> Local Guide Available</h6>
</div>
</div>
</div>
</div>
<p className="mb-20">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
vel facilisis consectetur adipiscing.
</p>
<hr/>
<div className="comments-area mb-30">
<h3 className="sub-title">Comments</h3>
{tripDetails.testimonial.map((item,index)=>{
  return (
    <ol className="comment-list" key={index}>
<li className="comment">
<div className="comment-body">
<div className="comment-author">
<img src={"/assets/img/blog/author1.jpg"|| item.reviewBy.profileImg} alt="demo" />
</div>
<div className="comment-content">
<div className="comment-metadata">
<h4 className="name">{item.reviewBy.name}</h4>
</div>
<p>
{item.reviewContent}</p>
<ul className="list">
{/* <li><i className='bx bx-heart'></i>Likes</li> */}
<li onClick={()=>setShowReplies(!showReplies)}><i className='bx bx-reply' ></i>Reply</li>

</ul>
</div>
</div>
<ol className="children">
  {showReplies?
  
  <li className="comment">
<div className="comment-body">
<div className="comment-author">
<img src="/assets/img/blog/author2.jpg" alt="demo" />
</div>
<form>
 <div className="form-group form-inline">
<input name="message" className="form-control" placeholder="Write a reply" required="required"/>
<button type="submit" className="btn-primary">
Send
</button>
</div>
</form>
</div>
</li>
:null}
</ol>
</li>
</ol>

  )
})}
</div>
<div className="comment-reply">
{isAuth?
<form id="commentForm" className="comment-form">
<h3 className="sub-title">Post comment</h3>
<div className="row">
<div className="col-sm-12 col-xs-12">
<Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          max={10}
        />
<div className="input-group">
<div className="input-icon textarea"><i className='bx bx-envelope'></i></div>
<textarea name="message" onChange={(e)=>setPostComment(e.target.value)} className="form-control" placeholder="Write Comment" required="required" rows="6"></textarea>
</div>
</div>
</div>
<button type="submit" className="btn-primary" onClick={postMyComment}>
Post comment
</button>
</form>:<> <div>
<div className='lock'> <h3 className="sub-title " style={{color:'white'}}>Post comment</h3><i class="fas fa-lock"  style={{color:'white'}}> </i>
<h2> <Link to='/sign-in' style={{color:'white'}}> Login</Link></h2>
</div>
</div> </>}
</div>
</div>
</div>
<div className="col-lg-4 col-md-12">
<aside className="widget-area">
<div className="widget widget-search mb-30">
<form className="search-form search-top">
<input type="search" className="form-control" placeholder="Search..." />
<button type="submit" className="btn-text-only">
<i className='bx bx-search-alt'></i>
</button>
</form>
</div>
<div className="widget widget-video mb-30">
<div className="video-image">
<img src="/assets/img/video-bg3.jpg" alt="video" />
</div>
<a href="https://www.youtube.com/watch?v=QSwvg9Rv2EI" className="youtube-popup video-btn">
<i className='bx bx-right-arrow'></i>
</a>
 </div>
<div className="widget widget-article mb-30">
<h3 className="sub-title">Popular Places</h3>
<article className="article-item">
<div className="image">
<img src="/assets/img/destination6.jpg" alt="demo" />
</div>
<div className="content">
<span className="location"><i className='bx bx-map'></i>95 Fleet, London</span>
<h3>
<Link to="destination-details.html">Venice The Dream Place.</Link>
</h3>
<ul className="list">
<li><i className='bx bx-time'></i>3 Days</li>
<li>$1500</li>
</ul>
</div>
</article>
<article className="article-item">
<div className="image">
<img src="/assets/img/destination7.jpg" alt="demo" />
</div>
<div className="content">
<span className="location"><i className='bx bx-map'></i>Venice, Italy</span>
<h3>
<Link to="destination-details.html">Inca Trail Machu Picchu.</Link>
</h3>
<ul className="list">
<li><i className='bx bx-time'></i>5 Days</li>
<li>$1200</li>
</ul>
</div>
</article>
<article className="article-item">
<div className="image">
<img src="/assets/img/destination8.jpg" alt="demo" />
</div>
<div className="content">
<span className="location"><i className='bx bx-map'></i>Oia, Greece</span>
<h3>
<Link to="destination-details.html">The Palace of Versailles.</Link>
</h3>
<ul className="list">
<li><i className='bx bx-time'></i>7 Days</li>
<li>$2000</li>
</ul>
</div>
</article>
</div>
<div className="widget widget-gallery mb-30">
<h3 className="sub-title">Instagram Post</h3>
<ul className="instagram-post">
<li>
<img src="/assets/img/instagram1.jpg" alt="demo"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="/assets/img/instagram2.jpg" alt="demo"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="/assets/img/instagram3.jpg" alt="demo"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
 <img src="/assets/img/instagram4.jpg" alt="demo"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="/assets/img/instagram5.jpg" alt="demo"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="/assets/img/instagram6.jpg" alt="demo"/>
<i className='bx bxl-instagram'></i>
</li>
</ul>
</div>
</aside>
</div>
</div>
</div>
</section>

 </section>)
}

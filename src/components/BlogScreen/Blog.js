import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section id="heroBlog">
<div className="page-title-area ptb-100">
<div className="container">
<div className="page-title-content">
<h1>Blog Details</h1>
<ul>
<li className="item"><Link to="index.html">Home</Link></li>
</ul>
</div>
</div>
<div className="bg-image">
<img src="assets/img/page-title-area/blog-details.jpg" alt="Demo Image"/>
</div>
</div>

<section className="blog-details-section pt-100 pb-70">
<div className="container">
<div className="section-title">
<h2>Latest News & Blog</h2>
<p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
</div>
<div className="row">
<div className="col-lg-8 col-md-12">
<div className="blog-details-desc mb-30">
<div className="image mb-20">
<img src="assets/img/blog/blog-details1.jpg" alt="image" />
</div>
<ul className="info-list mb-20">
<li><i className='bx bx-calendar'></i> October 5, 2020</li>
<li><i className='bx bx-tag'></i>Tour, Tourism, Travel</li>
</ul>
<div className="content mb-20">
<h3>The real voyage does not consist in seeking new landscapes, but in having new eyes.</h3>
<p>
I have personally participated in many of the programs mentioned on this site. One of the programs is Save Our I have personally participated in many of the programs mentioned on this site. One of Save Our I have personally in many of the programs mentioned on this site.I have personally in many of the programs mentioned on this site. One of the programs is Save.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
</p>
</div>
<div className="row align-items-center">
<div className="col-md-4 col-sm-12">
<div className="image mb-30">
<img src="assets/img/blog/blog4.jpg" alt="Demo Image" />
</div>
</div>
<div className="col-md-8 col-sm-12">
<p className="mb-30">
I have personally participated in many of the programs mentioned on this site. One of the programs is Save Our I have personally participated in many of the programs mentioned on this site. One of Save Our I have personally in many of the programs mentioned on this site.
</p>
</div>
</div>
<blockquote className="blockquote">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
vel facilisis .
</p>
</blockquote>
<p className="mb-20">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
vel facilisis consectetur elit.
</p>
<p className="mb-20">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
vel facilisis consectetur elit.
</p>
<div className="row align-items-center">
<div className="col-md-6 col-sm-12">
<div className="image mb-30">
<img src="assets/img/blog/blog5.jpg" alt="Demo Image" />
</div>
</div>
<div className="col-md-6 col-sm-12">
<div className="image mb-30">
<img src="assets/img/blog/blog6.jpg" alt="Demo Image" />
</div>
</div>
</div>
<p className="mb-20">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
vel facilisis consectetur elit.
</p>
<hr/>
<div className="comments-area mb-30">
<h3 className="sub-title">Comments</h3>
<ol className="comment-list">
<li className="comment">
<div className="comment-body">
<div className="comment-author">
<img src="assets/img/blog/author1.jpg" alt="image" />
</div>
<div className="comment-content">
<div className="comment-metadata">
<h4 className="name">Emily</h4>
</div>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A laudantium distinctio ea reprehenderit est laborum!
</p>
<ul className="list">
<li><i className='bx bx-heart'></i>Likes</li>
<li><i className='bx bx-reply'></i>Reply</li>
<li>15 days</li>
</ul>
</div>
</div>
<ol className="children">
<li className="comment">
<div className="comment-body">
<div className="comment-author">
<img src="assets/img/blog/author2.jpg" alt="image" />
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
</ol>
</li>
</ol>
</div>
<div className="comment-reply">
<form id="commentForm" className="comment-form">
<h3 className="sub-title">Post comment</h3>
 <div className="row">
<div className="col-sm-12 col-md-6 col-xs-12">
<div className="input-group">
<div className="input-icon"><i className='bx bx-user'></i></div>
<input type="text" className="form-control" name="name" placeholder="Name" required="required" />
</div>
</div>
<div className="col-sm-12 col-md-6 col-xs-12">
<div className="input-group">
<div className="input-icon"><i className='bx bx-at'></i></div>
<input type="email" className="form-control" name="email" placeholder="Email" required="required" />
</div>
</div>
<div className="col-sm-12 col-xs-12">
<div className="input-group">
<div className="input-icon textarea"><i className='bx bx-envelope'></i></div>
<textarea name="message" className="form-control" placeholder="Write Comment" required="required" rows="6"></textarea>
</div>
</div>
</div>
<button type="submit" className="btn-primary">
Post comment
</button>
</form>
</div>
</div>
</div>
<div className="col-lg-4 col-md-12">
<aside className="widget-area">
<div className="widget widget-author mb-30">
<div className="author-img">
<img src="assets/img/blog/author1.jpg" alt="author" />
</div>
<div className="author-info">
<h3>Emily</h3>
<span>Blogger & Youtuber</span>
</div>
<div className="social-link">
<Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
<Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
<Link to="#" target="_blank"><i className='bx bxl-linkedin'></i></Link>
<Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
</div>
</div>
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
<img src="assets/img/video-bg3.jpg" alt="video" />
</div>
<Link to="https://www.youtube.com/watch?v=QSwvg9Rv2EI" className="youtube-popup video-btn">
<i className='bx bx-right-arrow'></i>
</Link>
</div>
<div className="widget widget-article mb-30">
<h3 className="sub-title">Popular Blog</h3>
<article className="article-item">
<div className="image">
<img src="assets/img/blog/blog1.jpg" alt="Demo Image" />
</div>
<div className="content">
<h3>
<Link to="blog-details.html">The real voyage does not consist in.</Link>
</h3>
<ul className="list">
<li>
<div className="author">
<img src="assets/img/blog/author1.jpg" alt="Demo Image"/>
<span>By - Envy Jeqlin</span>
</div>
</li>
</ul>
</div>
</article>
<article className="article-item">
<div className="image">
<img src="assets/img/blog/blog2.jpg" alt="Demo Image" />
</div>
<div className="content">
<h3>
<Link to="blog-details.html">Mountains is always right destination</Link>
</h3>
<ul className="list">
<li>
<div className="author">
<img src="assets/img/blog/author3.jpg" alt="Demo Image"/>
<span>By - David Milan</span>
</div>
</li>
</ul>
</div>
</article>
<article className="article-item">
<div className="image">
<img src="assets/img/blog/blog3.jpg" alt="Demo Image" />
</div>
<div className="content">
<h3>
<Link to="blog-details.html">Traveling is always right destination</Link>
</h3>
<ul className="list">
<li>
<div className="author">
<img src="assets/img/blog/author4.jpg" alt="Demo Image"/>
<span>By - Christina</span>
</div>
</li>
</ul>
</div>
</article>
</div>
<div className="widget widget-gallery mb-30">
<h3 className="sub-title">Instagram Post</h3>
<ul className="instagram-post">
<li>
<img src="assets/img/instagram1.jpg" alt="Demo Image"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="assets/img/instagram2.jpg" alt="Demo Image"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="assets/img/instagram3.jpg" alt="Demo Image"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="assets/img/instagram4.jpg" alt="Demo Image"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="assets/img/instagram5.jpg" alt="Demo Image"/>
<i className='bx bxl-instagram'></i>
</li>
<li>
<img src="assets/img/instagram6.jpg" alt="Demo Image"/>
<i className='bx bxl-instagram'></i>
</li>
</ul>
</div>
</aside>
</div>
</div>
</div>
</section>


 </section>)}
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogbyId } from "../../API";
import parse from "html-react-parser";

export default function Blog() {
  const parsm = useParams()
  const [blog, setBlog] = useState({})


  useEffect(() => {
    getBlog()

  }, [1])



  const getBlog = async () => {
    let res = await getBlogbyId(parsm.id)
    if (res.status === 200) {
      console.log(res.data);
      setBlog(res.data)
      //  console.log(parse(blog.content))
      // setTripDetails(res.data)
    } else {
      console.log(res.response)
    }
  }




  return (
    <section id="">
      <div className="page-title-area ptb-100">
        <div className="container">
          <div className="page-title-content">
            <h1>Blogs</h1>
            <ul>
              <li className="item">
                <Link to="/">Home</Link>
              </li>
             blogs
            </ul>
          </div>
        </div>
        <div className="bg-image">
          <img src="assets/img/page-title-area/destinations.jpg" alt="demo" />
        </div>
      </div>
      <section className="blog-details-section pt-100 pb-70">
        <div className="container">

          <div className="row">
            <div className="col-lg-4   " >
              <aside className="widget-area blogger-details" >
                <div className="widget widget-author ">
                  <div className="author-img">
                    <img src="https://res.cloudinary.com/dvu7miswu/image/upload/v1616061752/a2z5guhisnfrxvydcca3.jpg" alt="author" />
                  </div>
                  <div className="author-info">
                    <h3>the Mountmonks</h3>
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
                  <img src={blog.thumbImage} alt="image" />
                </div>
                <ul className="info-list mb-20">
                  <li><i className='bx bx-tag'></i>Tour, Tourism, Travel</li>
                </ul>
                <h3>{blog.totle}</h3>
                <div className="content ">
                  {blog.content ?
                    parse(blog.content)
                    : null}
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>


    </section>)
}
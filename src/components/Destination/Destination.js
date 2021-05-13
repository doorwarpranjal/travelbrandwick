import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllTours } from "../../API";
import {Autocomplete, Pagination} from '@material-ui/lab'
import Card from "../Card/Card";
import { TextField } from "@material-ui/core";
export default function Destination() {
  //  const [isAuth, setIsAuth] = useState(true);
  const [keyValues, setkeyValues] = useState([]);
  const [allTours, setAllTours] = useState([]);
  const [pageValue,setPageValue]=useState(0)
  const [pageNumber,setPageNumber]=useState(1)
  const [searchTerm,setsearchTerm]=useState("")
  useEffect(() => {
    getTours();
    // getTopTours();
  }, []);
  const getTours = async () => {
    let res = await getAllTours();
    if (res.status === 200) {
      //  console.log(res.data);
      setAllTours(res.data);
     
      let array=[]
      res.data.forEach(element => {
        if(element.tourPlace){

          array.push(element.tourPlace)
        }

      });
      setkeyValues(array)
      //console.log(allTours,pageValue,pageNo);
    } else {
      console.log("empty");
    }
  };
  
  return (
    <section id="heroDestination">
      <div className="page-title-area ptb-100">
        <div className="container">
          <div className="page-title-content">
            <h1>Destinations</h1>
            <ul>
              <li className="item">
                <Link to="/index">Home</Link>
              </li>
              <li className="item">
                <Link to="/destinations">
                  <i className="bx bx-chevrons-right"></i>Destinations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-image">
          <img src="assets/img/page-title-area/destinations.jpg" alt="demo" />
        </div>
      </div>

      <section
        id="top-destination"
        className="top-destination-section pt-100 pb-70 bg-light"
      >
        <div className="container">
           <div className="section-title">
          <h2>Tours</h2>
          <div className="container">
          <div className="search-form">
            <form id="searchForm">
              <div className="row align-items-center m-auto">
              <div className="col-1 col-md-3 ">
</div>
                <div className="col-lg-10 m-auto">
<TextField id="outlined-basic" style={{width:'100%'}} label="Search" variant="outlined" onChange={(e)=>setsearchTerm(e.target.value)} />
            
              </div>
         
             
              </div>
            </form>
          </div>
        </div> 
    
            {/* <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p> */}
          </div> 
          <div className="row">
            {
            allTours &&
            allTours
              .filter((item, index) => {
                if (
                  item.tourPlace
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ){
                  return item
                }
                else if (
                    item.location
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                      ){

                        return item;
                      }
                    else  if(item.keywords!==[]){
                      let iteminit;
                        item.keywords.map(element=>{
                             if(element.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                           //  console.log(true,element,item.keywords)
                              iteminit=item
                             }
                        })
                        return iteminit
                      }
                    
                
              })
            .map((item, index) => {
              
                return (
                  <div className="col-lg-4 col-md-6 mt-4" key={index}>
                  <Card cardItem={item} />
                    </div>   );
              
            })}{" "}
          </div>
        </div>
      </section>

    </section>
  );
}

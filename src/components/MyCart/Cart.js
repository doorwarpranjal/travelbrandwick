import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllTours, getMyProfile } from "../../API";
import {Autocomplete, Pagination} from '@material-ui/lab'
import Card from "../Card/OrderCard";
import { TextField } from "@material-ui/core";

export default function Destination() {
  //  const [isAuth, setIsAuth] = useState(true);
  const localData = JSON.parse(localStorage.getItem('recoil-persist'))
  const [keyValues, setkeyValues] = useState([]);
  const [allTours, setAllTours] = useState([]);
  const [pageValue,setPageValue]=useState(0)
  const [pageNumber,setPageNumber]=useState(1)
  useEffect(() => {
  //  getTours();
    console.log(localData)
    getProfile()
    // getTopTours();
  }, []);
  const getProfile = async () => {
    let res = await getMyProfile();
    if (res.status === 200) {
       console.log(res.data);
     setAllTours(res.data.myOrders)
    } else {
      console.log("empty");
    }
  };
  
  
  return (
    <section id="heroDestination">
      

      <section
        id="top-destination"
        className="top-destination-section pt-100 pb-70 bg-light"
      >
        <div className="container">
           <div className="section-title">
          <h2>History</h2>
          <div className="container">
          {/* <div className="search-form">
            <form id="searchForm">
              <div className="row align-items-center m-auto">
              <div className="col-1 col-md-3 ">
</div>
                <div className="col-lg-7 ">


                  <Autocomplete
        style={{width:'100%'}}
        
        id="fixed-tags-demo"
        options={keyValues}
        // onChange={addMembersToTeam}
        //  getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
          {...params}
          className=' choosing-option-autocomplete'
          variant="standard"
          label="Filter"
          placeholder="Filter"
          
          />
          )}
          />    </div>
         
             
              </div>
            </form>
          </div> */}
        </div> 
    
            {/* <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p> */}
          </div> 
          <div className="row">
              {allTours.length<=0?<h3> Looks Like Your My Order is empty</h3>:
            allTours.map((item, index) => {
            
                  console.log(item)
                  //console.log(item)
                    return (
                        <div className="col-lg-4 col-md-6 mt-4" key={index}>
                  <Card cardItem={item.orderId} />
                    </div>   );
              
            })}{" "}
        
          </div>
        </div>
      </section>

    </section>
  );
}

import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
import { navigationContext } from "./app";
import Link from "next/link";
import navValues from "../helpers/navValues";

const Realtor = () => {
  const { param: realtor } = useContext(navigationContext);
  const { navigate } = useContext(navigationContext);
  
  return (
    <div className="row">      
      <div className="col-6">
        <div className="row mt-2">
        <div className="col-12" onClick={() => navigate(navValues.home)}>Return to Listings</div>
        
          </div>
          <div className="row">
            <img
                className="img-fluid"
                src={
                realtor.photo ? `./realtorImages/${realtor.photo}.jpg` : defaultPhoto
                }
                alt="Realtor pic"
            />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{realtor.name}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{realtor.phone}</h3>
        </div>
        <div className="row">
          <h3 className="col-12">{realtor.email}</h3>
        </div>               
      </div>      
    </div>
    
  );
};

export default Realtor;

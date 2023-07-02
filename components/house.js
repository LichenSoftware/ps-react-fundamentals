import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
import { navigationContext } from "./app";
import BidList from "./bidList";
import useBids from "../hooks/useBids";
import loadingStatus from "../helpers/loadingStatus";
import AddBid from "./addBid";
import RealtorList from "./realtorList";
import Link from "next/link";
import navValues from "../helpers/navValues";

const House = () => {
  const { param: house } = useContext(navigationContext);
  const { bids, loadingState, addBid } = useBids(house.id);
  const { navigate } = useContext(navigationContext);

  if (loadingState !== loadingStatus.loaded)
    return <loadingIndicator loadingState={loadingState} />;

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
              house.photo ? `./houseImages/${house.photo}.jpeg` : defaultPhoto
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
        <BidList bids={bids} />
        <AddBid house={house} addBid={addBid} />
      </div>
      <div className="row">
        <div className="col-12 mt-3">
          <RealtorList />
        </div>            
      </div>
    </div>
    
  );
};

export default House;

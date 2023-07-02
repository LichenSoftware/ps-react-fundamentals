import navValues from "../helpers/navValues";
import House from "./house";
import HouseList from "./houseList";
import Realtor from "./realtor";

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <House />;
    case navValues.realtor:
      return <Realtor />;
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavLocation} found
        </h3>
      );
  }
};

export default ComponentPicker;

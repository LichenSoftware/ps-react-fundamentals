import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import navValues from "../helpers/navValues";
import { navigationContext } from "./app";

const RealtorRow = ({ realtor }) => {
  const { navigate } = useContext(navigationContext);
  return (
    <tr onClick={() => navigate(navValues.realtor, realtor)}>
      <td>{realtor.name}</td>
      <td>{realtor.phone}</td>
      <td>{realtor.email}</td>
    </tr>
  );
};
   
export default RealtorRow;
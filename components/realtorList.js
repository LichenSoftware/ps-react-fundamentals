
import loadingStatus from "../helpers/loadingStatus";
import useRealtors from "../hooks/useRealtors";
import RealtorRow from "./realtorRow";
import LoadingIndicator from "./loadingIndicator";

const RealtorList = () => { 
  const { realtors, setRealtors, loadingState } = useRealtors();

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  const addRealtor = () => {
    setRealtors([
      ...realtors,
      {
        "id": 1,
        "name": "George Washington",
        "phone": "258.745.1594",
        "email": "GeorgeWashington@GeorgeWashingtonHomes.com",
        "photo": "297667"
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Realtors
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {realtors.map((r) => (
            <RealtorRow key={r.id} realtor={r} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addRealtor}>
        Add
      </button>
    </>
  );
};

export default RealtorList;

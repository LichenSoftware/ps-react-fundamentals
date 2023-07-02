import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

const useRealtors = () => {
  const [realtors, setRealtors] = useState([]);
  const { get, loadingState } = useGetRequest("/api/realtors");

  useEffect(() => {
    const fetchRealtors = async () => {
      const realtors = await get();
      setRealtors(realtors);
    };
    fetchRealtors();
  }, [get]);

  return { realtors, setRealtors, loadingState };
};

export default useRealtors;
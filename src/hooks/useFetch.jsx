import { useState, useEffect } from "react";
import api from "../services/api";

export function useFetch() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    api.get("cars").then(({ data }) => {
      setCarList(data);
    });
  }, []);

  return carList;
}

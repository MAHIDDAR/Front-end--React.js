import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, name: "Burger", price: 120 },
        { id: 2, name: "Pizza", price: 250 }
      ]);
      setLoading(false);
    }, 1000);
  }, [url]);

  return { data, loading };
};

export default useFetch;
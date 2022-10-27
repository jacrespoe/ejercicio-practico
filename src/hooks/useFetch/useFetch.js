import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setData(data.data);
        } else {
          setError({
            msg: "Ha ocurrido un error, porfavor intente nuevamente.",
          });
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

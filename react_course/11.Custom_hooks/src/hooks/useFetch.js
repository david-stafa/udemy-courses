import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue, errorMsg) {
  // state belongs to a component where the custom hook is called
  const [isFetching, setIsFetching] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || errorMsg || "Failed to fetch data.",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFn, errorMsg]);

  return { isFetching, fetchedData, error, setFetchedData };
}

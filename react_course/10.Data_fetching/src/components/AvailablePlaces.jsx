import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvaiablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [avaiablePlaces, setAvaiablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvaiablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          const sortedPlaces = sortPlacesByDistance(places, lat, long);
          // should stay here becouse we know the data are set
          setAvaiablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        console.log(error);
        setError({
          message:
            error.message || "Could not fetch palces, please try again later",
        });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={avaiablePlaces}
      isLoading={isFetching}
      loadingText="fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

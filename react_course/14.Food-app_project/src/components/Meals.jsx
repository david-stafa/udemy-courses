import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <Error message={error} title="Failed to fecth meals." />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          name={meal.name}
          description={meal.description}
          image={meal.image}
          price={meal.price}
          id={meal.id}
        />
      ))}
    </ul>
  );
}

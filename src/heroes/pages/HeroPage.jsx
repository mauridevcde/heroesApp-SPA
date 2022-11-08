import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);
  
  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/${id}.jpg`} alt={hero.id}  className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter Ego:</b> {hero.alter_ego} 
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher} 
            </li>
            <li className="list-group-item">
              <b>First Appareance:</b> {hero.first_appearance} 
            </li>
        </ul>
      </div>
    </div>
  );
};

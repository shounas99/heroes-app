import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Hero = () => {

  const navigate = useNavigate()
  
  const { id } = useParams() //get params
  const hero = getHeroById( id )
  const onNavigateBack = () => {
    return navigate(-1)
  }
  
  if(!hero){
    return <Navigate to="/marvel"/>
  }



  return (
    <div className="row mt-5">
      <div className="col-4">
          <img 
            src={`/assets/heroes/${ id }.jpg`} 
            alt={ hero.superhero} 
            className="img-thumbnail"
          />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-groupo list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego }</li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
          <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance }</li>
        </ul>

        <h5 className="mt-3">{ hero.characters }</h5>
        <p>{ hero.characters }</p>

        <button
        onClick={ onNavigateBack }
        className="btn btn-outline-primary">Back</button>
      
      </div>
    </div>
  )
}

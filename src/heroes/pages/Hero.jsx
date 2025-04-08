import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Hero = () => {

  const { id } = useParams() //get params
  const hero = getHeroById( id )
  
  if(!hero){
    return <Navigate to="/marvel"/>
  }


  return (
    <div>{ hero.superhero }</div>
  )
}

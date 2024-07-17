



import { useParams } from 'react-router-dom'
import { menu_url } from '../utils/constants'
import useRestaurantMenu from '../utils/useRestuarantMenu'

const RestaurantMenu = () => {

 const {id}= useParams()




  //resMenu=null

 const resMenu= useRestaurantMenu(id)
 

  if (resMenu==null) return <h1>Menu Loading</h1>

  const {name,costForTwoMessage} = resMenu.data.cards[2].card.card.info



  return (
    <div>
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>

    </div>
  )
}

export default RestaurantMenu
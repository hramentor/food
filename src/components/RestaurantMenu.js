



import { useParams } from 'react-router-dom'
import { menu_url } from '../utils/constants'
import useRestaurantMenu from '../utils/useRestuarantMenu'
import RestaurantCate from './RestaurantCate'

const RestaurantMenu = () => {

 const {id}= useParams()




  //resMenu=null

 const resMenu= useRestaurantMenu(id)
 

  if (resMenu==null) return <h1>Menu Loading</h1>

  const {name,costForTwoMessage} = resMenu.data.cards[2].card.card.info


  const cate = resMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(each=> each.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(cate)

  return (
    <div className=' text-center'>
      <h1 className='font-bold my-5 text-2xl'>{name}</h1>
      <h3 className='font-bold'>{costForTwoMessage}</h3>

      {
        cate.map(each=> <RestaurantCate item={each}/>)
      }

    </div>
  )
}

export default RestaurantMenu
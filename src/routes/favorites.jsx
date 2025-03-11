import { createFileRoute } from '@tanstack/react-router'
import CardComponent from '../components/cardComponent'

export const Route = createFileRoute('/favorites')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col'>

      <h1 className='text-white ml-5 mt-5 text-3xl'>Favorites</h1>
 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 ">
      <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false' imdb='5.0'/>
      <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='false'imdb='5.0'/>
      <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false' imdb='5.0'/>
      <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='false'/>
      <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false'/>
      <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false' imdb='5.0'/>
      <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='false'imdb='5.0'/>
      <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false' imdb='5.0'/>
      <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='false'/>
      <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false'/>
      
      </div>
  </div>
  

}

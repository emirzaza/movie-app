import { createFileRoute } from '@tanstack/react-router'
import CardComponent from '../components/cardComponent'

export const Route = createFileRoute('/favorites')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">

  <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false' imdb='5.0'/>
  <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='false'imdb='5.0'/>
  <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false' imdb='5.0'/>
  <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='false'/>
  <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='false'/>

  </div>
}

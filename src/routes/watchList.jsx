import { createFileRoute } from '@tanstack/react-router'
import CardComponent from '../components/cardComponent'


export const Route = createFileRoute('/watchList')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
      
    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 ">
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true' imdb='5.0'/>
        <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='true'imdb='5.0'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true' imdb='5.0'/>
        <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images2.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
        <CardComponent imgurl={'./images.jpg'} name='joker' types='action, comedy' liked='true'/>
      </div>

      
      
      
      
    );
  }

  

  
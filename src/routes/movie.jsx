import { createFileRoute } from '@tanstack/react-router'
import MovieDetails from '../components/movieDetails'
import PersonCard from '../components/personCard'
import SliderActor from '../components/sliderActor'

export const Route = createFileRoute('/person')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(47,45,82,1), rgba(47,45,82,0.6)), url('/image1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className='overflow-hidden'
    >
      <MovieDetails imgurl={'./image1.jpg'} />
      <SliderActor />
    </div>
  );
}


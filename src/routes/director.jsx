import { createFileRoute } from '@tanstack/react-router'
import SliderMovie from '../components/sliderMovie';
import PersonDetails from '../components/personDetails';
import SliderActor from '../components/sliderActor';


export const Route = createFileRoute('/director')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(47,45,82,1), rgba(47,45,82,0.6)), url('/images2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className='overflow-hidden'
    >
      <PersonDetails imgurl={'./image1.jpg'} name='scarlet johansson' country={'usa'} gender={'male'}  year={'24'} />
      <h1 className='text-white ml-10 mt-5 text-3xl'>MOVIES</h1>
      <SliderMovie />
      <h1 className='text-white ml-10 mt-5 text-3xl'>RELATED ACTORS</h1>
      <SliderActor ></SliderActor>
    </div>
  );
}

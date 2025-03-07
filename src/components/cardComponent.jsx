import { IconPlayerPlayFilled, IconHeartFilled} from "@tabler/icons-react";

const HEARTH_STYLE = {
  true: 'text-white hover:text-red-300',
  false: 'text-[#F93E61] hover:text-gray-300'
}

function CardComponent({ imgurl, imdb, name, types, min, liked, likeStatusChanged }) {

  function handleClick() {
    likeStatusChanged(!liked)
  }

    return ( 
      <div className="flex m-3">
        <div className=" relative bg-cover bg-center w-70 h-80 min-w-35 min-h-40 rounded-xl"style={{ backgroundImage: `url(${imgurl})` }}>
          <div className="flex justify-between"> 
            <div className="w-8 h-24 ml-2 mt-2 m-w-auto" >
                <h1 className="mb-2 flex justify-center bg-black text-yellow-500 border-2 border-yellow-500 rounded-md">HD</h1>
                <h1 className="flex justify-center bg-yellow-500 rounded-md border-2 border-yellow-500">{imdb}</h1>
            </div>
            <div>
              <IconHeartFilled
                onClick={handleClick}
                className={`mr-2 mt-2 w-8 h-8 rounded-3xl bg-black/30 p-1 ${HEARTH_STYLE[liked]}`}
              />
            </div>
          </div>

          <div className="flex justify-between items-center pl-3 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm w-9/10 h-24 rounded-lg hover:">
              <div>
                <p className="text-white">{name}</p>
                <p className="text-white/50">{types}</p>
                <p className="text-white/50">{min}</p>
              </div>

              <div>
              <IconPlayerPlayFilled className=" sm:scale 50 md:scale-100 lg:scale-125 mr-4 mt-2 ml-2 text-white w-8 h-8 rounded-3xl bg-black/30 p-1 hover:text-gray-200" />
              </div>

          </div>
        </div>
      </div>
      
    )
  }
  
  export default CardComponent
  
 
 
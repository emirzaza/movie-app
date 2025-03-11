function MovieCard({name,  imgurl}) {
  

    return (
      <div className="bg-[#211F41] min-w-48 max-w-48 h-60 p-4 rounded-lg  m-2 relative bg-cover bg-center " style={{ backgroundImage: `url(${imgurl})` }}>
          
          <div className="flex justify-center items-center pl-3 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm w-9/10 h-10 rounded-lg hover:">
              <div >
                <p className="text-white">{name}</p>
              </div>

          </div>
        </div>
    );
  }
  
  export default MovieCard;
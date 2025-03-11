function PersonCard({name, character, imgurl}) {
  

  return (
    <div className="bg-[#211F41] min-w-31 max-w-32 p-4 rounded-lg  m-2 ">
     
        
          <div className="flex flex-col items-center text-center text-white">
            <img 
              src={imgurl} 
              alt={name}
              className=" rounded-full border-2 border-gray-400 "
            />
            <p className="text-sm font-semibold ">{name}</p>
            <p className="text-xs text-gray-300">{character}</p>
          </div>
        
      </div>
  );
}

export default PersonCard;
function PersonCard() {
  const person = [
    {
      name: "Scarlett Johansson",
      character: "Natasha Romanoff (Black Widow)",
      image: "/image1.jpg", 
    },
  ];

  return (
    <div className="bg-[#211F41] min-w-48 p-4 rounded-lg  mt-10 m-2 ">
      <h2 className="text-white text-xl font-bold mb-4">Cast</h2>
        {person.map((actor, index) => (
          <div key={index} className="flex flex-col items-center text-center text-white">
            <img 
              src={actor.image} 
              alt={actor.name}
              className=" rounded-full border-2 border-gray-400 "
            />
            <p className="text-sm font-semibold ">{actor.name}</p>
            <p className="text-xs text-gray-300">{actor.character}</p>
          </div>
        ))}
      </div>
  );
}

export default PersonCard;
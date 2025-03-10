function MovieDetails() {
 
    return (
      <div className="flex flex-row mt-5">
        <div>
            <img src='./images.jpg' className="w-80 h-100 rounded-2xl ml-5"/>
        </div>
        <div className="flex flex-col ">
            <div className="flex justify-between">
                <h1 className="text-white ml-10 text-3xl ">Squid Game 2 </h1>
                <h1 className="flex justify-center items-center font-bold sm:w-20 md:w-25 lg:w-30  mr-5 bg-yellow-500 rounded-md border-2 border-yellow-500">IMDB 8.0</h1>
            </div>
            <div className="flex flex-row m-10 font-3xl">
                <div className="flex flex-col">
                    <div className="flex flew-col">
                        <h1 className="text-red-600">Genre:</h1>
                        <p className="text-white ml-3">Action, comedy</p>
                    </div>
                    <div className="flex flew-col">
                        <h1 className="text-red-600">Country:</h1>
                        <p className="text-white ml-3">USA</p>
                    </div>
                    <div className="flex flew-col">
                        <h1 className="text-red-600">Year:</h1>
                        <p className="text-white ml-3">2024</p>
                    </div>
                    
    
                </div>
                <div className="flex flex-col text-red-600 ml-10">
                <div className="flex flew-col">
                        <h1 className="text-red-600">Voiceover:</h1>
                        <p className="text-white ml-3">Turkish, German</p>
                    </div>
                    <div className="flex flew-col">
                        <h1 className="text-red-600">Durations:</h1>
                        <p className="text-white ml-3">114min</p>
                    </div>
                    <div className="flex flew-col">
                        <h1 className="text-red-600">Quality:</h1>
                        <p className="text-white ml-3">HD-SD</p>
                    </div>
                </div>
            </div>
            <div className="text-white ml-10">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, nihil tempora porro vitae explicabo eius perspiciatis quibusdam minima, modi totam voluptas quaerat, itaque temporibus ullam dolores facere quos est beatae!</p>
            </div>
        </div>
      </div>
     
    )
  }
 
  export default MovieDetails
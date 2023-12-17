const Home = () => {
    return (
    <div className=' flex  flex-col items-center z-10 '>
          <h1 className="relative  mb-6 text-6xl md:text-8xl  font-bold tracking-tight bg-gradient-to-b from-black to-[#444] bg-clip-text text-transparent dark:from-white dark:to-[#ccc] z-20 ">
             Sleeve 
              <span className="font-light m-3">
                  2
              </span>
                </h1>
          <p className=" relative  text-2xl  text-white sm:text-5xl font-bold max-w-[20ch] lg:max-w-full mb-8">
              The ultimate music accessory for your Mac.
                </p>
                <p className="text-lg sm:text-2xl max-w-3xl dark:text-white/80 ">
      Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in
      <span className="ml-1 whitespace-nowrap">
        <span className="relative top-[2px] mr-1 sm:mr-0 sm:top-[4px] inline-flex w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]">
                <img src="https://replay.software/sleeve/images/AppMusicDark.png"
                      alt="Image of an app icon"
                             width="24" height="24"
                            />
        </span>
        Apple Music
      </span>,
      <span className="ml-1 whitespace-nowrap">
        <span className="relative top-[2px] mr-1 sm:mr-0 sm:top-[4px] inline-flex w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]">
                            <img
                                src="https://replay.software/sleeve/images/AppSpotifyDark.png"
                                alt="Image of an app icon"
                                width="24" height="24"
                            />
        </span>
        Spotify
      </span>, and
      <span className="ml-1 whitespace-nowrap">
        <span className="relative top-[2px] mr-1 sm:mr-0 sm:top-[4px] inline-flex w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]">
                            <img
                                src="https://replay.software/sleeve/images/AppDopplerDark.png"
                                alt="Image of an app icon"
                                width="24" height="24"
                            />
        </span>
        Doppler.
      </span>
    </p>
       </div>
 
  )
}
export default Home

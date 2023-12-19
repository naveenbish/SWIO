const Scrollableimgsec = () => {
  return (
    <div className="relative hidden lg:flex flex-shrink-0 flex-col lg:w-1/2">
  <div className="sticky top-0 inset-x-0 flex flex-col w-full h-screen z-20">
    <div className="relative flex flex-col h-full">
      <div className="bg-white dark:bg-[#111] h-16"></div>
      <div className="relative flex flex-col h-full justify-between text-white dark:text-[#111]">
        <div className="flex justify-between">
          <svg viewBox="0 0 20 20" width="20" height="20" className="rotate-0">
            <path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="currentColor"></path>
          </svg>
          <svg viewBox="0 0 20 20"  width="20" height="20" className="rotate-90">
            <path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="flex justify-between">
          <svg viewBox="0 0 20 20"  width="20" height="20" className="rotate-[270deg]">
            <path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="currentColor"></path>
          </svg>
          <svg viewBox="0 0 20 20" width="20" height="20" className="rotate-180">
            <path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="absolute inset-0 shadow-outline dark:shadow-outline-bright rounded-2xl"></div>
      </div>
      <div className="bg-white dark:bg-[#111] h-16"></div>
    </div>
  </div>
  <div className="absolute inset-0 z-0">
    <div className="sticky top-0 w-full h-screen bg-[#80A73C] sonoma-wallpaper-banner z-0"></div>
  </div>
</div>

  )
}

export default Scrollableimgsec

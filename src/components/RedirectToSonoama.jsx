

const RedirectToSonoama = () => {
  return (
    <div className=" flex flex-auto justify-center">
     <p className="pt-6">
        <a className="flex items-center max-w-[540px] lg:max-w-full text-gray-700 dark:text-white/80 bg-gray-50 dark:bg-transparent hover:bg-white dark:hover:bg-white/5 shadow-outline dark:shadow-outline-superbright px-4 py-3 gap-3 rounded-3xl transition"
          href="/updates/sleeve-2-2-for-sonoma">
          <img src="https://replay.software/sleeve/images/Sonoma.png"
            width="40" height="40" alt="macOS Sonoma Icon"
            className="-m-3 -ml-2.5 -mr-1.5">
          </img>
          <span className="sm:hidden">Updated for macOS Sonoma
        </span>
          <span className="hidden sm:inline-block">
            <span className="hidden sm:inline-block space-x-0">
              Now updated
            </span>
            <span className="sm:hidden">
              Updated
            </span>
            with
            <b className="font-medium">support for macOS Sonoma</b>.
            
            <span className="hidden lg:inline">
              See whats new in Sleeve 2.2
      </span>
      </span>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            className="text-gray-400 flex-shrink-0">
            <path d="M10 .25C4.615.25.25 4.615.25 10a9.75 9.75 0 0 0 19.5 0c0-5.385-4.365-9.75-9.75-9.75Zm0 1.5a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5Z" fill="currentColor">
        </path>
            <path d="m10.75 13 3-3m0 0-3-3m3 3h-7.5" stroke="currentColor">
            </path>
          </svg>
      </a>
      </p>  
    </div>
  )
}

export default RedirectToSonoama

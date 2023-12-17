import { ArrowRightCircle } from 'lucide-react';
const RedirectToSonoama = () => {
  return (
    <div className=" flex flex-auto justify-center mt-[-65px]">
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
          <ArrowRightCircle />
      </a>
      </p>  
    </div>
  )
}

export default RedirectToSonoama

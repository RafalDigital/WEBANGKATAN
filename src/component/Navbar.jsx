import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  // Mobile
   const [isOpen, setIsOpen] = useState(false);
  
  //  Settings
   const [isSettings, setIsSettings] = useState(false);

   const [isDark, setIsDark] = useState(false)

    function isDarkHandler() {
        setIsDark((o) => !o)
    }

  window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  })

  function isOpenHandler() {
    setIsOpen((o) => !o);
  }

  function isSettingsHandler() {
    setIsSettings((o) => !o);
  }

  useEffect(() => {
    if (isOpen) {
      setIsSettings(false);
    }
  }, [isOpen]); 

  useEffect(() => {
    if (isSettings) {
      setIsOpen(false);
    }
  }, [isSettings]);

  function blurHandler() {
    setIsOpen(false)
    setIsSettings(false);
  }

  return (
    <>
      <nav className={`flex fixed right-0 left-0 top-0 justify-between py-2 items-center z-50 border-b-[#0056FE] select-none ${isScrolled ? 'bg-white border-b-1 ' : ''} min-md:duration-300 ${isOpen || isSettings ? 'bg-white border-b-1 ' : ''}`}>
        <div className="nav-logo ml-8">
          <a className="text-3xl text-[#0056FE]">ANGKATAN 11</a>
        </div>
        <div className="nav-links">
          <ul className="flex gap-1.5 -ml-32 max-lg:gap-0.5 max-lg:-ml-12 max-md:hidden">
            <li className="px-3.5 py-3 w-24 text-center max-lg:px-1.5"><a href='#Hero' className={`text-md ${isScrolled || isSettings ? 'text-[#0056FE]' : 'text-white'} max-xl:text-[#0056FE]`}>Beranda</a></li>
            <li className="px-3.5 py-3 w-24 text-center max-lg:px-1.5"><a href='#' className={`text-md ${isScrolled || isSettings ? 'text-[#0056FE]' : 'text-white'} max-xl:text-[#0056FE]`}>Siswa</a></li>
            <li className="px-3.5 py-3 w-24 text-center max-lg:px-1.5"><a href='' className={`text-md ${isScrolled || isSettings ? 'text-[#0056FE]' : 'text-white'} max-xl:text-[#0056FE]`}>Galeri</a></li>
            <li className="px-3.5 py-3 w-24 text-center max-lg:px-1.5"><a href='#Pesan' className={`text-md ${isScrolled || isSettings ? 'text-[#0056FE]' : 'text-white'} max-xl:text-[#0056FE]`}>Pesan</a></li>
          </ul>
        </div>

        <div className='mr-8 flex gap-4'>
        <div className="md:hidden flex items-center">
            <button
              onClick={isOpenHandler}
              className="inline-flex items-center justify-center border border-[#0056FE] px-2.5 py-0.5 rounded-lg text-[#0056FE] hover:bg-[#0056FE] hover:text-white focus:outline-none cursor-pointer"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        
          <button onClick={isSettingsHandler} className='cursor-pointer px-3 py-0.5 border border-[#0056FE] rounded-lg text-[#0056FE] hover:text-white hover:bg-[#0056FE]'><i class="ri-settings-5-line"></i></button>
        </div>
      </nav>

      <MobileMenu isOpenHandler={isOpenHandler} isOpen={isOpen} isSettingsHandler={isSettingsHandler}/>
      <MobileSettings isSettings={isSettings} isDark={isDark} isDarkHandler={isDarkHandler}/>
      <DesktopSettings isSettings={isSettings} isDark={isDark} isDarkHandler={isDarkHandler}/>

      <div className={`bg-blur fixed w-full h-full bg-black/40 backdrop-blur-xs inset-1 md:hidden z-30 ${isOpen || isSettings ? '' : 'pointer-events-none opacity-0'}`} onClick={blurHandler}></div>
    </>
  )
}

function MobileMenu({isOpenHandler, isOpen, isSettingsHandler}) {
    return (
        <>
            <div className={`${isOpen ? 'fixed' : 'hidden'} md:hidden border-top border-[#0056FE] w-1/2 h-screen bg-white top-12 z-40 pt-2`}>
                <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col max-sm:px-4 justify-between">
                    <div className="flex flex-col gap-2">
                        <ItemMobileMenu logo={'ri-home-fill'} content={'Beranda'} href={'#Hero'} isOpenHandler={isOpenHandler} />
                        <ItemMobileMenu logo={'ri-user-3-fill'} content={'Siswa'} href={'#'} isOpenHandler={isOpenHandler} />
                        <ItemMobileMenu logo={'ri-image-2-fill'} content={'Galeri'} href={'#'} isOpenHandler={isOpenHandler} />
                        <ItemMobileMenu logo={'ri-chat-quote-fill'} content={'Pesan'} href={'#Pesan'} isOpenHandler={isOpenHandler} />
                    </div>
                    <a onClick={isSettingsHandler} className="mt-auto text-gray-700 flex select-none justify-between items-center hover:bg-blue-100 p-3 rounded-md cursor-pointer">
                <div className="flex gap-2 items-center"><i className="ri-settings-4-fill text-[18px]"></i>Settings</div></a>
                </div>
            </div>
        </>
    )
}

function ItemMobileMenu({logo, content, href, isOpenHandler}) {
    return(
        <>
            <a onClick={isOpenHandler} href={href} className="text-gray-700 flex select-none justify-between items-center content-center hover:bg-blue-200 active:bg-[#0056FE] active:text-white block px-3 left-2 right-2 py-2 rounded-md text-base font-medium">
                <div className='flex gap-2 items-center'>
                    <i className={` ${logo} text-[20px]`}></i>
                    {content}
                    </div>
                    <i className='ri-arrow-drop-right-line text-2xl'></i>
            </a>
        </>
    )
}

function MobileSettings({isSettings, isDarkHandler, isDark}) {
    return (
        <>
            <div className={`${isSettings ? 'fixed' : 'hidden'} md:hidden border-top border-[#0056FE] right-0 w-1/2 h-full bg-white top-12 z-40 pt-2`}>
                <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-2 max-sm:px-4">
                    <ItemSettings state={isDark} content={'Dark Mode'} setState={isDarkHandler} on={'Dark'} off={'Light'}/>
                </div>
            </div>
        </>
    )
}

function DesktopSettings({isSettings, isDarkHandler, isDark}) {
    return ( 
        <>
    <div className={`${isSettings ? 'fixed' : 'hidden'} ring-1 ring-black/15 right-5 w-[260px] h-content shadow-xl bg-white top-20 rounded-2xl z-40 p-1 pt-1.5`}>
                <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-2 max-sm:px-4 relative">
                    <h1 className="flex gap-2 text-[20px] pl-2" ><i className="ri-settings-3-line text-2xl"></i>Settings</h1>
                    <span className="w-11/12 flex self-center h-0.5 bg-[#0056FE] rounded-full"></span>
                    <DesktopItemSettings logo={'ri-sun-fill'} state={isDark} content={'Dark Mode'} setState={isDarkHandler} on={'Dark'} off={'Light'}/>
                    <DesktopItemSettings logo={'ri-sun-fill'} state={isDark} content={'Dark Mode'} setState={isDarkHandler} on={'Dark'} off={'Light'}/>
                    <DesktopItemSettings logo={'ri-sun-fill'} state={isDark} content={'Dark Mode'} setState={isDarkHandler} on={'Dark'} off={'Light'}/>
                    <DesktopItemSettings logo={'ri-sun-fill'} state={isDark} content={'Dark Mode'} setState={isDarkHandler} on={'Dark'} off={'Light'}/> 
                </div>
    </div>
        </>
    )
}


function ItemSettings({state, content, setState, on, off}) {
    return (
        <>
            <a onClick={setState} className="group select-none mt-auto text-gray-700 flex justify-between items-center active:bg-[#0056FE] active:text-white hover:bg-blue-100 p-3 rounded-md cursor-pointer">{content} <span className="bg-[#0056FE] py-1 px-3 min-w-[4rem] group-active:text-[#0056FE] group-active:bg-white text-center text-white text-[12px] mr-4 rounded-full">{state ? on : off}</span></a>
        </>
    )
    
}

function DesktopItemSettings({state, content, setState, on, off, logo}) {
     return (
    <a onClick={setState} className="group flex items-center justify-between p-3 rounded-lg hover:bg-blue-100 active:bg-blue-600 active:text-white transition">
      <div className="flex items-center gap-2">
        <i className={`text-lg ${logo}`}></i>
        <span>{content}</span>
      </div>

      <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full min-w-[60px] text-center group-active:bg-white group-active:text-blue-600">
        {state ? on : off}
      </span>
    </a>
  );
}


// Yang Harus Di kerjakan :
// Mobile menu bagian button settinb masih gabung di atas (harus di bawah)
// dark mode belum berfungsi
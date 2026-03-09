import gridPattern from './assets/Grid-Pattern.svg';
import gridP from './assets/Grid-P.svg';
import gridPP from './assets/Grid-PP.svg';
import curve1 from './assets/Curve-1.svg';
import curve2 from './assets/Curve-2.svg';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import Marquee from "react-fast-marquee";
import { useEffect } from 'react';
import Navbar from './component/Navbar.jsx';

function App() {
  return(
  <>
    <Navbar/>
    <Hero/>
    <MarqueeMessage/>
  </>
  )
}

function Hero() {
  return (
    <div id='Hero' className="relative w-full">
      <HeroGrid/>
      <HeroAbsolute/>
    </div>
  )
}

function HeroGrid() {
  return (
    <>
      <div className="relative z-10 w-full flex justify-center top-20 h-screen">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 text-black h-[80dvh] w-[87%] max-w-[1300px] aspect-[16/9] mx-auto max-lg:grid-cols-3 max-md:grid-cols-2"> {/* h-[520px] / 80%*/}
          <div className="col-span-2 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2"></div>
          <div className="col-start-3 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2 max-lg:hidden"></div>
          <div className="col-start-4 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2 max-lg:col-start-3 max-md:hidden"></div>
          <div className="row-start-2 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2 max-md:hidden"></div>
          <div className="row-start-2 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2 max-lg:hidden"></div>
          <div className="col-span-2 row-start-2 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2"></div>
          <div className="row-start-3 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2 max-lg:hidden"></div>
          <div className="col-start-4 row-start-3 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2 max-lg:col-start-3 max-md:hidden"></div>
          <div className="col-span-2 col-start-2 row-start-3 bg-white overflow-hidden rounded-3xl border duration-300 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] hover:shadow-xl hover:-translate-y-2 max-lg:col-start-1"></div>
        </div>
      </div>
    </>
  )
}

function HeroAbsolute() {
  return (
    <>
      <img src={gridPattern} className='w-20 -right-10 top-36 absolute -z-1 '/>
      <img src={curve1} className='w-44 -right-20 top-80 absolute -z-1'/>
      <img src={curve1} className='w-44 -left-20 top-24 absolute scale-x-[-1] -z-1'/>
      <img src={gridP} className='w-20 top-[86%] left-2 absolute -z-1'/>
      <img src={curve2} className="absolute w-[clamp(600px,40vw,100%)] top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-1 max-xl:hidden"/>
    </>
  )
}

function MarqueeMessage() {
  const [play, setPlay] = useState(true);
  const [siswa, setSiswa] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = siswa.filter((s) =>
    s.nama.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch("./PesanSiswa.json")
      .then(res => res.json())
      .then(data => setSiswa(data));
  }, []);

  return(
    <>
      <div id='Pesan' className='w-full h-[320px] bg-[#0056FE] z-20 relative'>
        <img src={gridPP} className='w-20 left-2 top-2 absolute rotate-180'/>
        <img src={gridPP} className='w-20 right-2 bottom-2 absolute'/>
        <div className="search-marquee w-full flex gap-3 justify-end items-center py-4 pr-3">
          <button onClick={() => setPlay(!play)} className='px-1 bg-white rounded-full border cursor-pointer'><i className={`${play ? 'ri-play-fill' : 'ri-pause-line'} text-2xl`}></i></button>
          <button className='px-1.5 py-0.5 bg-white rounded-full border cursor-pointer'><i className="ri-search-line text-xl"></i></button>
          <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Cari Berdasarkan Nama..' value={search} className='w-3xs bg-white rounded-full border py-0.5 pl-3'/>
        </div>
        <div className="marquee mt-3.5">
          <Marquee play={play}>
            {filtered.map((siswa, index) => (
              <MarqueeCard key={index} nama={siswa.nama} date={siswa.date} pesan={siswa.pesan}/>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  )
}

function MarqueeCard({nama, date, pesan, key}) {
  return (
    <>
      <div key={key} className="card h-[200px] w-[400px] bg-white rounded-3xl border overflow-hidden mx-6">
        <div className="header w-full h-1/2 p-5 flex items-center gap-5">
          <div className='w-16 h-16 border rounded-full overflow-hidden'><img src=""/></div>
          <div className="identity">
            <h1 className='text-3xl my-0 p-0 block text-[#0056FE]'>{nama}</h1>
            <span className='text-xs my-0 p-0 block'>{date}</span>
          </div>
        </div>
        <div className="message w-full h-1/2 border-t border-x rounded-2xl flex justify-center items-center italic">
          <p>{pesan}</p>
        </div>
      </div>
    </>
  )
}

export default App

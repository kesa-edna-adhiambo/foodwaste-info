'use client'; 

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div>

      <div className='flex gap-[150px] sm:text-[10px] mt-[10px] '>

      <nav className="flex gap-[150px] text-[20px] mt-[40px]">

        <div className="object-cover ml-[150px] sm: w-[80px]"> 
          <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="hidden md:flex gap-[100px] text-[30px] ml-[400px] sm:">
          <Link href={"/home"} className="text-amber-600">Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/team"}>Team</Link>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </div>

      </nav>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center">
          <Link href={"/home"} className="text-amber-600">Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/team"}>Team</Link>
        </div>

      )}

</div>

      

      <div className="flex text-[45px] ml-[150px] sm:">

        <div className="font-light text-zinc-550 mt-[200px]">

          <h2 className="font-bold">Waste Not, Want Not!</h2>
          <p className="mt-[20px] font-light">Cultivating creativity and<br/>togetherness in food waste<br/>reduction.</p>

          <div className="mt-[55px] bg-amber-600 rounded-lg mr-[345px] h-[55px]">

            <div className="flex gap-[10px] ml-[5px]">
              <div className="w-[45px] object-cover ml-[20px] mt-[5px]">
                <img src="/images/playstore.png" alt="Playstore Icon"/>
              </div>
              <div className="text-[17px] text-white mt-[1px] font-light">
                <p>Get it on<br/>Google play</p>
              </div>
            </div>

          </div>

        </div>
        
        <div className="w-[550px] h-[600px] object-cover ml-[300px] mt-[30px]">
          <img src="/images/household.png" alt="Household cook" />
        </div>

      </div>

    </div>
  );
}




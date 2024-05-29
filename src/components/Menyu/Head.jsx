import React from 'react'
import { CarouselNav } from '../Header';
import { NavbarMenyu } from "../../components/Menyu/NavbarMenyu";

export const Head = () => {
  return (
    <>
      <CarouselNav />
      <div className='relative bottom-20'>
        <NavbarMenyu />
      </div>
    </>
  );
}

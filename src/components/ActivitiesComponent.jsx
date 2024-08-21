import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import ActivityCard from './ActivityCard';
import Button from './Button';
import { workshops } from '../constants/index.js';

const ActivitiesComponent = () => {
  return (
    <section className="activities py-6 lg:mt-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-lg text-center">
          <h2>Nuestras Actividades</h2>

          <p className="mt-4 text-gray-600">
            Descubre más sobre nuestras diversas actividades y cómo impactan positivamente en la comunidad local y más allá.
          </p>
        </div>

        {/* Carrusel solo en móviles */}
        <div className="block mx-1 md:hidden mt-8 md:mt-12">
          <Swiper
            pagination={true} modules={[Pagination]} className="mySwiper"
          >
            {workshops.map((workshop) => (
              <SwiperSlide key={workshop.id}>
                <ActivityCard workshop={workshop} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Cuadrícula solo en pantallas grandes */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-8 md:mt-12">
          {workshops.map((workshop) => (
            <ActivityCard key={workshop.id} workshop={workshop} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to={"/activities"}
            className="inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
            text={"Mostrar todas"}
          />
        </div>
      </div>
    </section>
  );
};

export default ActivitiesComponent;

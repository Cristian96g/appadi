import React from 'react';

const Gallery = () => {
  const features = [
    "Talleres de Panadería",
    "Servicios de Lavandería",
    "Fotocopiadora",
    "Centro de Día",
    "Inclusión Social"
  ];

  return (
    <section className='mt-16 bg-green-800'>
      <div className="container flex flex-col px-6 py-4 md:py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-white lg:text-4xl">
              A.P.P.A.Di: Promoviendo la Igualdad y la Inclusión
            </h1>
            <p className="mt-4 text-white">
              En A.P.P.A.Di, nos dedicamos a proporcionar oportunidades para personas con discapacidades a través de una variedad de talleres y negocios. Nuestra misión es fomentar la inclusión y la participación plena en la sociedad.
            </p>
            <div className="grid gap-3 md:gap-6 mt-8 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white -px-3">
                  <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="mx-3">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-64  md:h-96 lg:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="A.P.P.A.Di activities" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;

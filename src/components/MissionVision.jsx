import React from 'react';
import {mision} from '../constants/index.js'
import { MdCastForEducation } from "react-icons/md";

const MissionVision = () => {
    return (
        <section className="text-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-[380px] md:max-w-lg text-center">
                    <h2>Transformando Vidas <br />y fomentando la Inclusión</h2>

                    <p className="mt-4 text-gray-600">
                    A.P.P.A.Di promueve igualdad e inclusión de personas con discapacidad, ofreciendo talleres y programas de apoyo vital en nuestra comunidad.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mision.map((mision) => (
                        <a key={mision.id} 
                        className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-green-400-500/10 hover:shadow-green-500/10"
                        href="#"
                    >
                        <MdCastForEducation className='w-[2.5rem] h-[2.5rem] text-green-500' />
                       

                        <h2 className="mt-4 text-xl font-bold text-gray-900">{mision.title}</h2>

                        <p className="mt-1 text-sm text-gray-900">
                        {mision.description}
                        </p>
                    </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MissionVision;

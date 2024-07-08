import React from 'react';
import {mision} from '../constants/index.js'
import { MdCastForEducation } from "react-icons/md";

const MissionVision = () => {
    return (
        <section className="text-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2>Empieza a cambiar vidas hoy</h2>

                    <p className="mt-4 text-gray-600">
                    Descubre cómo nuestra organización está haciendo la diferencia en la comunidad, ofreciendo oportunidades laborales y apoyo para aquellos que más lo necesitan
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Conocé más
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;

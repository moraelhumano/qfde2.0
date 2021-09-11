import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

import Luisardo from '../../src/luisardo.jpeg';
import TheBoss from '../../src/theboss.png';
import ElBorre from '../../src/elborre.png';


class Crew extends Component{
    render() {
        return (
        <>
        <section className="hero-home mt-20 md:mt-20">
            <Bounce right>
                    <div className="title-section">
                        <h3 className="text-3xl text-center text-gray-800 font-bold leading-none">
                            ¿Quiénes son ellos?
                        </h3>
                    </div>
                </Bounce>
            <Zoom>
                <section className="max-w-5xl mt-8 md:mt-12 mx-auto mx-8 container-services">
                    <section className="flex justify-center md:justify-between flex-wrap">
                    <img className="w-9/12 md:h-1/2 md:w-1/2" src={Luisardo} />
                        <div className="sm:w-1/2 p-6 sm-text-center">
                            <h3 className="text-5xl text-gray-800 font-bold leading-none">
                               Luisardo García
                            </h3>
                            <p className="text-2xl text-gray-600 mt-4">
                                Un gringo mexa <b>ganador del Emmy</b> y fan de Pxndx hasta el final, ha crecido viendo 
                                peliculas y series en <b>la mera frontera</b>. El te resive con un agradable saludo
                                de señorito como él lo ha dicho.
                            </p>
                        </div>
                    </section>
                </section>
                <section className="max-w-5xl mt-4 md:mt-12 mx-auto mx-8 container-services hidden-mobile">
                    <section className="flex justify-center md:justify-between flex-wrap ">
                        <div className="sm:w-1/2 p-6 sm-text-center">
                            <h3 className="text-5xl text-gray-800 font-bold leading-none">
                               Mario "El Borre" Capistrán
                            </h3>
                            <p className="text-2xl text-gray-600 mt-4">
                                Fan de andar <b>riendo y hacer travesuras</b>, el borre siempre tiene aventuras bastante
                                locas que va a compartir contigo durante cada episodio de <b>¿QFDE?</b>
                            </p>
                        </div>
                        <img className="w-9/12 md:h-1/2 md:w-1/2" src={ElBorre} />
                    </section>
                </section>
                <section className="max-w-5xl mt-4 md:mt-12 mx-auto mx-8 container-services hidden-desktop">
                    <section className="flex justify-center md:justify-between flex-wrap ">
                    <img className="w-9/12 md:h-1/2 md:w-1/2" src={ElBorre} />
                        <div className="sm:w-1/2 p-6 sm-text-center">
                            <h3 className="text-5xl text-gray-800 font-bold leading-none">
                               Mario "El Borre" Capistrán
                            </h3>
                            <p className="text-2xl text-gray-600 mt-4">
                                Fan de andar <b>riendo y hacer travesuras</b>, el borre siempre tiene aventuras bastante
                                locas que va a compartir contigo durante cada episodio de <b>¿QFDE?</b>
                            </p>
                        </div>
                    </section>
                </section>
                <section className="max-w-5xl mt-4 md:mt-12 mx-auto mx-8 container-services">
                    <section className="flex justify-center md:justify-between flex-wrap">
                    <img className="w-9/12 md:h-1/2 md:w-1/2" src={TheBoss} />
                        <div className="sm:w-1/2 p-6 sm-text-center">
                            <h3 className="text-5xl text-gray-800 font-bold leading-none">
                               The Boss
                            </h3>
                            <p className="text-2xl text-gray-600 mt-4">
                                Mantener bajo control al borre no es un trabajo fácil, es por eso que con <b>The Boss</b> no va 
                                a faltar un programa de <b>calidad</b> e intervenciones con contenido bastante interesante,
                                siempre y cuando no se encuentre <b>Lolo Espiniza</b> cerca.
                             
                            </p>
                        </div>
                    </section>
                </section>
            </Zoom>
        </section>
        </>

        )
    }
}
export default Crew;


import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import QFDEDUDES from '../../src/qfdedudes.png';


class Description extends Component{
    render() {
        return (
        <>
        <section className="hero-home md:pt-14">
                <section className="max-w-5xl mt-4 md:mt-12 mx-auto mx-8 container-services">
                    <section className="flex justify-center md:justify-between flex-wrap">
                    <Fade left>
                        <div className="sm:w-1/2 p-6 sm-text-center">
                            <h3 className="text-5xl text-gray-800 font-bold leading-none">
                                ¿Qué fue de ellos?
                            </h3>
                            <p className="text-2xl text-gray-600 mt-4">
                                ¿Alguna vez te has preguntado que pasó con esas personas que acapararon tu atención en la decada de los <b>90's y los 2000's</b> para luego desaparecer?
                                <br />
                                <b>Luisardo García y a Mario López Capistrán también.</b>
                            </p>
                        </div>
                        </ Fade>
                        <Fade right>
                            <img className="w-9/12 md:h-1/2 md:w-1/2" src={QFDEDUDES} />
                        </Fade>
                    </section>
                </section>
            
        </section>
        </>

        )
    }
}
export default Description;


import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


class Episodes extends Component{
    render() {
        return (
        <>
        <section className="hero-home border-b md:mt-14 h-auto">
        <Bounce right>
                    <div className="title-section">
                        <h3 className="text-3xl text-center text-gray-800 font-bold leading-none">
                            Últimos cápitulos
                        </h3>
                    </div>
                </Bounce>
            <div className="container max-w-5xl mx-auto m-8 pt-4 pb-12 ">
                <section className="flex justify-between flex-wrap">
                    <Zoom>
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink shadow px-6 ">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden">
                            <p className="w-full text-gray-600 text-xs md:text-sm">
                             Episodio 72 
                            </p>
                            <p className="w-full font-bold text-xl text-gray-800">
                                The Office Parte 2
                            </p>
                        </div>
                        <div className="flex-none bg-white rounded-b rounded-t-none overflow-hidden mt-8 text-center md:text-left">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sRGfgESt-5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <a className="flex flex-col justify-center" target="_blank" href="https://open.spotify.com/episode/24u6Z6zUtow4FEZCJVMFpU?si=UGFWeeLbQYKBoB0Yb6xd9g&dl_branch=1">
                            <button class="mx-auto lg:mx-0 font-bold py-2 px-4 border button-home content-center mt-8 rounded">
                                ESCÚCHALO EN SPOTIFY
                            </button>
                        </a>
                    </div>

                    </div>
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink shadow px-6 ">
                        <div className="flex-1 bg-white flex flex-col rounded-t rounded-b-none overflow-hidden">
                            <p className="w-full text-gray-600 text-xs md:text-sm">
                            Episodio 73
                            </p>
                            <p className="w-full font-bold text-xl text-gray-800">
                                Especial de Juegos y Juguetes Ft Pancho Estrada
                            </p>
                        </div>
                        <div className="flex-none bg-white rounded-b rounded-t-none overflow-hidden mt-8 text-center md:text-left">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bhXcxwq1QkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <a className="flex flex-col justify-center" target="_blank" href="https://open.spotify.com/episode/2AEn8n6tcgwRDu8rQuyhD8">
                            <button class="mx-auto lg:mx-0 font-bold py-2 px-4 border button-home content-center mt-8 rounded">
                                ESCÚCHALO EN SPOTIFY
                            </button>
                        </a>
                    </div>

                    </div>
                    </Zoom>
                </section>
            </div>
        </section>
        </>

        )
    }
}
export default Episodes;


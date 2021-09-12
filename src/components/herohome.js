import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

import QFDELOGO from '../../src/logoqfde.png';
import AppleLogo from '../../src/apple-podcasts.png'

class HeroHome extends Component{
    render() {
        return (
        <>
        <div className="md:pt-24 hero-home hero-home-home h-auto flex-col flex jusify-center">
            <div className="container md:h-full px-3 mx-auto flex justify-center">
                <div className="flex flex-col justify-center text-center flex-wrap md:flex-nowrap pt-20 md:pt-0">
                    <RubberBand>
                    <div className="w-full flex justify-center">
                        <img className="mt-4 md:mt-0 w-10/12 md:max-w-full" src={QFDELOGO} />  
                    </div>
                    </RubberBand>
                    <Fade bottom>
                    <div className="max-w-screen-xl px-4  mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                        <div className="flex justify-center items-center p-4 md:p-8 space-x-6 flex-wrap md:flex-nowrap mt-4 md:mt-0">
                            <h3 className="text-2xl md:text-4xl text-gray-800 font-bold leading-none text-center md:text-left">
                                ESCÚCHALO EN PODCAST
                            </h3>
                            <div className="mt-4 md:mt-0 flex justify-bettwen">
                                <a href="https://podcasts.apple.com/mx/podcast/qu%C3%A9-fue-de-ellos" target="_blank" className="text-gray-400 hover:text-gray-500">
                                    <img className="md:w-16 md:h-16 w-12 h-12"  style={{objectFit:'scale-down'}} src={AppleLogo}/>
                                </a>
                                <a href="https://open.spotify.com/show/0ui8Wx21hSt6NodwdRzLBR" target="_blank" className="text-gray-400 hover:text-gray-500 md:px-2 mx-5 md:mx-0 flex items-center">
                                    <svg className="md:w-16 md:h-16 w-10 h-10"  viewBox="0 0 167.5 167.5">
                                        <path className="md:w-16 md:h-16 w-10 h-10" fill="currentColor" className="icons-podcast" d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"></path>
                                    </svg>
                                </a>
                                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvNmRkODQxM2ItZWRlNi00ODNhLWJmNGUtYWI4MDAxNDkzOWRlLzcyNTI1Y2UwLWFlMGMtNDk2Ny1hMzc4LWFkNzMwMTFjODFkYi9kNWU3ZmNlNy05ZGI4LTQyYWUtOGQ4Mi1hZDczMDExYzgxZjMvcG9kY2FzdC5yc3M" target="_blank" className="text-gray-400 hover:text-gray-500">
                                    <img className="md:w-16 md:h-16 w-12 h-12 h-auto" src="https://img.icons8.com/ios-filled/100/492d8c/google-podcasts.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
                
            </div>
 


        </div>
        </>

        )
    }
}
export default HeroHome;


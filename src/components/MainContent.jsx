// 'use client';

import React from "react";
import './MainContent.css'

const MainContent = () => {

    return(
        <div className= "main-container bg-lightgray text-white px-7 w-screen flex flex-col items-center ">

            <section id = "home" className="bg-gray flex flex-col items-center h-full mt-10 w-full max-w-[900px] shadow-xl shadow-black rounded-2xl md:flex-row p-5 ">
                    <div className="bg-atlasColor bg-center bg-[length:450px_450px] bg-no-repeat w-[450px] h-[450px] rounded-2xl"></div>
                    
                    <div className="mr-16 flex flex-col flex-[50%] justify-center text-left text-white md:p-10 md:text-right">
                        <h1 className ="text-7xl font-extrabold italic"> Atlas</h1>
                        <p className = "text-2xl mt-6 italic">
                            Un espacio donde podés encontrar lo que necesitás para medir tu <span className="text-blue font-extrabold">rendimiento</span> y <span className="text-blue font-extrabold">desempeño</span> de manera clara y efectiva.
                            <span className= "hidden text-2xl mt-6 italic lg:inline"> Atlas está diseñado para que puedas visualizar tu <span className="text-blue font-extrabold">productividad</span> individual, identificar tus <span className="text-blue font-extrabold">logros</span> y descubrir áreas en las que podés mejorar.</span>
                        </p>
                    </div>
            </section>

            <section className = "bg-gray seccion h-full mt-10 w-full max-w-[900px] shadow-xl shadow-black rounded-2xl">
                        <div className="bg-cover bg-no-repeat  w-full h-full flex flex-col items-start justify-end rounded-2xl p-5 sm:bg-imgContainer1 sm:bg-[length:900px_auto] sm:bg-right">
            
                                <div className="flex flex-col h-auto w-full pb-5 sm:w-6/12">
                                    <div className="bg-tituloColaboradores bg-contain h-[5vh] bg-no-repeat bg-[position: left center] mb-2"></div>
                                    <div className="bg-flechaColaboradores bg-contain h-[5vh] bg-no-repeat bg-[position: left center]"></div>
                                </div>
                                <div className="rounded-b-2xl h-auto flex flex-col items-start text-left justify-start  sm:w-[550px] sm:h-auto sm:mt-[11rem] sm:rounded-2xl">  {/*card */}
                                    <p className="text-[1.5rem] italic">Si sos parte del equipo de Colaboradores, en Atlas podes ver toda la información sobre tu <span className = "font-extrabold text-yellow">trabajo</span>, tu <span className=" font-extrabold text-yellow">rendimiento</span> y <span className=" font-extrabold text-yellow">puntos de mejora</span> en Crombie.</p>
                                </div>

                        </div>
            </section>
            <section className = "bg-gray seccion h-full mt-10 w-full max-w-[900px] shadow-xl shadow-black rounded-2xl">
                        <div className="bg-cover bg-no-repeat  w-full h-full flex flex-col items-start justify-end rounded-2xl p-5 sm:bg-imgContainer2 sm:bg-[length:900px_auto] sm:bg-right">
            
                                <div className="flex flex-col h-auto w-full pb-5 sm:w-6/12">
                                    <div className="bg-tituloPM bg-contain h-[10vh] bg-no-repeat bg-[position: left center] mb-2"></div>
                                    <div className="bg-flechaPM bg-contain h-[5vh] bg-no-repeat bg-[position: left center]"></div>
                                </div>
                                <div className="rounded-b-2xl h-auto flex flex-col items-start text-left justify-start  sm:w-[550px] sm:h-auto sm:mt-[11rem] sm:rounded-2xl">  {/*card */}
                                    <p className="text-[1.5rem] italic">Si sos parte del equipo de Proyect Manager en Atlas podrás ver la <span className = "font-extrabold text-blue">planificacion</span> y toda la información  del <span className = "font-extrabold text-blue">rendimiento</span> y <span className = "font-extrabold text-blue">puntos de mejora de tus equipos</span> .</p>
                                </div>

                        </div>
            </section>
            <section className = "bg-gray seccion h-full mt-10 w-full max-w-[900px] shadow-xl shadow-black rounded-2xl">
                        <div className="bg-cover bg-no-repeat  w-full h-full flex flex-col items-start justify-end rounded-2xl p-5 sm:bg-imgContainer3 sm:bg-[length:900px_auto] sm:bg-right">
            
                                <div className="flex flex-col h-auto w-full pb-5 sm:bg-transparent sm:w-6/12">
                                    <div className="bg-tituloManager bg-contain h-[5vh] bg-no-repeat bg-[position: left center] mb-2"></div>
                                    <div className="bg-flechaManager bg-contain h-[5vh] bg-no-repeat bg-[position: left center]"></div>
                                </div>
                                <div className="rounded-b-2xl h-auto flex flex-col items-start text-left justify-start  sm:w-[550px] sm:h-auto sm:mt-[11rem] sm:rounded-2xl">  {/*card */}
                                    <p className="text-[1.5rem] italic">Si sos Manager, en Atlas podes encontrar toda la información sobre el <span className = "font-extrabold text-violet">rendimiento</span> y <span className = "font-extrabold text-violet">puntos de mejora del área de producción</span>.</p>
                                </div>

                        </div>
            </section>


            <div className="bg-nav-color text-white w-[90vw] max-w-[500px] h-20 mt-20 mb-0 rounded-t-2xl rounded-tr-2xl flex flex-row items-center justify-center">
                <a href="https://crombie.dev/" className="flex flex-row items-center justify-center h-full w-[180px]">
                    <div className="bg-logoBlanco bg-center bg-cover w-[180px] h-[40%] mr-5"></div>
                </a>
            </div>
        </div>
    )
}

export default MainContent
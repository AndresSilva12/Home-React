// 'use client';

import React from "react";
import './MainContent.css'

const MainContent = () => {

    return(
        <div className= "main-container bg-custom-white text-white px-7 flex flex-col items-center">

            <section id = "home" className="bg-custom-gray flex flex-col items-center h-full mt-16 w-full shadow-xl shadow-black rounded-2xl sm:flex-row ">
                    <div className="bg-atlasColor bg-center bg-contain bg-no-repeat w-[450px] h-[450px] rounded-2xl"></div>
                    
                    <div className="mr-16 flex flex-[50%] justify-center text-right text-white pb-[150px] sm:flex-col sm:p-10">
                        <h1 className ="text-7xl font-extrabold italic"> Atlas</h1>
                        <p className = "text-2xl mt-6 italic">Un espacio donde podés encontrar lo que necesitás para medir tu <span className="text-card-blue font-extrabold">rendimiento</span> y <span className="text-card-blue font-extrabold">desempeño</span> de manera clara y efectiva. Atlas está diseñado para que puedas visualizar tu <span className="text-card-blue font-extrabold">productividad</span> individual, identificar tus <span className="text-card-blue font-extrabold">logros</span> y descubrir áreas en las que podés mejorar.</p>
                    </div>
            </section>


            <section className = "bg-custom-gray seccion h-screen mt-16 w-full shadow-xl shadow-black rounded-2xl">
                        <div className="bg-imgContainer1 bg-[length:900px_auto] bg-no-repeat bg-right w-full h-full flex flex-row items-center justify-between rounded-2xl">
                            <div className = "ml-24 mt-4 flex flex-col">
                                <div className="bg-tituloColaboradores max-h-52 bg-[length:500px_100px] bg-no-repeat bg-[position: left center] w-[500px] h-[100px]"></div>
                                <div className="bg-flechaColaboradores max-h-52 bg-[length:500px_100px] bg-no-repeat bg-[position: left center] w-[600px] h-[100px]"></div>
                                <div className=" w-[550px] h-auto mt-[11rem] flex flex-col items-center text-left justify-center rounded-2xl">  {/*card */}
                                    <p className="px-3 text-[1.5rem] italic">Si sos parte del equipo de Colaboradores, en Atlas podes ver toda la información sobre tu <span className = "font-extrabold text-card-yellow">trabajo</span>, tu <span className=" font-extrabold text-card-yellow">rendimiento</span> y <span className=" font-extrabold text-card-yellow">puntos de mejora</span> en Crombie.</p>
                                </div>
                            </div>
                        </div>
            </section>

            <section className = "bg-custom-gray seccion h-screen mt-16 w-full shadow-xl shadow-black rounded-2xl">
                        <div className="bg-imgContainer2 bg-[length:1000px_auto] bg-no-repeat bg-right w-full h-full flex flex-row items-center justify-between rounded-2xl">
                            <div className = "ml-24 mt-4 flex flex-col">
                                <div className="bg-tituloPM bg-[length:500px_150px] bg-no-repeat bg-[position: left center] w-[600px] h-[150px]"></div>
                                <div className="bg-flechaPM bg-[length:500px_100px] bg-no-repeat bg-[position: left center] w-[600px] h-[100px]"></div>
                                <div className=" w-[550px] h-auto mt-[7rem] flex flex-col items-center text-left justify-center rounded-2xl">  {/*card */}
                                    <p className="px-3 text-[1.5rem] italic">Si sos parte del equipo de Proyect Manager en Atlas podrás ver la <span className = "font-extrabold text-card-blue">planificacion</span> y toda la información  del <span className = "font-extrabold text-card-blue">rendimiento</span> y <span className = "font-extrabold text-card-blue">puntos de mejora de tus equipos</span> .</p>
                                </div>
                            </div>
                        </div>
            </section>

            <section className = "bg-custom-gray seccion h-screen mt-16 w-full shadow-xl shadow-black rounded-2xl">
                        <div className="bg-imgContainer3 bg-[length:1000px_auto] bg-no-repeat bg-right w-full h-full flex flex-row items-center justify-between rounded-2xl">
                            <div className = "ml-24 mt-4 flex flex-col">
                                <div className="bg-tituloManager max-h-52 bg-[length:500px_100px] bg-no-repeat bg-[position: left center] w-[500px] h-[100px]"></div>
                                <div className="bg-flechaManager max-h-52 bg-[length:500px_100px] bg-no-repeat bg-[position: left center] w-[500px] h-[100px]"></div>
                                <div className=" w-[550px] h-auto mt-[11rem] flex flex-col items-center text-left justify-center rounded-2xl">  {/*card */}
                                    <p className="px-3 text-[1.5rem] italic">Si sos Manager, en Atlas podes encontrar toda la información sobre el <span className = "font-extrabold text-card-violet">rendimiento</span> y <span className = "font-extrabold text-card-violet">puntos de mejora del área de producción</span>.</p>
                                </div>
                            </div>
                        </div>
            </section>

            <div className="bg-nav-color text-white w-[500px] h-20 mt-20 mb-0 rounded-t-2xl rounded-tr-2xl flex flex-row items-center justify-center">
                <a href="https://crombie.dev/" className="flex flex-row items-center justify-center h-full w-[180px]">
                    <div className="bg-logoBlanco bg-center bg-cover w-[180px] h-[40%] mr-5"></div>
                </a>
            </div>
        </div>
    )
}

export default MainContent
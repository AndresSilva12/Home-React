import React from "react";
import './MainContent.css';

const MainContent = () => {
    return(
        <div class= "main-container">
            <section id="home">
                    <div class="img-container"></div>
                    
                    <div class="hero">
                        <h1>Proyecto Atlas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt animi minus harum consectetur necessitatibus alias nihil officiis itaque illum magnam, tempora maxime suscipit? Magnam quos ad molestiae officiis tempora?</p>
                    </div>
            </section>

            <section id="cards">
                <div class="card-container">
                    <div class="card-yellow card-deco"></div>
                        
                    <div class="row-cards">

                        <div class="card-green card-deco"></div>
                        
                        <div class="card dev">
                            <h3>DEVELOPER'S</h3>
                            <div class="card-content">
                                <p>Si sos parte del equipo de colaboradores en Atlas podes ver toda la informacion sobre tu trabajo, tu rendimento y puntos de mejora en crombie.</p>
                                <a href="#" class="boton-ingresar">Ingresar</a>
                            </div>
                        </div>

                    </div>

                    <div class="card card-yellow pm">
                        <h3>PROYECT MANAGER</h3>
                        <div class="card-content">
                            <p>Si sos parte del equipo de proyect manager en atlas podrás ver la planificacion y toda la informacion  del rendimiento y puntos de mejora de tus equipos.</p>
                            <a href="#" class="boton-ingresar">Ingresar</a>
                        </div>
                    </div>

                    <div class="row-cards">

                        <div class="card-pink card-deco"></div>

                        <div class="card manager">
                            <h3>MANAGER</h3>
                            <div class="card-content">
                                <p>Si sos manager, en Atlas podes encontrar toda la informacion sobre el rendimiento y puntos de mejora del area de producción.</p>
                                <a href="#" class="boton-ingresar">Ingresar</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="img-card"></div>
            </section>

        </div>
    )
}

export default MainContent
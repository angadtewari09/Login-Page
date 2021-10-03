import React, {useState , Component, useEffect} from 'react'
import Todo from './Todo'
import Product from './Product'
import Mood from './Mood'
import Secondary  from './Secondary'

const Hero  = ({handleLogout}) => {
    
    //This displays the current date on the nav bar 
    const options = { weekday: 'long' , year: 'numeric' , month: 'long' , day: 'numeric',}
    const currentDate = new Date();
    
    //to display the current time on the screen 
    const [currentTime , setcurrentTime] = useState(new Date());

    useEffect(() => {
        const Time = setInterval(() => setcurrentTime(new Date()) , 1000)
        });

    return (
        <section className = "Hero">
            <nav>
                <h2 id= "left"> {currentDate.toLocaleDateString('en-in' , options)} </h2>
                <button className="button" onClick={handleLogout}>Log out <span className="fa">  &#xf08b;</span> </button> 
                <h2 id="right"> {currentTime.toLocaleTimeString()}</h2>
            </nav>
            <div className ="Wrapper">
               <div className="box priorities">
                    priorities
                </div>
                <div className="box mood-water">
                    <Mood/>
                </div>
                <div className=" box todolist">
                    <Todo/>
                </div>
                <div className="box appointments">
                    appointments
                </div>
                <div className="box secondarytodo">
                    <Secondary/>
                </div>
                <div className="box gratitudebox">
                    gratitudebox
                </div>
                <div className="box productivity">
                    <Product/>
                </div>
            </div>
            
        </section>
    )
}

export default Hero;

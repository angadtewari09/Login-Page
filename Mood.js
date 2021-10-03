import { render } from '@testing-library/react';
import React, { useState } from 'react'
import {setState} from 'react'






const Mood = () => {

        const  water_intake = "https://img.icons8.com/dusk/64/000000/water.png";
        const [Count, setCount] = useState('')

        function HandleClick()  {
            this.Count.setState('add-drop')

        }
    
        return (

            <div className="outer">
                <div className="mood">
                    <h1 id="h4">My Mood</h1>
                    <hr id="line" size="3" color="black"></hr>
                  
                   <div className="emojis">
                        <input type="radio" name="emote" id="emo1"/><label for="emo1">😔
                        </label>
                        <input type="radio" name="emote" id="emo2"/><label for="emo2">😥
                        </label>
                        <input type="radio" name="emote" id="emo3"/><label for="emo3">😫
                        </label>
                        <input type="radio" name="emote" id="emo4"/><label for="emo4">😃
                        </label>
                        <input type="radio" name="emote" id="emo5"/><label for="emo5">😇
                        </label>
                           
                    </div>
                  
                    <hr id="line" size="3" color="black"></hr>
                </div>
                <br/>
                <div className="water-intake">
                    <h1 id="h4">Water Intake</h1>
                    <div className="water">
                        <div className="dropping">
                            
                            <img class="drop" src={water_intake}></img>
                            
                        </div>
                        <button onClick={() => HandleClick()} className="add-water">&#x2B;</button>
                    </div>
                </div>
            
            </div>
     
        );
    
}

export default Mood
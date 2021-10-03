import React from 'react';


const login = props => {

  const { email, setEmail, password,  setPassword,  handleLogin,  handleSignUp,  hasAccount,  setHasAccount,  emailError,  passwordError} = props;
  
    return (    
        <section>

        <div className="container">
          
          <div className = "leftside"></div>
          
          <div className = "rightside">
          <label>Username:</label>
          <input 
          type="text" 
          autoFocus 
          required 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
          <p className ="errorMsg">{emailError}</p>

          <label>Password:</label>
          <input 
          type="password" 
          required 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
           
            <div className="btnContainer">
             {hasAccount ? (
              <>
                    <button onClick= {handleLogin}>Sign In</button>
                    <p>Don't have an account ? <span onClick = {() => setHasAccount(!hasAccount)}> Sign up</span></p>
              </>
             ):(        
               <>
                    <button onClick = {handleSignUp}>Sign Up</button>
                    <p>Already have an account?<span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span></p>
               </>
             )}
            </div>
          
          </div>
        </div>
      </section>
    )
}

export default login;
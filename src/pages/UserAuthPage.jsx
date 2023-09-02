import React from 'react'

const UserAuthPage = () => {
  return (
    <div>
        <div className='left-side'>
            Welcome Back!
            <br/>
            Unlocking a World of Possibilities with Readify App. Get started for free.

            <form>
               <input type="text" id="username" name='username' required></input>
               <input type="text" id="password" name='password' required></input>
               <input type="submit" value="submit"></input>
            </form>
        </div>

        <div className='right-side'>

        </div>
    </div>
  )
}

export default UserAuthPage
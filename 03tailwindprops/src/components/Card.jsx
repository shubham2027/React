import React from 'react';

function Card(props){ //here we can directly pass props as an argument or we can pass specific props like {username, btnText} etc.

    // visit me is default value for btnText prop


    // console.log("props", props); // for debugging purposes
    console.log(props.username); // accessing the username prop
    
    return (
   
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 m-2">
        <img src="https://www.pexels.com/photo/close-up-photography-of-leaves-with-droplets-807598/" alt="loading" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">Card</h2>
            <p className="text-gray-400">
              Username: {props.username} <br />
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {props.btnText}
          </button>
        </div>
      </div>
    
    )
}
export default Card;
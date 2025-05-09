import React from 'react'

function Card({name , text = 'He was very Kind'}){
    return  (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Sultan_Abdul_Hamid_II_of_the_Ottoman_Empire-colored.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{text}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card
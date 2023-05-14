import React from "react";

export const Form = () => {
  return (
    <form className="bg-white/75 text-slate-700 mx-auto w-[350px] px-6 backdrop-blur-0 backdrop-saturate-[180%] rounded-xl border border-solid border-[rgba(209, 213, 219, 0.3))">
      <h1 className="text-black font-bold text-xl mb-4 mt-8">
        APP DE ADMINISRTACIÓN DE EDIFICIOS
        <br />
        <span className="font-extralight text-sm text-slate-500">
          Building Manager App
        </span>
        <br />
        <span className="font-extralight text-sm text-slate-500">
          Made By: Bryan De La Cruz
        </span>
      </h1>
      <div className="h-[1px] bg-slate-400"></div>
      <h2 className="text-black font-bold text-xl mb-6 mt-4 text-center">
        EDIFICIO PANDO
      </h2>
      <div className="flex flex-col mb-4">
        <label className="mb-2">Tu correo</label>
        <div className="flex gap-x-[2px]">
          <div className="bg-white py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <input
            className="w-full px-4 
            rounded-r-md 
            outline-none 
            hover:ring-1 hover:ring-sky-500 
            focus:ring-1 focus:ring-slate-400 focus:bg-slate-100  
            focus:hover:ring-1 focus:hover:ring-sky-500"
            type="email"
            placeholder="ejemplo@company.com"
          />
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2">Tu Contraseña</label>
        <div className="flex gap-x-[2px]">
          <div className="bg-white py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-3 h-6"
            >
              <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
            </svg>
          </div>
          <input
            className="w-full px-4 
            rounded-r-md 
            outline-none 
            hover:ring-1 hover:ring-sky-500 
            focus:ring-1 focus:ring-slate-400 focus:bg-slate-100  
            focus:hover:ring-1 focus:hover:ring-sky-500"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <input className="accent-sky-600 w-4" type="checkbox" />
          <label>Recuérdame</label>
        </div>
        <a className="text-sm text-sky-500 font-semibold hover:text-sky-700" href="">
          ¿Olvidaste la contraseña?
        </a>
      </div>
      <button className="w-full mb-8 py-2 rounded-md bg-sky-500 text-white font-semibold hover:bg-sky-700">
        Ingresar
      </button>
    </form>
  );
};

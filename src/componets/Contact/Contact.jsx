import { useState } from "react";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowModal(true);
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 2000);
    emailjs
      .sendForm(
        "service_zkt5ihs",
        "template_rhwnge1",
        form.current,
        "cFJdOoNFwFG0oZsWk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="text-center">
      {showModal ? (
        <>
          <div className="top-28  mx-auto flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-1/12 ">
            <div className="relative w-full mx-auto max-w-3xl">
              <div className="relative p-4 flex-auto text-black bg-green-700 rounded-3xl font-bold">
                Mensaje enviado
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-2/5 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-auto"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font pb-10">
            !Contacta conmigo!
          </h2>

          <div className="relative mb-4">
            
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Introduce tu nombre"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
           
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Introduce tu email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            
            <textarea
              id="message"
              name="message"
              placeholder="Escribe aqui"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

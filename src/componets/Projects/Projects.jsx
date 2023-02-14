import { projects } from "./data";
import "./style.css";
export default function Projects() {
  return (
    <section
      id="projects"
      className="xs:py-10 sm:py-32 text-center lg:px-10 xs:px-5 sm:px-10 md:px-10  text-gray-300 h-[100%]"
    >
      <div className="flex lg:flex-row flex-wrap xs:flex-col gap-10 justify-center ">
        {projects.map((project) => (
          <div
            id="cardProject"
            key={project.tittle}
            className=" flex flex-col xs:w-12/12 lg:w-3/12 2xl:w-3/12 p-6 "
          >
            <h1 className="title-font text-2xl font-bold text-indigo-500 pb-3">
              {project.tittle}
            </h1>

            <div className="flex flex-col ">
              <img
                alt={project.tittle}
                className="w-full h-full object-contain rounded-md"
                src={project.img}
              />

              <footer className="flex flex-row flex-wrap px-4 pb-5 text-gray-300 mb-5 mt-6">
                {project.technologies === undefined
                  ? ""
                  : project.technologies.map((tch, i) => {
                      return (
                        <div
                          key={i}
                          className="border border-white xs:w-3/12 lg:w-6/12 xs:m-auto text-gray-300"
                        >
                          <h1>{tch}</h1>
                          
                        </div>
                      );
                    })}
              </footer>
              <div className="w-full flex flex-row justify-between">
                <a
                  className="text-white bg-indigo-500 border-0 font-bold focus:outline-none hover:bg-indigo-600 rounded xs:w-4/12 sm:w-3/12 md:w-5/12 py-1"
                  href={project.github}
                  target={"_blank"}
                >
                  Ver Código
                </a>
                <a
                  className="text-white bg-indigo-500 border-0 font-bold focus:outline-none hover:bg-indigo-600 rounded xs:w-4/12 sm:w-3/12 md:w-5/12 py-1"
                  href={project.link}
                  target={"_blank"}
                >
                  Ver App
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

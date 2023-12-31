import React from "react";
import Head from "./Head";

function OurService() {
  const randomNumber = Math.floor(Math.random() * 600);

  return (
    <div>
      <Head page="Our Services" />
      <div
        className="container mx-auto py-8 px-4 md:py-12
    mt-8 md:mt-12
  "
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-0">
          <div className="md:flex-[2_0_0%] w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <img src="https://picsum.photos/1920/1080" alt="" />
          </div>
          <div
            className="flex-1 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4
        px-4 md:px-8 lg:px-12 xl:px-16 
      "
          >
            <h1
              className="text-2xl font-bold text-[#F8A600] md:text-3xl xl:text-5xl
            mb-4 md:mb-8
        "
            >
              Specialists in aluminum processing
            </h1>
            <p className="text-sm text-[#565757] md:text-base lg:text-lg">
              Nel 2019, Alumac China ha iniziato a collaborare con i partner
              internazionali per espandere la sua presenza globale. Grazie a
              questa nuova iniziativa, Alumac può offrire un servizio più rapido
              ed efficiente ai suoi clienti in tutto il mondo. Alumac ha sempre
              puntato sulla qualità dei suoi prodotti e sulla soddisfazione dei
              clienti. Grazie alle partnership con le migliori aziende
              produttrici di semilavorati di alluminio,
            </p>
          </div>
        </div>
        <div
          className="flex flex-wrap justify-between gap-4 md:gap-6
        mt-8 md:mt-12
    "
        >
          <img
            src={`https://picsum.photos/id/${randomNumber}/1920/1080`}
            className="flex-1 h-[300px] w-[300px] object-cover "
          />
          <img
            src={`https://picsum.photos/id/${randomNumber}/1920/1080`}
            className="flex-1 h-[300px] w-[300px] object-cover "
          />
          <img
            src={`https://picsum.photos/id/${randomNumber}/1920/1080`}
            className="flex-1 h-[300px] w-[300px] object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default OurService;

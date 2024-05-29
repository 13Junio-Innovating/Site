import React from "react";
import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";
import ContactForm from "./components/ContactForm";

const videos = [
  { id: 1, url: "https://www.youtube.com/embed/LTBbhkDfooI" },
  { id: 2, url: "https://www.youtube.com/embed/Ds6D5jpTalI" },
  { id: 3, url: "https://www.youtube.com/embed/p-z6_EUNV6g" },
  { id: 4, url: "https://www.youtube.com/embed/LTBbhkDfooI" },
  { id: 5, url: "https://www.youtube.com/embed/Ds6D5jpTalI" },
  { id: 6, url: "https://www.youtube.com/embed/p-z6_EUNV6g" },
];

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="py-8 m-25">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 px-20">Família Amanhecer</h2>
          <p>Programa de desenvolvimento da Inteligência Humana e Emocional.</p>
          <p>
            <b>OBJETIVO:</b> Desenvolver práticas relacionadas à Psicologia Positiva,<br/>
            Terapia Cognitiva Corpomental (TCC) para cuidados com a Saúde Mental<br/>
            e Bem-estar fortalecendo as habilidades da emoção e proporcionando a<br/>
            descoberta de forças, valores e atitudes, bem como a aceitação da<br/>
            vulnerabilidade.
          </p>
          
          <h2 className="text-2xl mb-4 px-20"><b>Adriana Moreira da Cunha</b></h2>
          <h4 className="text-2xl mb-4 px-20"><i>Terapeuta e Coach</i></h4>
          <h4>
            Fundadora do Instituto Crer & SER Gente e idealizadora do Projeto:<br/>
            Adolescer para a Vida e do Programa de Desenvolvimento Pessoal e<br/>
            Inteligência Emocional “Família Amanhecer”. <p>Estudante de Psicologia
            Positiva, com 29 anos de experiência como Educadora<br/> nas Prisões do
            Estado de São Paulo.</p>
            <p>Formada em Letras, Pedagogia, Psicopedagogia,<br />
            Docência do Ensino Superior, Educação de Jovens e Adultos.</p> 
            <p>Coach pelo IBC, Kidcoaching pelo Instituto de Coaching Infantojuvenil.</p><br />
            Formação Power Profissional pelo Instituto Eduardo Shinyashiki:<br />
            Practitioner em Programação Neurolinguística, Mentoring e
            Neurocoaching.<br/> Professora e Ex-Coordenadora Pedagógica na ETEC<br />
            “Prof. Milton Gazzetti” – Centro Paula Souza. Atua como Professora,<br />
            terapeuta integrativa, Coach, Pedagoga, Psicopedagoga, Mentora,<br />
            escritora e Palestrante.
          </h4>
          <p><b>@adrianacunhacoach</b></p>
        </div>
      </div>
      <div id="videos" className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 px-20">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} title={video.title} url={video.url} />
          ))}
        </div>
      </div>
      <div id="contact" className="bg-white bg-opacity-15 py-8 m-26">
        <div className="container px-20">
          <h2 className="text-2xl font-bold mb-4 px-20">Contatos</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;

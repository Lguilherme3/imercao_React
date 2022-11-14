import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/componentes/CSSReset";
import Menu from "../src/componentes/Menu"
import { StyledTimeline } from "../src/componentes/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //  backgroundColor: "red" 
    };
    const [valorDoFiltro, setvalorDoFiltro] = React.useState("");
    

  return (
    <>

    <CSSReset />
    <div>
      <Menu valorDoFiltro={valorDoFiltro} setvalorDoFiltro={setvalorDoFiltro}/>
      <Header />
      <Timeline searchValue={valorDoFiltro} playlist={config.playlist} />
    </div>
    </>
  );
}
export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ background }) => background});
  /* background-image: url(${config.background}); */
  height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner background={config.background}/>

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({searchValue, ...props}) {
  // console.log("dentro do componente", props.playlist);
  const playlistNames = Object.keys(props.playlist);
  //statement
  //retorno por expressao

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlist[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = searchValue.toLowerCase()
                  return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  );
}

import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/componentes/CSSReset";
import Menu from "../src/componentes/Menu"
import { StyledTimeline } from "../src/componentes/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //  backgroundColor: "red" 
    };

  return (
    <>

    <CSSReset />
    <div>
      <Menu />
      <Header />
      <Timeline playlist={config.playlist} />
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
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

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

function Timeline(props) {
  console.log("dentro do componente", props.playlist);
  const playlistNames = Object.keys(props.playlist);
  //statement
  //retorno por expressao

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlist[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.tittle}</span>
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

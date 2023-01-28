import * as React from "react";
import "../styles/indexStyle.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import NFTSample from "../components/NFTSample";
import star from "../images/star.svg";
import presley from "../images/presley.png";
import edward from "../images/edward.png";
import jason from "../images/jason.png";
import jessica from "../images/jessica.png";
import leonft from "../images/leonft.svg";
import atom from "../images/atom.svg";
import atomBright from "../images/atom-bright.svg";
import arrow from "../images/down-arrow.svg";


export const Head = () => {
  return (
    <>
      <title>MiNFT - Leo</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  )
}

export default function Home() {
  let [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="page-body">
      <Header props={{isMenuOpen, setIsMenuOpen}} />

      <main>
        <section id="about">
          <div className="page-title">
            <h1>Leo NFT Comes With</h1>
            <img src={atomBright} alt="atom" />
          </div>
          <div className="about-title">
            <h2>Multiple Utilities</h2>
            <img src={atom} alt="atom" className="about-atom" />
            <img src={star} alt="star" className="about-star" />
          </div>

          <div className="about-content">
            <p className="leo-text">LEO NFT</p>
            <div className="about-content-left">
              <img src={arrow} alt="arrow" className="about-arrow" />
              <table>
                <tr>
                  <td className="col-1">
                    01
                  </td>
                  <td className="col-2">
                    NFT Staking.
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    02
                  </td>
                  <td className="col-2">
                    Metaverse Gaming.
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    03
                  </td>
                  <td className="col-2">
                    Royalty paid back to holders.
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    04
                  </td>
                  <td className="col-2">
                    Merch store and many more.
                  </td>
                </tr>
                <tr>
                  <td className="col-1">
                    05
                  </td>
                  <td className="col-2">
                    Deflationary Collection.
                  </td>
                </tr>
              </table>
            </div>
            <img src={leonft} alt="leonft" className="leonft-desktop" />
            <div className="about-content-right">
              <img src={leonft} alt="leonft" className="leonft-mobile" />
              <div className="nft-box">
                <NFTSample props={{pic: false}} />
              </div>
            </div>
          </div>
        </section>

        <section id="mint">

        </section>

        <section id="team">
          <div className="section-title">
            <h2>The Team</h2>
            <img src={star} alt="star" />
          </div>
          <div className="team-cards-wrap">
            <div className="team-card-single">
              <TeamCard props={{name: "Presley", division: "UI/UX Design", image: presley}} />
            </div>
            <div className="team-card-single">
              <TeamCard props={{name: "Edward", division: "Frontend Developer", image: edward, height: "95%"}} />
            </div>
            <div className="team-card-single">
              <TeamCard props={{name: "Jessica", division: "Blockchain Expert", image: jessica, height: "100%"}} />
            </div>
            <div className="team-card-single">
              <TeamCard props={{name: "Jason", division: "NFT Designer", image: jason}} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

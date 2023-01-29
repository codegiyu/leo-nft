import * as React from "react";
import "../styles/indexStyle.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import NFTSample from "../components/NFTSample";
import RoadmapRow from "../components/RoadmapRow";
import star from "../images/star.svg";
import presley from "../images/presley.png";
import edward from "../images/edward.png";
import jason from "../images/jason.png";
import jessica from "../images/jessica.png";
import leonft from "../images/leonft.svg";
import atom from "../images/atom.svg";
import atomBright from "../images/atom-bright.svg";
import arrow from "../images/down-arrow.svg";
import phase1 from "../images/phase1.png";
import phase2 from "../images/phase2.png";
import phase3 from "../images/phase3.png";
import phase4 from "../images/phase4.png";
import phase5 from "../images/phase5.png";
import { Link } from "gatsby";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";


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

const phase1Props = {
  pic: phase1, 
  num: "01", 
  text: "Mint 10k Leos.", 
  text2: "Rarity Ranks of collection will be revealed."
}

const phase2Props = {
  pic: phase2, 
  num: "02", 
  text: "NFT Staking.", 
  text2: "Royalty up to 30% gets paid back."
}

const phase3Props = {
  pic: phase3, 
  num: "03", 
  text: "Merch Store to be launched.",
}

const phase4Props = {
  pic: phase4, 
  num: "04", 
  text: "Metaverse Gaming.",
}

const phase5Props = {
  pic: phase5, 
  num: "05", 
  text: "Deflationary Collection: Every 6 months, the royalties collected will be used to buy NFTs and burn it.",
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
          <div className="section-title">
            <h2>Mint</h2>
            <img src={star} alt="star" />
          </div>

          <div className="mint-content">
            <div className="mint-left">
              <p>
                The Motivational Leopard is a collection of 10,000 unique digital collectibles 
                living on the solana blockchain and comes with multiple utilities 
                mentioned above. Royalties will be used to buy NFTs and burn it 
                from collection which makes it Scary & Deflationary.
              </p>
              <div className="button-line">
                <button>Mint</button>
              </div>
            </div>

            <div className="mint-right">
              <NFTSample props={{pic: true}} />
            </div>

            <div className="button-line mobile">
              <button>Mint</button>
            </div>
          </div>
        </section>

        <section id="roadmap">
          <div className="section-title">
            <h2>Roadmap</h2>
            <img src={star} alt="star" />
          </div>

          <div className="roadmap-content">
            <RoadmapRow props={phase1Props} />
            <RoadmapRow props={phase2Props} />
            <RoadmapRow props={phase3Props} />
            <RoadmapRow props={phase4Props} />
            <RoadmapRow props={phase5Props} />
          </div>
        </section>

        <section id="team">
          <div className="section-title">
            <h2>The Team</h2>
            <img src={star} alt="star" />
          </div>
          <div className="team-cards-wrap">
            <div className="team-card-single">
              <TeamCard props={{name: "Presley", division: "UI/UX Designer", image: presley}} />
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
        <Link to="#about">
          <div className="back-to-top">
            <HiOutlineArrowNarrowUp className="back-to-top-icon" />
          </div>
        </Link>
      </main>

      <Footer />
    </div>
  )
}

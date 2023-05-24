/* https://lorwatch.vercel.app/ */

import * as React from 'react'
import '../css/react-base.css'
import '../css/animations.css';
import '../css/second_section.css';
import '../css/roadmap.css';
import '../css/real_roadmap.css';
import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Accordion from './Accordion';

function Landing () {
    const navigate = useNavigate();

    function goToDetailed(){
      navigate('/detailed', { replace: true });
    }

    const team_fund = "Team funds (0% on buys, 2% on sells, average 1%) will be untilized for team compensation. Eightly percent will be allocated to the core team (currently four members), while remaining 20% will be used to team development.";
      
    return (
      <div className="App">
        <Navbar name="Landing"/>

        <div className='relative h-full' style={{backgroundColor: "#1F2633"}}>
          <div className='flex h-full flex-col items-center relative'>
              <img className='absolute top-0' src="https://raydium.io/backgroundImages/home-bg-element-1.png"></img>
              {/* FirstSection Content */}
              <div className='first_section relative px-4 sm:px-6 flex flex-col justify-center items-center w-full' style={{height: "1000px"}}>
                <div className="absolute inset-0">
                  <video autoPlay loop muted className="absolute h-full w-full object-cover">
                    {/* <source src="img/hero.webm" type="video/webm"></source> */}
                    <source src="background-header.mp4" type="video/mp4"></source>
                  </video>
                </div>

                {/* Title */}
                <h1 className='relative rounded-lg bg-ebony-clay-500/70 text-4xl text-center only:font-extrabold tracking-tight text-white sm:text-6xl sm:leading-none xl:text-6xl' style={{ color: "#5cce11" }}>
                  PEPE BORN&nbsp;
                  {/* <span className='bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent '>|&nbsp;</span> */}
                  {/* <span className='text-primary-400 '>Marketplace NFT&nbsp;</span> */}
                  <div className='flex justify-center bg-gradient-to-r from-primary _sm:text-3xl via-white to-white bg-clip-text text-transparent '>Marketplace NFT & Swap</div>
                </h1>
                {/* SubTitle */}
                <p className='relative text-center mt-6 rounded-lg bg-ebony-clay-500/70 text-2xl text-left text-gray-300 lg:text-3xl _sm:text-lg xl:text-3xl' style={{ color: "#ffffff" }}>The Pioneer of Sustainability Meme Coin On Web3.0</p>
                {/* Buttons */}
                <div className='mt-5 w-full sm:max-w-lg lg:ml-0'>
                  <div className='mt-24 items-center gap-5 flex justify-center text-white'>
                    <a href="#">
                      <div className='focus:ring-4 focus:outline-none focus:ring-spring-green-800 group-hover:from-spring-green-400 group-hover:to-cerulean-600 text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg group bg-gradient-to-br from-primary-500 via-primary-600 to-blue-500  text-white min-w-fit font-bold text-base hover:from-blue-500 hover:via-primary-600 hover:to-primary-500  hover:cursor-pointer '>
                        <span className='bg-opacity-0 hover:bg-opacity-20 relative px-5 py-2.5 transition-all ease-in duration-75 bg-ebony-clay-500 rounded-md flex flex-row font-bold min-w-fit items-center'>
                          Launch APP
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
               {/* SecondSection Content */}
               <div className='relative flex flex-col justify-center items-center w-full h-full'>
                <img src="https://raydium.io/backgroundImages/home-bg-element-3.png" className='absolute top-0' style={{top: "0%", width: "100%"}}></img>
                <p className='text-white text-4xl font-bold pt-36'>How to participate</p>
                <div className="second_section">
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <h2>01</h2>
                        <h3>Buy / Mint NFT</h3>
                        <p>You can buy / mint the PBN NFT at our partner marketplace or our website, the cost for minting is only 3$, and hold it on your wallet, because we will distribute the token airdrop based on the NFT snapshot holder in the wallet</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <h2>02</h2>
                        <h3>Hold NFT and Get Airdrop</h3>
                        <p>Just hold your NFT in your wallet, and we will do a snapshot at the end of the event (Phase2), don't let your NFT leave your wallet, otherwise you won't get a snapshot for the airdrop</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <h2>03</h2>
                        <h3>Stake And Earn</h3>
                        <p>You can stake your NFT (PBN) and your Tokens (PBT) on our website when we launch staking for NFT and tokens to get a pool prize as your rewards</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <section className='relative mb-8 pt-32'>
                <div className='text-4xl text-white font-bold'>Meet The Team</div>
              </section >
              <section id="Developer" className='relative flex flex-col justify-center items-center w-full h-full'>
                {/* <img src="https://raydium.io/backgroundImages/home-bg-element-3.png" className='absolute top-0' style={{top: "-60%", width: "100%"}}></img> */}

                <div className="box-container grid grid-cols-4 _lg:grid-cols-1 m-auto">
                  <div className='flex justify-center'>
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/1.jpg" className='absolute top-0 left-0 h-full w-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Aero</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Project Lead</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                        <div className='flex flex-row justify-center pt-3'>
                          <a href="https://twitter.com/pepebornlabs" target="_blank"><img className='pr-5' src="img/twitter.svg" width="45"></img></a>                  
                          <a href="https://t.me/pepeborn" target="_blank"><img className='pr-5' src="img/telegram.svg" width="45"></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>

                  <div className='flex justify-center'>
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/2.jpg" className='absolute top-0 left-0 h-full w-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Ace</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Community Manager</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                        <div className='flex flex-row justify-center pt-3'>
                          <a href="https://twitter.com/pepebornlabs" target="_blank"><img className='pr-5' src="img/twitter.svg" width="45"></img></a>                  
                          <a href="https://t.me/pepeborn" target="_blank"><img className='pr-5' src="img/telegram.svg" width="45"></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>

                  <div className='flex justify-center'>
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/3.jpg" className='absolute top-0 left-0 h-full w-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Martin</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Developer Project</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                        <div className='flex flex-row justify-center pt-3'>
                          <a href="https://twitter.com/pepebornlabs" target="_blank"><img className='pr-5' src="img/twitter.svg" width="45"></img></a>                  
                          <a href="https://t.me/pepeborn" target="_blank"><img className='pr-5' src="img/telegram.svg" width="45"></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  
                  <div className='flex justify-center'>
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/4.jpg" className='absolute top-0 left-0 h-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Lucky Cat</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Marketing Manager</div>

                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                        <div className='flex flex-row justify-center pt-3'>
                          <a href="https://twitter.com/pepebornlabs" target="_blank"><img className='pr-5' src="img/twitter.svg" width="45"></img></a>                  
                          <a href="https://t.me/pepeborn" target="_blank"><img className='pr-5' src="img/telegram.svg" width="45"></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  
                  <div className='flex justify-center'>
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/5.jpg" className='absolute top-0 left-0 h-full w-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <div className='text-white text-2xl text-left pl-4'>OxMinion</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Artist</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                        <div className='flex flex-row justify-center pt-3'>
                          <a href="https://twitter.com/pepebornlabs" target="_blank"><img className='pr-5' src="img/twitter.svg" width="45"></img></a>                  
                          <a href="https://t.me/pepeborn" target="_blank"><img className='pr-5' src="img/telegram.svg" width="45"></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>

                  <div className='flex justify-center'>
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/6.jpg" className='absolute top-0 left-0 h-full w-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Edestuss</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Designer</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                        <div className='flex flex-row justify-center pt-3'>
                          <a href="https://twitter.com/pepebornlabs" target="_blank"><img className='pr-5' src="img/twitter.svg" width="45"></img></a>                  
                          <a href="https://t.me/pepeborn" target="_blank"><img className='pr-5' src="img/telegram.svg" width="45"></img></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>

              </div>
              </section>
          </div>
        </div>

        {/* FAQ */}
        <section  className='grid grid-cols-2 _md:grid-cols-1 pt-10'>
          <div className='flex flex-col justify-start items-center pt-10'>
            <div className='text-white text-3xl font-bold pb-10'>FAQ</div>
            {/* <Accordion title="How are team funds distributed?" content={team_fund} /> */}
            <Accordion title="How are team funds distributed?" content="Team funds will be distributed in 4 batches for 1 year, that means every 3 months team funds will be distributed as much as 25% of 10% tokenomics" />
            <Accordion title="What is Project Pepe Born?" content="Pepe Born is not just a token meme and NFT, Pepe Born is a Market Place and Market Swap project for any token." />
            <Accordion title="Where does Pepe Born income come from?" content="From the Tax that we take in trading and listing NFT/Token partner on our Market Place and Market Swap." />
            <Accordion title="When will Pepe Born Market Place and Market Swap be launched?" content="In accordance with the Roadmap that we provided, in Phase 3" />
            <Accordion title="How many total supply Pepe Born Token?" content="Pepe Born is have 100B max supply" />
            <Accordion title="What is the Supply NFT (PBN) for Basic NFT?" content="We have 10,000 Supply for NFT (PBN), and 3,333+1 NFT for Fusion (Merging 3 NFT Basic (PBN) + Token (PBT) )" />
            <Accordion title=" Is there any Token burning plan?" content="Yes we have. We will allocate 20% Pepe Born income funds to buyback and burn Pepe Born Token (PBT) gradually" />
            <Accordion title="How do you ensure that Pepe Born NFT (PBN) will worth something in the future?" content="We will set Pepe Born (PBN) floor price, if there people sell PBN under floor price, we will automatically buyback those nfts and send into deadwallet (Burn)" />
            <Accordion title="How will Team use community funds from NFT (PBN)?" content="t will be used for liquidity, buyback and burn, marketing, operational and development (Build)" />
            <Accordion title="Can you explain the details of NFT, Type and Rarity?" content="Alright, We will explain the details of NFT (PBN) Type and Rarity, Pepe Born NFT (PBN) has 2 Types of NFT... The first type is Basic PBN with supply of 10,000 NFT which you can mint at the place we recommend, Basic PBN NFT has 10 supplies with Rarity 1/1 and 10 supply Rarity 1/1+Legendary... The second type is Fusion PBN with a supply of 3333+1 NFT, You can get this NFT by combining 3 NFT Basic PBN and Token PBT, so we can reduce the NFT supply figure from 10,000 to 3,333+1" />
            <Accordion title="And what does +1 mean in Basic PBN Second Type NFT?" content="+1 is for Ultimate Fusion NFT, to get this NFT you have to combine 7 NFT Basic PBN 1/1+Legendary and PBT Tokens, so if you have 7 NFT Basic PBN 1/1+Legendary then we have prepared a Ultimate Fusion PBN NFT for you to combine into one, and believe us, we will set and maintain the floor price of this NFT" />
            <Accordion title="There is no more Rarity in the second NFT Type other than +1" content=" Of course there is, as we explained earlier, to be able to get the second type of NFT you need 3 Basic PBN NFT. If you have 3 Basic PBN NFT with Rarity 1/1 then you will get a Rare Fusion PBN NFT with a Supply of 3 NFTs, and if you have 3 NFT 1/1+Legendary then you will get NFT Super Fusion PBN with 3 NFT supply" />
          </div>
          <div className='flex justify-center items-center px-2 _md:py-7'>
            <img src="img/large_logo.png" className='w-2/3'></img>
          </div>
        </section >

        {/* Tokenomics */}
        <section  id="Tokenomics" className='flex flex-col justify-center items-center pt-20 pb-32'>
          <div>
            <div className='relative font-bold text-3xl text-white pb-10'>TOKENOMICS</div>

            <div className='tokenomics' style={{width: "1200px"}}>
              <div className='flex flex-row text-left _lg:flex-col w-full _lg:pl-10'>
                <div className='flex flex-col' style={{width: "20%"}}>
                  <div className='text-gray-600 text-lg font-bold'>FairLaunch</div>
                  <div className='text-white text-lg font-bold'>20%</div>
                  <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.2)"}}></div>
                </div>
                <div className='flex flex-col' style={{width: "33%"}}>
                  <div className='text-gray-600 text-lg font-bold'>Liquidity</div>
                  <div className='text-white text-lg font-bold'>33%</div>
                  <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.3)"}}></div>
                </div>
                <div className='flex flex-col' style={{width: "20%"}}>
                  <div className='text-gray-600 text-lg font-bold'>Marketing and CEX Listing</div>
                  <div className='text-white text-lg font-bold'>20%</div>
                  <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.4)"}}></div>
                </div>
                <div className='flex flex-col' style={{width: "10%"}}>
                  <div className='text-gray-600 text-sm font-bold pt-2'>Staking Reward</div>
                  <div className='text-white text-lg font-bold'>10%</div>
                  <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.5)"}}></div>
                </div>
                <div className='flex flex-col' style={{width: "10%"}}>
                  <div className='text-gray-600 text-sm font-bold pt-2'>Airdrop</div>
                  <div className='text-white text-lg font-bold'>10%</div>
                  <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.6)"}}></div>
                </div>
                <div className='flex flex-col' style={{width: "7%"}}>
                  <div className='text-gray-600 text-lg font-bold'>Team</div>
                  <div className='text-white text-lg font-bold'>7%</div>
                  <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.7)"}}></div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-4 pt-10 _md:grid-cols-2'>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>0</p>
                <p className='text-white text-lg font-bold'>Funded Projects</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>0</p>
                <p className='text-white text-lg font-bold'>Unique Participants</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>$0</p>
                <p className='text-white text-lg font-bold'>Raised Capital</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>$0</p>
                <p className='text-white text-lg font-bold'>Inital Mark Cap</p>
              </div>
            </div>
          </div>
        </section >

        {/* Roadmap */}
        {/* Title */}
        <section    className='relative mb-8 pt-10'>
          <div className='text-4xl text-white font-bold'>Roadmap</div>
        </section >
        <section id="Roadmap" className='flex flex-row _lg:flex-col justify-center'>
        {/* <div className='flex justify-center'> */}
        <div className="card rgb" style={{width: "20%"}}>
          <div className="card-image" ></div>
          <div className="card-text">
            <h2 className={"text-center mb-4"}>Phase 1</h2>
            <div className='text-gray-500 text-sm md:pl-24 lg:px-2 sm:px-10'>
              <p style={{color: "white"}}>1. Launch Site V1<br></br></p>
              2. NFT Launch<br></br>
              3. Presale / Minting NFT ( PBN )<br></br>
              4. FairLaunch Token ( PBT )<br></br>
              5. Audited<br></br>
              6. Listing PBN on Marketplace<br></br>
              7. Listing PBT on PancakeSwap, Liquidity Added<br></br>
            </div>
          </div>
        {/* </div> */}
        </div>

        {/* <div className='flex justify-center'> */}
        <div className="card">
          <div className="card-image card2"></div>
          <div className="card-text card2">
            <h2 className={"text-center mb-4"}>Phase 2</h2>
            <div className='text-gray-500 text-sm md:pl-24 lg:px-2 sm:px-10'>
              1. Launch Staking Pool NFT ( PBN )<br></br>
              2. Launch Staking Pool Token ( PBT )<br></br>
              3. Airdrop Snapshot<br></br>
              4. Airdrop Distribution Phase 1<br></br>
              5. Grow 10K Community <br></br>
              6. Marketing Campaign and Partnership<br></br>
            </div>
          </div>
        {/* </div> */}
        </div>

        {/* <div className='flex justify-center'> */}
        <div className="card">
            <div className="card-image card3"></div>
            <div className="card-text card3">
              <h2 className={"text-center mb-4"}>Phase 3</h2>
              <div className='text-gray-500 text-sm md:pl-24 lg:px-2 sm:px-10'>
                1. Launch Site APP V2<br></br>
                2. Launch Site PepeBorn MarketPlace NFT <br></br>
                3. Launch Site PepeBorn MarketSwap ( DEX )<br></br>
                4. Growing more usecase for PBT and PBN ( Will be taken from community voting )<br></br>
                5. CEX Listing<br></br>
              </div>
            </div>
        </div>

{/* <div className='flex justify-center'> */}
<div className="card">
            <div className="card-image card4"></div>
            <div className="card-text card4">
              <h2 className={"text-center mb-4"}>Phase 4</h2>
              <div className='text-gray-500 text-sm md:pl-24 lg:px-2 sm:px-10'>
                Coming soon after community voting to determine next usecase for PBN and PBT
              </div>
            </div>
        </div>

        </section>

        <Footer />
      </div>
    );
}

export default Landing;

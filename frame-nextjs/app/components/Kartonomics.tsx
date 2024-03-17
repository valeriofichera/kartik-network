import "animate.css";
import "../styles/Animations.css";
import kartonomics from "../assets/kartonomics.svg";
import smile_icon from "../assets/smile_icon.svg";
import personUp_icon from "../assets/personUp_icon.svg";
import magic_icon from "../assets/magic_icon.svg";
import ellipse from "../assets/ellipse.svg";
import Image from "next/image";

export default function Kartonomics() {
  return (
    <div className="mt-[600px] pt-12" id="Tokenomics">
      <div className="grid grid-rows-1 grid-cols-4 gap-1 md:grid-cols-6 md:gap-2 lg:grid-cols-8 lg:gap-3 xl:grid-cols-12 xl:gap-4">
        <div className="row-start-1 row-span-1 col-start-1 md:col-span-6 md:mt-24 mt-0 lg:mt-0 lg:col-span-7 items-end justify-center item-hover hidden md:block ">
          <Image
            className="xl:w-screen lg:w-screen lg:ml-16 md:block hidden"
            src={kartonomics}
            alt="Kartonomics"
          />
          <Image
            src={ellipse}
            alt="Straightline"
            className="lg:ml-16 absolute w-[1200px] h-[500px] ml-[0px] mt-[-500px] z-[-1] opacity-65 item-hover-more"
          />
        </div>
        <div className="row-start-1 row-span-1 col-start-1 md:col-start-9 col-span-7 text-center flex flex-col">
          <div className="xl:mt-[70px] lg:mt-[-10px]">
            <h1 className="lg:mr-24 xl:mr-32 font-bold text-opacity-90 sm:text-4xl xs:text-3xl text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#ff7818] to-[#000000]">
              Future Utility <br />
            </h1>
            <h2 className="lg:mr-24 xl:mr-32 mt-2 text-sm xs:text-lg bg-clip-text text-transparent bg-gradient-to-b from-black to-[#000000]">
              from ETHGlobal Hackers <br />
              to the world
            </h2>

            <div className="flex flex-col text-left gap-5 xl:ml-1 lg:ml-1 md:m-8 m-4 ml-2 md:mb-0 mb-[-10px]">
              <div className="flex flex-row mt-5 ">
                <div>
                  <Image
                    className="h-[50px]"
                    src={magic_icon}
                    alt="smart contract security tooling"
                  />
                </div>
                <div className="flex flex-col cont">
                  <h2 className="text-lg font-bold">
                    Special AirDrops to ETHGlobal winners
                  </h2>
                  <h3 className="text-sm">
                    we will see on-chain if u got a price
                  </h3>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <Image
                    className="h-[50px]"
                    src={personUp_icon}
                    alt="risk management tooling for DeFi Protocols"
                  />
                </div>
                <div className="flex flex-col cont">
                  <h2 className="text-lg font-bold">
                    DAO governded treasury
                  </h2>
                  <h3 className="text-sm">
                    the KARTIK DAO ensures, Hackers get paid and incentivizes are aligned
                  </h3>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <Image
                    className="h-[50px]"
                    src={smile_icon}
                    alt="AI security simulation engine for web3"
                  />
                </div>
                <div className="flex flex-col cont">
                  <h2 className="text-lg font-bold">AI powered</h2>
                  <h3 className="text-sm">
                    AI voiceovers of Kartik Talwar enchance the experience
                  </h3>
                </div>
              </div>
            </div>
            <a className='lg:mr-24 xl:mr-32 mt-12 w-[210px] h-[60px] py-[15px] px-[17px] text-2xl font-bold inline-flex justify-center items-center gap-[10px] text-white rounded-[10px] bg-[#527BFF] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer"'>
              Buy $KARTIK
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[70px]"></div>
    </div>
  );
}
// import { Outlet } from "react-router-dom
import VectorGreen2 from "../assets/ui/VectorGreen2";
import boxImg from "../assets/images/waltzz.png";
import Logo from "../assets/ui/Logo";
import HorizontalLine from "../assets/ui/HorizontalLine";

import ActiveCheck from "../assets/ui/ActiveCheck";
import Unchecked from "../assets/ui/Unchecked";
import { Link, Outlet, useLocation } from "react-router-dom";
import ArrowBack from "../assets/ui/ArrowBack";

const Layout = () => {

const location = useLocation()



const pathName = location.pathname;


  return (
    <section className="bg-[#FFF2EF] flex">
      <div className=" fixed h-screen w-[400px] overflow-hidden  flex flex-col flex-shrink-0">
        <div className="relative h-[40%] w-full bg-chinese-black">
          <span className="relative z-[30] flex pl-[40px] pt-[40px]">
            <Logo />
          </span>

          <span className="relative z-[30] flex flex-col px-[40px] pt-[60px] text-white">
            <h1 className="mb-[10px] font-merchant text-[40px] leading-[1.1]">
              Infinite beauty awaits you
            </h1>
            <p className="pr-[70px] text-[13px] font-extralight text-[#d1d1d1]">
              Let’s help you find the right beauty products for your business
            </p>
          </span>

          <div className="absolute bottom-[-130px] z-[11] h-[400px] w-[500px] translate-x-[-20px] translate-y-[-80px] rotate-[10deg] overflow-hidden bg-chinese-black">
            <VectorGreen2 color="#ff4623" />
            <img
              className="absolute bottom-[-25%] right-[20%] mx-auto my-0 h-[150px] rotate-[-10deg] opacity-[0.4]"
              src={boxImg}
              alt=""
            />
          </div>
        </div>

        <div className="relative z-[10] h-[460px] w-full bg-layout-background bg-cover bg-center"></div>
      </div>

     <div className=" ml-[400px] w-[1060px] h-screen overflow-scroll flex-shrink"> 
      <section className="h-[50px] relative pl-[40px] pt-[30px] flex  w-full  ">
        <div className=" flex items-center  ">
          { <ActiveCheck/> }
        <span className=" text-[12px] text-[#6E6E6E]"> Account Type</span>  
        <HorizontalLine/>
        { pathName === "/"  ?  <Unchecked/>:<ActiveCheck/>   }
        <span className=" text-[12px] text-[#6E6E6E]">Personal Details</span> 
        <HorizontalLine/> 
        {pathName === "/email-verification"?  <ActiveCheck/> : <Unchecked/> }
        <span className=" text-[12px] text-[#6E6E6E]">Email Verification</span> 
        
        </div> 

  
          <p className=" flex items-center ml-auto mr-[40px] text-[14px] text-[#1E1E1E]">Already have an account?<Link to="?"className="ml-[5px] text-ginger-red">Sign In</Link></p>

        <Link to=".." className="absolute top-[90px] cursor-pointer">
          <ArrowBack/>
        </Link>
      </section>

      <section className="mt-[50px] w-full flex justify-center items-center">
        <Outlet/>
      </section>
     </div>

    </section>
  );
};

export default Layout;

import axios from "axios";
import React, { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import ChevDown from "../../assets/ui/ChevDown";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import PasswordInput from "../../components/PasswordInput";
import PillButton from "../../components/PillButton";
import { useDocumentTitle } from "../../resources/Resources";

interface BuyerAccount {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phoneNumber: string;
  dialCode: string;
  password: string;
}

const BuyerRegistrationForm = () => {
  const [newBuyerAccount, setNewBuyerAccount] = useState<BuyerAccount>({
    firstName: "",
    lastName: "",
    email: "",
    country: "Nigeria",
    phoneNumber: "",
    dialCode:"",
    password: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<any | null>(null);
  const [userCountry, setUserCountry] = useState<string | null>("🇳🇬 Nigeria");
  const [dialCode, setDialCode] = useState<string>("+234")
  const [inputInteraction, setInputInteraction] = useState<boolean >(false);

  useDocumentTitle("Buyer Onboarding | Ginger")
  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const countriesData = await axios.get("https://restcountries.com/v3.1/all");

        const filteredCountriesData = countriesData.data.filter(
          (country: any) => country.independent === true
        );

        setCountryData(filteredCountriesData);

        // Find and set dial code for the initial country
        const initialCountry = filteredCountriesData.find(
          (country: any) =>
            country.name.common.toLowerCase() === newBuyerAccount.country.toLowerCase()
        );

        if (initialCountry) {
          const dialCode =
            initialCountry.idd?.root +
            (initialCountry.idd?.suffixes ? initialCountry.idd.suffixes[0] : "");
          setDialCode(dialCode);
          setNewBuyerAccount(prevData => {
            return {...prevData, dialCode: dialCode}
          })
          
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    getAllCountries();
  }, [newBuyerAccount.country]);



  const setSelectValue = (countryName: string, countryNameAndEmoji: string) => {
    setUserCountry(countryNameAndEmoji);

    setNewBuyerAccount((prevData) => {
      return { ...prevData, country: countryName };
    });
          
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewBuyerAccount((prevData) => {
      return { ...prevData, [name]: value };
    });
    if (!inputInteraction) setInputInteraction(true);
  };


  const hasRequiredFields =(str:string)=> {
    const hasUppercase =  /[A-Z]/.test(str);
    const hasSpecialCharacter =  /[^a-zA-Z0-9]/.test(str);
    const hasNumber =  /\d/.test(str);
    const hasLengthAboveorEqualsEight = str.length >= 8
    const fName = newBuyerAccount.firstName
    const lName = newBuyerAccount.lastName
    const password= newBuyerAccount.password
    const email = newBuyerAccount.email
    const phoneNumber = newBuyerAccount.phoneNumber
    return (
      fName &&
      lName &&
      password &&
      email &&
      phoneNumber &&
      hasUppercase &&
      hasSpecialCharacter &&
      hasNumber &&
      hasLengthAboveorEqualsEight
    );
  }

  return (
    <div className="flex h-[610px] w-[480px] mt-[50px] flex-col items-center justify-center ">
      <h1 className="font-merchant leading-[1] text-[33px]">Let’s get started!</h1>
      <p className="text-[13px] mb-5  font-light text-[#262626]">
        Create your Ginger account to begin the journey
      </p>

      <form
        className="flex h-full w-full flex-col items-center"
        action=""
      >
        <div className="flex h-fit w-full justify-between ">
          <span className="w-[48%]">
           
            <TextInput
              inputName="firstName"
              inputType="text"
              label="First Name"
              value={newBuyerAccount.firstName}
              onChange={handleChange}
              setInputInteraction ={setInputInteraction} inputInteraction={inputInteraction}
            />
          </span>
          <span className="w-[48%]">
            <TextInput
              inputName="lastName"
              inputType="text"
              label="Last Name"
              value={newBuyerAccount.lastName}
              onChange={handleChange}
              setInputInteraction ={setInputInteraction} inputInteraction={inputInteraction}
            />
          </span>
        </div>

        <TextInput
          inputName="email"
          inputType="email"
          label=" Email Address"
          value={newBuyerAccount.email}
          onChange={handleChange}
          setInputInteraction ={setInputInteraction} inputInteraction={inputInteraction}
        />

        <section className="w-full">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className={` ${open ? "h-[290px] overflow-scroll" : "h-[50px] overflow-hidden"} relative mb-[10px] w-full cursor-pointer rounded-t-[5px] bg-white px-[15px] z-10 text-[13px] font-light text-[#262626] transition-all duration-500 ease-in-out`}
          >
            <ul className="">
              <h2 className="sticky top-0 flex w-full items-center justify-between bg-white py-[15px] text-[15px] font-semibold">
                {userCountry ? userCountry : "Country"}{" "}
                <span>
                  <ChevDown />
                </span>
              </h2>
              {countryData ? (
                countryData.map((country: any, idx: number) => {
                  return (
                    <li
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectValue(
                          country.name.common,
                          `${country.flag} ${"  "} ${country.name.common}`,
                        );
                      }}
                      key={idx}
                      className="flex items-center border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-100"
                    >
                      <span className="mr-2 text-[20px]">{country.flag}</span>{" "}
                      {country.name.common}
                    </li>
                  );
                })
              ) : (
                <h2>Loading countries...</h2>
              )}
            </ul>
          </div>
        </section>

        <PhoneNumberInput inputName="phoneNumber" inputType="text" label="Phone Number" value={newBuyerAccount.phoneNumber} onChange={handleChange} prefix={dialCode} setInputInteraction ={setInputInteraction} inputInteraction={inputInteraction}/>

        <PasswordInput inputName="password"  label="Create Your Password" value={newBuyerAccount.password} onChange={handleChange} setInputInteraction ={setInputInteraction} inputInteraction={inputInteraction}/>

       <button  className={`w-full my-[20px] ${!hasRequiredFields(newBuyerAccount.password) && "pointer-events-none  cursor-not-allowed"}`}><PillButton name="Create My Account" href="/email-verification" paddingY="py-[12px]" disabled={!hasRequiredFields(newBuyerAccount.password)}/></button> 

      <div className="text-[12px] text-[#6E6E6E] font-light mb-[10px]  px-[100px] text-center">By creating a Ginger account you agree to our  <span className=" cursor-pointer font-semibold text-ginger-red">Terms of Services</span> and <span className=" cursor-pointer font-semibold text-ginger-red">Privacy Policy</span> </div>
      </form>

    </div>
  );
};

export default BuyerRegistrationForm;

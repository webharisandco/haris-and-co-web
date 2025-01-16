import React, { useEffect, useState } from "react";
import PhoneIcon from "@/assets/images/icons/phoneIcon.svg";
import MailIcon from "@/assets/images/icons/mailIconWhite.svg";
import LocationIcon from "@/assets/images/icons/locationIconWhite.svg";
import LinkedInIcon from "@/assets/images/icons/linkedInWhiteICon.svg";
import facebookIcon from "@/assets/images/icons/facebookWhiteIcon.svg";
import instaIcon from "@/assets/images/icons/instaWhiteIcon.svg";
import XIcon from "@/assets/images/icons/xWhiteIcon.svg";
import RightArrow from "../../../assets/images/icons/whiteRightArrowIcon.svg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const location = {
  lat: 11.260711,
  lng: 75.779854,
};

function ContactSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded)
    return <div className="text-center text-lg">Loading Map...</div>;

  return (
    <div className="pt-[200px] bg-white">
      <div className=" px-[100px] flex justify-between relative z-10 bg-black">
        <div className="w-[50%] flex flex-col gap-[30px] py-[147px]">
          <div>
            <p className="text-white text-[48px]">Let's Have a Chat</p>
          </div>
          <div>
            <p className="text-white text-[20px]">
              Give us a call or email us to learn more about our services. Need
              a face-to-face discussion? Feel free to visit us. 
            </p>
          </div>
          <div className="flex gap-[90px]">
            <div className="flex items-center pr-[15px]">
              <div>
                <img src={PhoneIcon} alt="Phone Icon" />
              </div>
              <div className="self-stretch w-[1px] bg-white mx-[20px]"></div>
              <div className="flex flex-col gap-[12px]">
                <p className="text-white text-[18px]">For More Enquiries</p>
                <p className="text-white text-[18px]">+971 55 490 8107</p>
              </div>
            </div>
            <div className="flex items-center pr-[15px]">
              <div>
                <img src={MailIcon} alt="Mail Icon" />
              </div>
              <div className="self-stretch w-[1px] bg-white mx-[20px]"></div>
              <div className="flex flex-col gap-[12px]">
                <p className="text-white text-[18px]">Email Us At</p>
                <p className="text-white text-[18px]">haris@harisand.co</p>
              </div>
            </div>
          </div>
          <div className="flex items-center pr-[15px]">
            <div>
              <img src={LocationIcon} alt="Location Icon" />
            </div>
            <div className="self-stretch w-[1px] bg-white mx-[20px]"></div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-white text-[18px]">
                Abdulla Kamber Business Center, Room No 103, First Floor, Abu
                Baker Al Siddique St, Deira - Dubai
              </p>
            </div>
          </div>
        </div>

        <div className="w-[50%] ">
          <div className="bg-[#7744D5] relative z-30 p-6 md:p-10 rounded-3xl text-white max-w-lg mx-auto">
            <p className="text-[30px] font-medium mb-6">Get a Callback</p>

            <hr className="border-t border-white/50 mb-6" />

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-[40px] mt-[40px]">
                <div>
                  <label
                    for="fullName"
                    className="block text-[18px] font-medium"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="mt-[16px] block w-full rounded-md bg-white text-black focus:ring-2 focus:ring-purple-300 p-2"
                    required
                  />
                </div>
                <div>
                  <label
                    for="company"
                    className="block text-[18px] font-medium"
                  >
                    Company/Organization*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-[16px] block w-full rounded-md bg-white text-black focus:ring-2 focus:ring-purple-300 p-2"
                    required
                  />
                </div>
              </div>

              <div
                style={{ marginTop: "35px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[40px] "
              >
                <div>
                  <label for="phone" className="block text-[18px] font-medium">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-[16px] block w-full rounded-md bg-white text-black focus:ring-2 focus:ring-purple-300 p-2"
                    required
                  />
                </div>
                <div>
                  <label for="email" className="block text-[18px] font-medium">
                    Company Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-[16px] block w-full rounded-md bg-white text-black focus:ring-2 focus:ring-purple-300 p-2"
                    required
                  />
                </div>
              </div>

              <div style={{ marginTop: "35px" }} className="">
                <label for="message" className="block text-[18px] font-medium">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-[16px] block w-full rounded-md bg-white text-black focus:ring-2 focus:ring-purple-300 p-2"
                  required
                ></textarea>
              </div>
              <div
                style={{ marginTop: "43px" }}
                className="flex justify-between h-full items-center gap-[60px]"
              >
                <button
                  type="submit"
                  className="w-full h-[65px] bg-black text-white rounded-[13px] px-4 py-2 gap-[13px] text-[18px] flex items-center justify-center hover:bg-gray-800"
                >
                  Submit Now
                  <img src={RightArrow} alt="" />
                </button>
                <div className="flex w-full justify-center items-center gap-[35px]">
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className="w-[26px] h-full"
                  />
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-[26px] h-full"
                  />
                  <img
                    src={instaIcon}
                    alt="Instagram"
                    className="w-[26px] h-full"
                  />
                  <img src={XIcon} alt="X" className="w-[26px] h-full" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-[-100px] z-0">
        <LoadScript googleMapsApiKey="AIzaSyA89D1-afcBJwMoQFfQ2FKTolKLgI8UyvQ">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={18} // Adjust zoom as needed
            options={{ disableDefaultUI: true }} // Remove default UI for a cleaner look
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default ContactSection;

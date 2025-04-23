import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <div>
      <div className="flex justify-start gap-4 items-center">
        <div className="w-12 h-1 bg-indigo-500"></div>
        <h2 className="text-2xl font-bold text-black">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4 my-4">
          <div className="flex items-center gap-4">
            <figure className="p-1 bg-indigo-50 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <span className="text-md text-indigo-400">
                <FaPhone />
              </span>
            </figure>
            <article>
              <h6 className="text-md font-semibold text-gray-900">Phone</h6>
              <p className="text-gray-600">+1 555 123-4567</p>
            </article>
          </div>
          <div className="flex items-center gap-4">
            <figure className="p-1 bg-indigo-50 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <span className="text-md text-indigo-400">
                <MdEmail />
              </span>
            </figure>
            <article>
              <h6 className="text-md font-semibold text-gray-900">Email</h6>
              <p className="text-gray-600">info@yourbusiness.com</p>
            </article>
          </div>
          <div className="flex items-center gap-4">
            <figure className="p-1 bg-indigo-50 rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <span className="text-md text-indigo-400">
                <IoLocationSharp />
              </span>
            </figure>
            <article>
              <h6 className="text-md font-semibold text-gray-900">Location</h6>
              <p className="text-gray-600">123 Business St, City Name</p>
            </article>
          </div>
          <hr className="text-gray-300 my-2" />
          <div className="mt-2">
            <h2 className="text-md font-semibold text-gray-900">
              Connect With Us
            </h2>
          </div>
        </div>
        <div className="bg-gray-50 px-3 py-5 rounded-xl">
          <EmailForm></EmailForm>
        </div>
      </div>
    </div>
  );
}

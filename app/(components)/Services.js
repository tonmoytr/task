import Image from "next/image";
import bcase from "../../public/briefcase.png";

export default function Services() {
  return (
    <div className="my-6">
      <div className="flex justify-start gap-4 items-center mb-5">
        <div className="w-12 h-1 bg-indigo-500"></div>
        <h2 className="text-2xl font-bold text-black">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg p-4 grid grid-cols-1 gap-2 border border-gray-200 shadow-lg hover:-mt-1 ">
          <figure>
            <Image
              src={bcase}
              alt="briefcase"
              className="w-[30px] h-[30]"
            />
          </figure>
          <article>
            <h3 className="font-bold text-lg mb-2">Professional Service</h3>
            <p>We deliver high-quality services that exceed expectations.</p>
          </article>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 grid grid-cols-1 gap-2 border border-gray-200 shadow-lg hover:-mt-1">
          <figure>
            <Image
              src={bcase}
              alt="briefcase"
              className="w-[30px] h-[30]"
            />
          </figure>
          <article>
            <h3 className="font-bold text-lg mb-2">Professional Service</h3>
            <p>We deliver high-quality services that exceed expectations.</p>
          </article>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 grid grid-cols-1 gap-2 border border-gray-200 shadow-lg hover:-mt-1">
          <figure>
            <Image
              src={bcase}
              alt="briefcase"
              className="w-[30px] h-[30]"
            />
          </figure>
          <article>
            <h3 className="font-bold text-lg mb-2">Professional Service</h3>
            <p>We deliver high-quality services that exceed expectations.</p>
          </article>
        </div>
      </div>
    </div>
  );
}

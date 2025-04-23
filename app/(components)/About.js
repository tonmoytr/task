import Image from "next/image";
import logo from '../../public/logo.png'

export default function About() {
  return (
    <div className="">
      <div className="flex justify-start gap-4 items-center">
        <div className="w-12 h-1 bg-primary"></div>
        <h2 className="heading-secondary">About Us</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          <article>
            <p className="text-lg leading-relaxed text-gray-500 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              volutpat, urna in ultrices tincidunt, massa dui volutpat nisl, in
              <br />
              condimentum dui magna id eros. Phasellus aliquam odio eget est
              semper, in fermentum massa sollicitudin.
            </p>
          </article>
          <article>
            <h3 className="font-semibold text-xl my-2">Our Mission</h3>
            <p className="text-sm text-gray-600">
              Praesent non erat vel ligula facilisis lobortis. Aliquam
              erat volutpat. Mauris molestie varius sem.
            </p>
          </article>
        </div>
        <figure className="flex justify-center items-center bg-gray-200 rounded-2xl">
            <Image
            src={logo}
            alt="logo"
            className="h-[200px] w-auto"
            />
        </figure>
      </div>
    </div>
  );
}

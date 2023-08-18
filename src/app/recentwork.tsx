import { ButtonDemo } from "./butten";
import Link from "next/link";
import Image from "next/image";

const recentwork = () => {
  return (
    <section className="grid justify-center flex-wrap">
      <h1 className="font-bold text-5xl mt-20 text-center">
        My Recent Work
      </h1>
      <p className="font-semibold text-lg mt-5 text-center">
        Here are some of my recently completed projects.
      </p>
      <div className="mt-20 grid justify-center gap-y-5">
        <div className="flex justify-center gap-x-5">
          <span className="flex-1">
            <Link href="https://wfdesignbuild.com/">
              <Image
                src="/company1.png"
                alt="brand"
                className="rounded-xl"
                width={500}
                height={500}
              />
            </Link>
          </span>
          <span className="flex-1">
            <Link href="https://burkettandco.ca/">
              <Image
                src="/company2.png"
                alt="brand"
                className="rounded-xl"
                width={500}
                height={500}
              />
            </Link>
          </span>
          <span className="flex-1">
            <Link href="https://www.chronicled.com/">
              <Image
                src="/company3.png"
                alt="brand"
                className="rounded-xl"
                width={500}
                height={500}
              />
            </Link>
          </span>
        </div>
        <div className="flex justify-center gap-x-5">
          <span className="flex-1">
            <Link href="https://www.glcsolutions.ca/">
              <Image
                src="/company4.png"
                alt=""
                className="rounded-xl"
                width={500}
                height={500}
              />
            </Link>
          </span>
          <span className="flex-1">
            <Link href="http://coupalcranes.com/">
              <Image
                src="/company5.png"
                alt=""
                className="rounded-xl"
                width={500}
                height={500}
              />
            </Link>
          </span>
          <span className="flex-1">
            <Link href="https://www.wedler.com/">
              <Image
                src="/company6.png"
                alt=""
                className="rounded-xl"
                width={500}
                height={500}
              />
            </Link>
          </span>
        </div>
      </div>
      <Link href="https://github.com/Mafnankhxn"><ButtonDemo /></Link>
    </section>
  );
};

export default recentwork;

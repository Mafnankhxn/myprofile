
const myskills = () => {
  return (
    <><div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-10 md:mt-20">Skills</h1>
          <p className="text-center mt-2 md:mt-5 text-base md:text-lg font-semibold">Take a look at what I am capable of!</p>
      </div><section className="flex flex-col md:flex-row gap-4 md:gap-8 mt-5 md:mt-10 flex-wrap">
              <div className="bg-white md:flex-1 text-center grid shadow-lg rounded-xl p-4">
                  <h2 className="font-bold text-xl md:text-3xl mt-2 md:mt-5">Languages I Know:</h2>
                  <p className="text-base md:text-xl text-center mt-2 md:mt-4">
                      I have the motivation to learn new languages that can make our interactions with the machine easy.
                  </p>
                  <ul className="text-center text-base md:text-lg font-medium mt-4">
                      <li>Efficient in using JavaScript</li>
                      <li className="mt-2">Expert in using markup language like HTML</li>
                      <li className="mt-2">Can create responsive designs using CSS and skilled in using frameworks like Tailwind CSS</li>
                  </ul>
              </div>
              <div className="bg-white md:flex-1 text-center grid shadow-lg rounded-xl p-4 mt-4 md:mt-0">
                  <h2 className="font-bold text-xl md:text-3xl mt-2 md:mt-5">Frontend Developer:</h2>
                  <p className="text-base md:text-xl text-center mt-2 md:mt-4">
                      I have full expertise in frontend development and I am working as a frontend developer with Panaverse DAO and Panacloud.
                  </p>
                  <ul className="text-center text-base md:text-lg font-medium mt-4">
                      <li>Expert in using frameworks and libraries like React and Angular</li>
                      <li className="mt-2">Ensuring that web pages adapt and look good on various devices</li>
                      <li className="mt-2">Optimizing code, images, and assets for fast loading times and smooth user experiences</li>
                  </ul>
              </div>
              <div className="bg-white md:flex-1 text-center grid shadow-lg rounded-xl p-4 mt-4 md:mt-0">
                  <h2 className="font-bold text-xl md:text-3xl mt-2 md:mt-5">Designer:</h2>
                  <p className="text-base md:text-xl text-center mt-2 md:mt-4">
                      I am proficient in using tools like Adobe Photoshop, Illustrator, and XD to design and prototype user interfaces, graphics, and marketing materials.
                  </p>
                  <ul className="text-center text-base md:text-lg font-medium mt-4">
                      <li>Strong ability to visually communicate ideas and concepts through graphic design</li>
                      <li className="mt-2">Knowledgeable about typography principles and experienced in choosing and pairing fonts</li>
                      <li className="mt-2">Expert in creating both UI and UX eye-catching designs</li>
                  </ul>
              </div>
          </section></>

  )
}

export default myskills

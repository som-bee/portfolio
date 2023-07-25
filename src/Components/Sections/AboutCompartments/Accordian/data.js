const data = [
  {
    id: 1,
    title: "bio",
    content: (
      <div>
        <p>
          /** As a highly skilled and dedicated web developer with 2 years of
          experience, I am eager to take on new challenges and grow my skills.
          */
        </p>
        <p>
          /** Although I am new to ReactJS, I have a strong foundation of
          knowledge and expertise in web development, and I am confident in my
          ability to learn quickly and adapt to new technologies. */
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "interests",
    content: (
      <div>
        <ul className="list-group-interest list-group">
          <li>Web development</li>
          <li>React.js</li>
          
          <li>HTML, CSS, JavaScript</li>
          
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "experience",
    content: (
      <div className="experience gap-3 d-flex row      ">
        <div className="d-flex row gap-2">
          <h3> .NET Developer - InterraIT </h3>
          <span className="small"> 07/2023 - Present, Kolkata</span>
          <p>
            /** Responsible for creating responsive websites, managing front-end
            development, ensuring cross-browser compatibility, and optimizing
            website performance. */
          </p>
        </div>
        {/* <div className="d-flex row gap-2">
          <h3> Wordpress Web Developer - Voxturr </h3>
          <span className="small"> 05/2022 - 03/2023, Gurugram</span>
          <p>
            At Voxturr, as a Wordpress Web Developer, I built responsive,
            SEO-optimized websites, debugged errors, and customized the
            front-end using CSS. Contributed to visually appealing websites that
            met client requirements, enhancing my skills in Wordpress
            development and front-end customization. 
          </p>
        </div> */}
      </div>
    ),
  },
];

export default data;

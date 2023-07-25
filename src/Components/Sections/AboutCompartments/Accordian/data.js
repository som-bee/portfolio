const data = [
  {
    id: 1,
    title: "bio",
    content: (
      <div>
        <p>
        I'm Somnath Bera, a Computer Science Engineer with a passion for web development. 
        I hold a Bachelor of Technology degree in Computer Science and Engineering.
         Skilled in ASP.Net, Episerver CMS, JavaScript, Java, and SQL, I love building dynamic web applications.
          Let's connect and collaborate on exciting projects!
       
        </p>
        {/* <p>
           I'm Somnath Bera, a Computer Science Engineer with a strong passion for web development. I hold a Bachelor of Technology degree in Computer Science and Engineering with a CGPA of 9.64. Skilled in JavaScript, Java, and C, I love building dynamic web applications and have experience with Node.js and databases like Oracle SQL, MySQL, and MongoDB. Proficient in Git and GitHub, I'm eager to collaborate on exciting projects. In my journey, I've worked as a Project Intern at National Informatics Centre (MEITY) and Steel Authority of India Limited, where I contributed to Smart Contracts and a Reverse Mentoring System. I'm always ready for new opportunities in a dynamic tech environment.
           🎓 Bachelor of Technology - Computer Science and Engineering | CGPA: 9.64
📚 Tech Enthusiast | Full Stack Developer | JavaScript | Java | C | Node.js
🔍 Experienced in Web Development | Databases: Oracle SQL, MySQL, MongoDB
🛠️ Proficient with Git, GitHub, Remix, Postman

🔍 Worked as a Project Intern at National Informatics Centre (MEITY) and Steel Authority of India Limited
🚀 Developed Smart Contracts based Supply Chain Management System on Ethereum Blockchain
🤝 Facilitated knowledge sharing through a Reverse Mentoring System

💼 Final Year Project: Multi-Layer Digital Validation of Banking Cheque with Digital Signature
🎮 Created Fun Projects: Snake Game and Bubble Shooter Game using HTML Canvas and JavaScript

📚 Continuous Learner: Completed courses in Java, Web Development, Blockchain, and Python
💻 Eager to contribute and grow in a dynamic tech environment

🌱 Project Coordinator at Tarakeshwar Green Mates, working on People's Biodiversity Register (PBR) projects and conducting awareness programs on Environment and Nature-Wildlife.
        </p> */}
      </div>
    ),
  },
  {
    id: 2,
    title: "interests",
    content: (
      <div>
        <ul className="list-group-interest list-group">
          <li>Trekking</li>
          <li>Cycling</li> 
          <li>Swimming</li>
          <li>Music</li>
          
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
          Experienced in building projects for Asp.Net MVC and ASP.Net Web API from April to June 2023.
           Developed a Video Content Management Web Application in May 2023 using C#, ASP.Net, and Microsoft
          SQL Server. Eager to take on new challenges in web development.
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

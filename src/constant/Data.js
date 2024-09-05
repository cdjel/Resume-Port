import {
  Logo_Java,
  Logo_C,
  Logo_Python,
  Logo_Css,
  Logo_Html,
  Logo_R,
  Logo_Sql,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "June 2024",
      endDate: "Present",
      position: "Aresty Research Assistant",
      company: {
        name: "Rutgers CS Department",
        info: "Research Program @ Rutgers-NB",
      },
      description:
        "Assisting on a project which explores techniques to parallelize packet processing code across multiple CPU cores, and building compilers to translate code written for single CPU cores to run efficiently on multiple CPU cores. Working with a high-speed packet processing framework (eBPF) and a compiler front-end (Clang).",
    },
    {
      id: "prof_exp_2",
      startDate: "Jan 2024",
      endDate: "May 2024",
      position: "Discrete Structures I Grader",
      company: {
        name: "Rutgers CS Department",
        info: "@ Rutgers-NB ",
      },
      description:
        "Graded assignments (p-sets and quizzes) and exams including and not limited to: foundations of mathematical logic and proofs, sets, functions, logic gates, modeling computation, and number theory. Provided feedback to 300+ students directly on \"Gradescope.\""
    },
    {
      id: "prof_exp_3",
      startDate: "May 2023",
      endDate: "March 2024",
      position: "Membership Service Representative",
      company: {
        name: "YMCA of Montclair",
        info: "Nonprofit with Rec Program & Services",
      },
      description:
        "Provided comprehensive services including registering memberships and programs, giving facility tours, and addressing questions and issues to meet member needs. Managed membership registration, unit changes, and renewals efficiently, ensuring accurate data entry and transactions through \"ReClique Core,\" a management cloud application. ",
      links: [],
    },
    {
      id: "prof_exp_4",
      startDate: "Feb 2022",
      endDate: "Aug 2022",
      position: "Merch Associate & Front-End ",
      company: {
        name: "HomeGoods",
        info: "Home Furnishing Store in Wayne, NJ ",
      },
      description:
        "Provided excellent customer service while being on the front end with processing transactions and phone inquiries, and assisting on the floor with merchandise organization and display setup. ",
      links: [],
    },
    {
      id: "prof_exp_5",
      startDate: "May 2022",
      endDate: "June 2022",
      position: "Project Intern ",
      company: {
        name: "Bandila LLC",
        info: "Graphic Design & Marketing Platform ",
      },
      description:
        "Designed a data structure and logic for Bandila's brand audit quiz using Python, and HTML/CSS for front-end styling. Integrated a point-based system which evaluated potential clients to see if they would match with the scope of Bandila's web services (e.g. a client that is an individual or a micro enterprise would be \"rewarded\" a higher point to a large corporation). Attended in technical meetings for feedback.  ",
      links: [],
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: Logo_Java,
      name: "Java",
    },
    {
      id: "skill_2",
      icon: Logo_Html,
      name: "HTML",
    },
    {
      id: "skill_3",
      icon: Logo_Css,
      name: "CSS",
    },
    {
      id: "skill_4",
      icon: Logo_Python,
      name: "Python",
    },
    {
      id: "skill_5",
      icon: Logo_C,
      name: "C",
    },
    {
      id: "skill_6",
      icon: Logo_R,
      name: "R",
    },
    {
      id: "skill_7",
      icon: Logo_Sql ,
      name: "SQL",
    },
    
  ],
  techStack: [
    {
      id: "tech_stack_1",
      course: "pandas",
    },
    {
      id: "tech_stack_2",
      course: "Matplotlib"
    },
    {
      id: "tech_stack_3",
      course: "Seaborn"
    },
     {
      id: "tech_stack_4",
      course: "BeautifulSoup"
    },
    {
      id: "tech_stack_5",
      course: "SQLite3"
    },
    {
      id: "tech_stack_6",
      course: "MySQL"
    }, 
  ],
  relevantProjects: [
    {
      id: "project_1",
      name: "\"MyDramaList\" Top Dramas Analysis",
      // id, project title, languages, other tech stack, project description
      language: "SQL, Python",
      description: "The \"MyDramaList\" Top Shows Analysis aims to explore and collect data through webscraping, which includes and is not limited to ratings, number of voters, and genres, in order to gain some insights into possible trends and patterns in popular Asian dramas. By analyzing the data, we may uncover factors and elements that could reveal about audience preferences and overall what makes a drama popular with viewers.",
      github: "https://github.com/cdjel/MyDramaList",
    },
    {
      id: "project_2",
      name: "Traffic Stop Data API",
      language: "Python",
      description: "Currently developing a RESTful API for managing and analyzing traffic stop data from csv files. This project aims to provide a comprehensive backend solution for querying and reporting traffic stop data. Additionally, it will provide statistical insights, such as from comparing enforcement activities across different areas (stations) and analyzing trends over time. ",
      github:"",
    },
    {
      id: "project_3",
      name: "Simulating a Cache and Optimizing Programs for Caches",
      language: "C",
      description:"Experimented with various cache designs to understand their impact on from the CPU to main memory access performance. This project included simulating a fully associative L1 cache with FIFO replacement, a direct-mapped L1 cache with write-back and write-allocate policies, and a 4-way set-associative L1 cache with LRU replacement. Additionally, optimized matrix multiplication using cache blocking and matrix transposition using a cache-oblivious algorithm to reduce cache misses and evictions.",
      github:"",
    },
    {
      id: "project_4",
      name: "Representing and Manipulating Information",
      language: "C",
      description: "Experimented with how computers carry out mathematical operations, such as addition, subtraction, and multiplication on the data representations. This project included implementing binary subtraction for signed 8-bit ints with 2's complement, converting unsigned ints between various base notations up to base 36, and calculating the n-th root of a floating-point number with binary search. In addition, this project includes the IEEE 754 floating-point numbers with decoding 32-bit single-precision numbers to retrieve their decimal values, encoding real numbers into 64-bit double-precision numbers, and calculating the multiplication of single-precision numbers with binary operations.   ",
      github:"",
    },
    {
      id: "project_5",
      name: "Infinity War",
      language: "Java",
      description: "Implements various algorithms and data structures to solve graph-related problems. The project is inspired by the Marvel movie \"Marvel's Avengers: Infinity War.\" For instance, this project included constructing and modifying an adjacency matrix to determine the minimum cost path of \"Locating a Titan\" with using Dijkstra's algorithm. Another part was to analyze a directed graph to identify neurons connected to the \"Mind Stone,\" which needed proper graph traversal and data extraction. ",
      github:"",
    },
    {
      id: "project_6",
      name: "Predicting Future Salary",
      language: "R",
      description:"Developed a predictive model to estimate future salaries based on various factors, such as tuition, age, GPA, the number of LinkedIN conections, undergraduate major, and geographic location of college/university. Employed data exploration and transformation techniques, such as subsetting data by different majors to analyze each one separately with models and polynomial adjustments for non-linear relationships (e.g. squaring LinkedIN connections). In addition, also employed recursive partitioning and regression trees (rpart) to build decision tree models. Successfully combined all predictions from the models into a single decision vector and achieved an MSE of 149.86748.", 
      github:"",
    },
  ],
};

export default DATA;

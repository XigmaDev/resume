import React, { useRef } from 'react'
import { FaPhone, FaEnvelope, FaFirefoxBrowser } from 'react-icons/fa'
import ReactToPrint from 'react-to-print'

function Resume() {
  const componentRef = useRef()

  return (
    <div className="flex flex-col justify-center items-center pt-8 font-nun w-[29CM] bg-gray-100">
      <ReactToPrint
        trigger={() => (
          <button className="mb-4 px-6 py-2 bg-blue-600 text-white rounded shadow">
            Download PDF
          </button>
        )}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg mb-5  justify-center items-center pt-8 font-nun w-[29CM] bg-gray-100">
          <h1 className="text-6xl font-extrabold text-blue-800 mb-2 tracking-tight">
            ALI ASKARI
          </h1>
          <h2 className="text-3xl font-medium text-gray-700 tracking-wide">
            MQL 4/5 Developer
          </h2>
        </div>
        <div className="flex antialiased text-base leading-relaxed w-[29CM]">
          <aside className="bg-blue-50 w-full max-w-[8CM] p-8 border-r border-gray-300 flex flex-col items-start">
            <div className="w-full">
              <h2 className="mb-4 text-xl font-bold text-blue-800 tracking-wide">
                INFO
              </h2>
              <div className="mb-6">
                <div className="flex items-center text-lg text-gray-700 mb-3">
                  <FaPhone className="mr-4 text-blue-600" />
                  <a href="tel:+989153343508">+98 915 334 3508</a>
                </div>
                <div className="flex items-center text-lg text-gray-700 mb-3">
                  <FaEnvelope className="mr-4 text-blue-600" />
                  <a href="mailto:me@xigma.dev">me@xigma.dev</a>
                </div>
                <div className="flex items-center text-lg text-gray-700 mb-3">
                  <FaFirefoxBrowser className="mr-4 text-blue-600" />
                  <a href="https://xigma.dev">xigma.dev</a>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="mb-4 text-xl font-bold text-blue-800 tracking-wide">
                SKILLS
              </h2>
              <div className="flex flex-wrap">
                {[
                  'MQL4',
                  'MQL5',
                  'MetaTrader',
                  'C++',
                  'Python',
                  'Algorithmic Trading',
                  'Financial Market Analysis',
                  'Backtesting',
                  'Trading Strategy Development',
                  'Git',
                  'CI/CD',
                  'Linux',
                  'Docker',
                  'REST API',
                  'MySQL',
                ].map(skill => (
                  <span
                    key={skill}
                    className="text-md font-medium text-gray-600 bg-blue-100 px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h2 className="mb-4 mt-4 text-xl font-bold text-blue-800 tracking-wide">
                LANGUAGE
              </h2>
              <div className="flex flex-wrap">
                {[
                  'Persian',
                  'English'
                ].map(skill => (
                  <span
                    key={skill}
                    className="text-md font-medium text-gray-600 bg-blue-100 px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
          <main className="flex-1 p-10 bg-white shadow-lg rounded-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 tracking-wide mb-4">
                SUMMARY
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
              Skilled MQL 4/5 Developer with over 2 years of experience in developing and optimizing trading algorithms and indicators for MetaTrader platforms. Having traded forex since 2019, I bring a unique understanding of the industry to my projects. Adept at leveraging advanced programming techniques in MQL, C++, and Python to deliver high-performance trading solutions. Strong background in financial market analysis, algorithmic trading, and backtesting strategies, with a proven track record of implementing efficient, scalable, and profitable trading systems. Proficient in ICT methods, RTM, Trex Price Action, and LIT methods in technical analyses.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 tracking-wide mb-4">
                ABILITIES
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>
                  Developing custom indicators and Expert Advisors (EAs) for
                  MetaTrader using <b>MQL4</b> and <b>MQL5</b>.
                </li>
                <li>
                  Conducting in-depth backtesting and optimization of trading
                  strategies to maximize performance and minimize risk.
                </li>
                <li>
                  Implementing complex trading algorithms and strategies,
                  integrating them into financial applications.
                </li>
                <li>
                  Proficient in utilizing <b>Python</b> for data analysis,
                  machine learning models, and integrating them with MQL for
                  advanced trading solutions.
                </li>
                <li>
                  Strong understanding of financial markets, including forex,
                  stocks, and commodities.
                </li>
                <li>
                  Expertise in integrating third-party APIs for market data and
                  order execution in trading platforms.
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 tracking-wide mb-4">
                EXPERIENCE
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Freelancer MQL4 / MQL5 Developer 
                </h3>
                <p className="text-md text-gray-600 mb-3">
                  Remote | Jan 2020 – Present
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>
                    Developed and deployed over 100 custom indicators and EAs
                    for clients worldwide, optimizing them for high-frequency
                    trading and market analysis.
                  </li>
                  <li>
                    Conducted comprehensive backtesting and forward-testing of
                    trading systems to ensure robustness and reliability in live
                    trading environments.
                  </li>
                  <li>
                    Provided consulting services on trading strategy
                    development, helping clients achieve their financial goals
                    through automated trading solutions.
                  </li>
                  <li>
                    Integrated trading strategies with external data sources and
                    APIs to enhance algorithmic performance.
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Solo Trading in Forex Market 
                </h3>
                <p className="text-md text-gray-600 mb-3">
                  Remote | Jan 2020 – Present
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>
                    Developed and deployed over 100 custom indicators and EAs
                    for clients worldwide, optimizing them for high-frequency
                    trading and market analysis.
                  </li>
                  <li>
                    Conducted comprehensive backtesting and forward-testing of
                    trading systems to ensure robustness and reliability in live
                    trading environments.
                  </li>
                  <li>
                    Provided consulting services on trading strategy
                    development, helping clients achieve their financial goals
                    through automated trading solutions.
                  </li>
                  <li>
                    Integrated trading strategies with external data sources and
                    APIs to enhance algorithmic performance.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Solo Trading in CryptoCurrency 
                </h3>
                <p className="text-md text-gray-600 mb-3">
                Remote | Jan 2018 – Dec 2020
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>
                    Led the development of a suite of trading tools and
                    algorithms that significantly improved the trading
                    performance of clients.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to integrate
                    trading systems with new market data providers and brokers.
                  </li>
                  <li>
                    Optimized existing codebases for performance, reducing
                    latency and enhancing execution speed in trading
                    operations.
                  </li>
                </ul>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 tracking-wide mb-4">
                PROJECTS
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>
                  <b>Advanced Scalping EA:</b> Developed a high-frequency
                  trading EA optimized for scalping in volatile market
                  conditions, achieving consistent profits with low drawdowns.
                </li>
                <li>
                  <b>Multi-Asset Trading System:</b> Created an automated
                  trading system that simultaneously trades across multiple
                  assets, including forex, commodities, and indices, using a
                  diversified strategy.
                </li>
                <li>
                  <b>Custom Indicator Development:</b> Designed and implemented
                  custom indicators that provided unique market insights, used
                  by traders to enhance their decision-making processes.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-blue-800 tracking-wide mb-4">
                EDUCATION
              </h2>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="text-md text-gray-600">
                  Birjand University Of Technology | Birjand, Iran | 2016 – 2021
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Resume




// import React from 'react'

// function Resume() {
//   return (
//     <div className="flex flex-col justify-center items-center pt-4 font-nun w-[29CM]">
//       <div className="w-[18CM] flex flex-col justify-start items-center p-4 border-2 border-black mb-3">
//         <h1 className="flex mb-0 text-5xl font-extrabold text-gray-750 pt-4 pb-2 tracking-widest">
//           ALI ASKARI
//         </h1>
//         <h2 className="flex m-0 ml-2 text-2xl font-normal text-gray-700 leading-snugish pb-4 font-noto tracking-wide">
//           Front End Developer
//         </h2>
//       </div>
//       <div className="flex m-0 antialiased font-normal text-base leading-default min-h-screen w-[29CM]">
//         <aside className="bg-gray-300  h-min-screen w-full max-w-[8CM] p-8  transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 flex flex-col justify-start items-center">
//           <div className="break-inside-avoid">
//             <h2 className="mb-2 px-4 pt-4 text-xl font-bold tracking-widest text-black">
//               INFO
//             </h2>
//             <hr className="border-2"></hr>
//             <section className="mb-2 break-inside-avoid">
//               <div className="my-1 last:pb-1">
//                 <ul className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1 mt-2.1">
//                   <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 py-3">
//                     <a href="tel:+989153343508">
//                       <span className="mr-5 text-xl font-semibold text-black leading-snugish">
//                         Phone
//                       </span>
//                       <div>+98 915 334 3508</div>
//                     </a>
//                   </li>
//                   <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 py-3">
//                     <a href="mailto:me@xigma.dev" className="group">
//                       <span className="mr-8 text-xl font-semibold text-black leading-snugish">
//                         Email
//                       </span>
//                       <div>me@xigma.dev</div>
//                     </a>
//                   </li>
                  
//                 </ul>
//               </div>
//             </section>
//           </div>
//           <div className="break-inside-avoid">
//             <h2 className="my-4 text-xl font-bold tracking-widest text-black px-4 pt-4">
//               SKILLS
//             </h2>
//             <hr className="border-2"></hr>
//             <section className="mb-2 break-inside-avoid">
//               <div className="my-1 last:pb-1">
//                 <ul className="flex flex-wrap text-sm2 -mr-1.6 -mb-1 mt-2.1">
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     React
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Redux
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     BOOTSTRAP
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Tailwind CSS
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Material Tailwind
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Javascript
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     TypeScript
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Python
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     My SQL
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     MQL4
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Git
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     CI/CD
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Linux
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Docker
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     REST API
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Figma
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Wordpress
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     Photoshop
//                   </li>
//                   <li className="text-md px-2.5 py-0.5 mr-1.6 mb-1 text-black bg-gray-250">
//                     HTML5
//                   </li>
//                   <li className="text-md px-2.5 py-1 mr-1.6 mb-1 text-black bg-gray-250">
//                     CSS3
//                   </li>
//                 </ul>
//               </div>
//             </section>
//           </div>
//         </aside>
//         <main className="flex flex-wrap justify-evenly p-6">
//           <div className="max-w-5xl p-3 mx-auto my-auto">
//             <div className="col-gap-16 md:col-count-2 md:h-letter-col-full col-fill-balance">
//               <section className="pb-2 mt-4 border-b-4 first:mt-0">
//                 <div className="break-inside-avoid">
//                   <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700">
//                     SUMMARY
//                   </h2>
//                   <section className="mb-2 break-inside-avoid">
//                     <p className="mt-2 leading-normal text-gray-700 text-md text-justify">
//                     Eager and adaptable front-end developer committed to continuous learning, equipped with a diverse skill set that encompasses cutting-edge technologies. With over 5 years of programming experience in various technologies such as Python, MQL, and Javascript, I bring proficiency and versatility to development projects. A proactive problem solver, I excel in collaborative environments, utilizing strong communication skills to seamlessly integrate within cross-functional teams while maintaining a keen eye for design and functionality.</p>
//                   </section>
//                 </div>
//               </section>
//               <div className="break-inside-avoid pt-3">
//                 <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700">
//                   ABILITIES
//                 </h2>
//                 <ul className="mt-2.1 text-md text-gray-700 leading-normal text-justify">
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     implementing centralized state management for complex web
//                     applications using <b>Redux</b>
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Developed efficient action creators and reducers in{' '}
//                     <b>Redux</b>
//                   </li>

//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Communicatie with <b>REST API</b> using fetch, Axios
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Create visually appealing and highly customizable user
//                     interfaces with <b>Tailwind CSS </b>and{' '}
//                     <b>Material Tailwind CSS</b>.
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Skilled in harnessing the power of <b>Figma</b> to facilitate efficient collaboration between design and development teams.
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Implementing seamless navigation and dynamic routing within web applications using React Router
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Work with chart drawing libraries in React to create
//                     visually engaging and interactive data visualizations using
//                     (<b>Apexchart</b>, Recharts, Nivo, React-Vis)
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Excel in crafting responsive user interfaces, with a
//                     particular focus on Modern CSS Layouts Tools(
//                     <b>FlexBox / Grid</b>).
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Utilized Python libraries such as <b>Pandas</b> and{' '}
//                     <b>Matplotlib</b> to analyze and visualize complex datasets,
//                     extracting actionable insights for informed decision-making.
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Utilizing <b>Docker</b> to streamline and containerize
//                     applications
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Adept at database design,optimization,and management in{' '}
//                     <b>MySQL</b>
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Configure <b>Linux</b> servers and web server applications
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Implemented end-to-end <b>CI/CD</b> pipelines, automating
//                     the build, test, and deployment processes for software
//                     applications using tools such as Github Actions, GitLab CI.
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Integrate complex trading algorithms and strategies into
//                     financial applications with <b>MQL</b>
//                   </li>
//                   <li className="my-4">
//                     <span className="transform -translate-y-px select-none text-gray-550 mr-2">
//                       ●
//                     </span>
//                     Experience developing indicator and expert adviser with{' '}
//                     <b>MQL</b>
//                   </li>
//                 </ul>
//               </div>
//               <section className="pb-2  mt-4 border-b-4 first:mt-0 pt-5">
//                 <div className="break-inside-avoid">
//                   <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700">
//                     PROJECTS
//                   </h2>
//                   <section className="pb-4 mb-4 border-b-2 break-inside-avoid my-2">
//                     <header>
//                       <h3 className="text-xl font-semibold text-gray-700 leading-snugish">
//                         <a
//                           href="https://github.com/aliaskarii/admin-dashboard/"
//                           className="group"
//                         >
//                           Admin Dashboard
//                         </a>
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         2023 | React, Material Tailwind, Apexchart, HTML, CSS
//                       </p>
//                     </header>
//                     <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                     This project showcases a single-page application built with React, Material Tailwind CSS, and ApexCharts.
//                     It fetches random data from a REST API and visualizes it using ApexCharts.
//                     </p>
//                   </section>
//                   <section className="pb-4 mb-4 border-b-2 break-inside-avoid my-2">
//                     <header>
//                       <h3 className="text-xl font-semibold text-gray-700 leading-snugish">
//                         <a
//                           href="https://github.com/aliaskarii/exchange-template/"
//                           className="group"
//                         >
//                           Exchange
//                         </a>
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         2023 | React, Redux, Material UI, Recharts
//                       </p>
//                     </header>
//                     <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                       A Personal Exchange Dashboard Project 
//                       This project serves as a demonstration of my skills in React, Redux, and Material-UI. 
//                       It provides a simple template for an exchange dashboard.
//                     </p>
//                   </section>
//                   <section className="pb-4 mb-4 border-b-2 break-inside-avoid my-2">
//                     <header>
//                       <h3 className="text-xl font-semibold text-gray-700 leading-snugish">
//                         <a href="https://blog.conisma.com" className="group">
//                           Conisma Blog
//                         </a>
//                         <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700"></span>
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         2021 | Wordpress, Responsive
//                       </p>
//                     </header>
//                     <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                       Educational blog about stock market technical analysis
//                       based on trigger price action method
//                     </p>
//                   </section>
//                   <section className="pb-4 mb-4 border-b-2 break-inside-avoid my-2">
//                     <header>
//                       <h3 className="text-xl font-semibold text-gray-700 leading-snugish">
//                         TrexLevel
//                         <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700"></span>
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         2022 | MQL4
//                       </p>
//                     </header>
//                     <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                       Metatrader indicator to calculate and draw daily level
//                       based on Trex Price Action method using MQL4
//                     </p>
//                   </section>
//                   <section className="pb-4 mb-4 break-inside-avoid my-2">
//                     <header>
//                       <h3 className="text-xl font-semibold text-gray-700 leading-snugish">
//                         Iran Stock Market Perdiction with LSTM
//                         <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700"></span>
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         2020 | Python, JupyterLab
//                       </p>
//                     </header>
//                     <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                       LSTM algorithm for predicting iran stock market
//                     </p>
//                   </section>
//                 </div>
//               </section>
//               <section className="pb-2 mt-4 first:mt-0">
//                 <div className="break-inside-avoid">
//                   <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700">
//                     EDUCATION
//                   </h2>
//                   <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
//                     <header>
//                       <h3 className="flex-grow text-xl font-semibold text-gray-700 leading-snugish">
//                         Birjand University Of Technology
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         2016 – 2021 | Bachelore of Science
//                       </p>
//                     </header>
//                     <p className="mt-1 leading-normal text-md text-gray-650 inline-block">
//                       <span className="inline-block font-semibold text-gray-700 text-md">
//                         Major:
//                       </span>
//                       Software Engineering
//                     </p>
//                   </section>
//                 </div>
//               </section>
//               <section className="pb-2 mt-4 first:mt-0">
//                 <div className="break-inside-avoid">
//                   <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700">
//                     LANGUAGE
//                   </h2>
//                   <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid flex flex-row justify-start">
//                     <div className="">
//                       <h3 className="flex-grow text-xl font-semibold text-gray-700 leading-snugish">
//                         Perisan
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         Native
//                       </p>
//                     </div>
//                     <div className="ml-20">
//                       <h3 className="flex-grow text-xl font-semibold text-gray-700 leading-snugish">
//                         English
//                       </h3>
//                       <p className="leading-normal text-md text-gray-550">
//                         Intermediate
//                       </p>
//                     </div>
//                   </section>
//                 </div>
//               </section>
//               <br />
//               <br />
//               <br />
//               <br />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
// export default Resume

// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import About from "../pages/About";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";
// import Resume from "../pages/Resume";

// export default function PortfolioContainer() {
//   // const [currentPage, setCurrentPage] = useState("About");

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   // const renderPage = () => {
//   //   if (currentPage === "AboutMe") {
//   //     return <AboutMe />;
//   //   }
//   //   if (currentPage === "Resume") {
//   //     return <Resume />;
//   //   }
//   //   if (currentPage === "ContactMe") {
//   //     return <ContactMe />;
//   //   }

//   //   return <Projects />;
//   // };

//   // const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
//       <Navbar />
//       <Routes>
//         <Route exact path="/About" component={<About />} />
//         <Route exact path="/Projects" component={<Projects />} />
//         <Route exact path="/Resume" component={<Resume />} />
//         <Route exact path="/Contact" component={<Contact />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

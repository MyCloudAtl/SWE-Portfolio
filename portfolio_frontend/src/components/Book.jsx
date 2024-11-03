// src/Book.js
import React from 'react';
import FlipPage from 'react-flip-page';
import './Book.css';

const Book = () => {
//   const pages = [
//     {
//       title: "Welcome!",
//       content: (
//         <>
//           <h2>Megan Mashburn</h2>
//           <p>Full-Stack Developer</p>
//         </>
//       ),
//     },
//     {
//       title: "About Me",
//       content: (
//         <>
//           <p>
//             Hello, it's a pleasure to meet you! My name is Megan Mashburn, and I'm a passionate Full-Stack Software Engineer...
//           </p>
//         </>
//       ),
//     },
//     {
//       title: "My Journey",
//       content: (
//         <p>
//           I believe I would be a valuable asset to any company, one that you can cultivate and grow alongside...
//         </p>
//       ),
//     },
//     {
//       title: "Get in Touch",
//       content: (
//         <p>
//           Thank you for taking the time to learn about my journey! Please feel free to reach out via email or call me directly at (706) 455-7075 if you have any questions.
//         </p>
//       ),
//     },
//   ];

const pages = [
    "Page 1 Content: Welcome to the Virtual Book!",
    "Page 2 Content: Here is some more interesting content.",
    "Page 3 Content: And here’s even more exciting information!",
    "Page 4 Content: The end of this small demo book."
  ];

  return (
    <div className="book">
      <FlipPage>
        {/* {pages.map((page, index) => (
          <div key={index} className="page">
            <h2>{page.title}</h2>
            {page.content}
          </div> */}
          {pages.map((content, index) => (
          <div key={index} className="page">
            <h2>{`Page ${index + 1}`}</h2>
            <p>{content}</p>
          </div>
        ))}
      </FlipPage>
    </div>
  );
};

export default Book;

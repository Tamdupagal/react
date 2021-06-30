// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import { questions as initialQuestion } from "./../Helpers/Questions";
// import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
// import image from "./../Images/image.jpg";
// // import Button from "../../components/Button";
// // import "./../css/Carousel.scss";
// import { Button } from "@material-ui/core";

// function Carousel() {
//   const [questions, setQuestions] = useState(initialQuestion);
//   const sliderRef = useRef(null);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dotsClass: "quiz__carousel__dot",
//     //  fade: true,
//     easing: "ease-out",
//   };
//   console.log(sliderRef);
//   return (
//     <div className="quiz__wrapper">
//       <div className="quiz__container">
//         <div className="quiz__title">
//           <div className="img1">
//             <img src={image} alt="logo" />
//             <span className="title">Quiz</span>
//           </div>
//           <div className="quiz__edit">
//             <Button cls="del__btn">Delete question</Button>
//             <Button cls="add__btn">Add question</Button>
//           </div>
//         </div>
//         <Slider {...settings} ref={sliderRef} className="slider">
//           {questions.map((ques, quesIndex) => {
//             return (
//               <div key={quesIndex} className="quiz__box">
//                 <p className="quiz__question">{ques.questionText}</p>
//                 <div className="quiz__answer">
//                   {ques.answerDetail.type === "mcq" ? (
//                     ques.answerDetail.answerOptions.map((opt, ansIndex) => {
//                       return (
//                         <div key={ansIndex} className="quiz__ans__box">
//                           <input type="radio" name="quiz__ans" />
//                           <p className="quiz__ans">{opt.answerText}</p>
//                         </div>
//                       );
//                     })
//                   ) : (
//                     <>
//                       <span>Your answer :</span>
//                       <textarea className="text__ans" />
//                     </>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//         <div className="quiz__btn">
//           <FaRegHandPointLeft
//             className="quiz__icon"
//             onClick={() => sliderRef.current.slickPrev()}
//           />
//           <FaRegHandPointRight
//             className="quiz__icon"
//             onClick={() => sliderRef.current.slickNext()}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

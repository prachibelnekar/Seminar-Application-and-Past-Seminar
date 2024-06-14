import React from 'react';
import card_5 from "../src/images/PS_5.avif";
import card_6 from "../src/images/PS_6.avif";
import card_7 from "../src/images/PS_7.avif";
import card_8 from "../src/images/PS_8.avif";
import card_9 from "../src/images/PS_9.avif";
import card_10 from "../src/images/PS_10.avif";
import card_11 from "../src/images/PS_11.avif";
import card_12  from "../src/images/PS_12.avif";
import card_13 from "../src/images/Home.avif";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const C_data = [
  {
    imgsrc: card_5,
    title: "The Future of Remote Work",
    date: "November 18, 2023",
    description: "Analyze the trends and technologies that are shaping remote work and its future.",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStarHalf />, <IoStarOutline />],
  },
  {
    imgsrc: card_6,
    title: "Marketing Strategies for the Digital Era",
    date: "December 7, 2023",
    description: "Learn about the most effective digital marketing strategies for today's market.",
    time: "9:30 AM - 12:30 PM",
    venue: "Seminar Hall",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStar />, <IoStarOutline />],
  },
  {
    imgsrc: card_7,
    title: "Blockchain Technology and Its Business Applications",
    date: "January 15, 2024",
    description: "An in-depth look at blockchain technology and how it can benefit various industries.",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStarHalf />, <IoStarOutline />],
  },
  {
    imgsrc: card_8,
    title: "Financial Planning for Startups",
    date: "February 22, 2024",
    description: "Essential financial strategies and planning for new startups.",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStarOutline />, <IoStarOutline />],
  },
  {
    imgsrc: card_9,
    title: "Enhancing Customer Experience through Technology",
    date: "March 30, 2024",
    description: "Discover how technology can improve customer satisfaction and loyalty.",
    time: "2:00 PM - 5:00 PM",
    venue: "Seminar Hall",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStarHalf />, <IoStarOutline />],
  },
  {
    imgsrc: card_10,
    title: "Data Science and Analytics for Business Decision Making",
    date: "April 20, 2024",
    description: "Learn how to leverage data science for better business decisions.",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStar />, <IoStarHalf />],
  },
  {
    imgsrc: card_11,
    title: "Emerging Trends in E-Commerce",
    date: "May 15, 2024",
    description: "Stay ahead of the curve with the latest trends in e-commerce.",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStar />, <IoStar />],
  },
  {
    imgsrc: card_12,
    title: "The Role of Big Data in Business Strategy",
    date: "June 5, 2024",
    description: "Understand the importance of big data in shaping business strategies.",
    time: "1:00 PM - 4:00 PM",
    venue: "Seminar Hall",
    ratings: [<IoStar />, <IoStar />, <IoStarHalf />, <IoStarOutline />, <IoStarOutline />],
  },
  {
    imgsrc: card_13,
    title: "The Impact of 5G on Business and Society",
    date: "July 10, 2024",
    description: "Explore how 5G technology is transforming businesses and everyday life.",
    ratings: [<IoStar />, <IoStar />, <IoStar />, <IoStar />, <IoStarHalf />],
  },
];

export default C_data;
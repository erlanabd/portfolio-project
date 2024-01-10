import { SHORT_SKILL_BY_SLUG } from "../Skills/mock_data";
import noImg from "./../../assets/images/no-img.svg";

export const EDUCATION_DATA = [
  {
    id: "0",
    image: noImg,
    title: "Bachelor degree of Computer Science",
    institution: "ISTIC",
    country: "Tunisia",
    period: "2 years",
    subjects: [
      {
        id: "0",
        subject: "C",
      },
      {
        id: "1",
        subject: "Algorithm",
      },
      {
        id: "2",
        subject: "Algebra",
      },
      {
        id: "3",

        subject: "Python",
      },
      {
        id: "4",

        subject: "C++",
      },
      {
        id: "5",

        subject: "Java",
      },
      {
        id: "6",

        subject: "English",
      },
    ],
  },
  {
    id: "1",
    image: noImg,
    title: "PhD of Computer Science",
    institution: "MIT",
    country: "USA",
    period: "1 year",
    subjects: [
      {
        id: "0",

        subject: "Assembly",
      },
      {
        id: "1",

        subject: "Rust",
      },
      {
        id: "2",

        subject: "Computer Architecture",
      },
      {
        id: "3",
        subject: "Algorithms and Data structures",
      },
    ],
  },
];

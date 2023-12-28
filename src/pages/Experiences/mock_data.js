import { SHORT_SKILL_BY_SLUG } from "../Skills/mock_data";
import noImg from "./../../assets/images/no-img.svg";

export const EXPERIENCE_DATA = [
  {
    id: "0",
    name: "open-sourcer",
    image: noImg,
    title: "Open Source Developer",
    types: [
      {
        type: "company",
      },
      {
        type: "location",
      },
      {
        type: "home",
      },
    ],
    workPeriodFrom: "December 2023",
    workPeriodTo: "Present",
    duration: "1 day",
    description: "Creating awesome tools for developers.",
    skills: [SHORT_SKILL_BY_SLUG("js"), SHORT_SKILL_BY_SLUG("ts")],
  },
  {
    id: "1",
    name: "software-freelance",
    image: noImg,
    title: "Freelancer",
    types: [
      {
        type: "company",
      },
      {
        type: "location",
      },
      {
        type: "home",
      },
    ],
    workPeriodFrom: "December 2023",
    workPeriodTo: "Present",
    duration: "1 day",
    description: "Creating awesome tools for developers.",
    skills: [
      SHORT_SKILL_BY_SLUG("js"),
      SHORT_SKILL_BY_SLUG("ts"),
      SHORT_SKILL_BY_SLUG("css"),
      SHORT_SKILL_BY_SLUG("html"),
      SHORT_SKILL_BY_SLUG("sass"),
      SHORT_SKILL_BY_SLUG("svelte"),
    ],
  },
  {
    id: "2",
    name: "software-freelance-junior",
    image: noImg,
    title: "Junior Freelancer",
    types: [
      {
        type: "company",
      },
      {
        type: "location",
      },
      {
        type: "home",
      },
    ],
    workPeriodFrom: "January 2022",
    workPeriodTo: "December 2023",
    duration: "1 year",
    description: "Creating awesome tools for developers.",
    skills: [
      SHORT_SKILL_BY_SLUG("js"),
      SHORT_SKILL_BY_SLUG("css"),
      SHORT_SKILL_BY_SLUG("html"),
    ],
  },
];

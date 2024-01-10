import { SHORT_SKILL_BY_SLUG } from "../Skills/mock_data";
import noImg from "./../../assets/images/no-img.svg";

export const EXPERIENCE_BY_NAME = (name) => {
  const findExperience = EXPERIENCE_DATA.find((exp) => exp.name === name);
  if (!findExperience) {
    return {};
  }
  return {
    id: findExperience.id,
    slug: findExperience.name,
    image: findExperience.image,
    title: findExperience.title,
    types: findExperience.types,
    duration: findExperience.duration,
    description: findExperience.description,
    skills: findExperience.skills,
  };
};

export const EXPERIENCE_DATA = [
  {
    id: "0",
    name: "open-sourcer",
    image: noImg,
    title: "Open Source Developer",
    types: [
      {
        id: "0",

        type: "company",
      },
      {
        id: "1",

        type: "location",
      },
      {
        id: "2",

        type: "contract",
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
        id: "0",

        type: "company",
      },
      {
        id: "1",

        type: "location",
      },
      {
        id: "2",

        type: "contract",
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
        id: "0",

        type: "company",
      },
      {
        id: "1",

        type: "location",
      },
      {
        id: "2",

        type: "contract",
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

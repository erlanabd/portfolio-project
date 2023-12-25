import { SHORT_SKILL_BY_SLUG } from "../Skills/mock_data";
import projectOneImg from "./../../assets/images/sass-logo.png";
import projectTwoImg from "./../../assets/images/svelte-logo.png";

export const PROJECTS_DATA = [
  {
    id: 0,
    icon:  projectOneImg ,
    name: "Project 1",
    links: [
      {
        id: 0,
        link: "htts://github.com",
        label: "Github",
      },
    ],
    el: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
    skills: [SHORT_SKILL_BY_SLUG("js"), SHORT_SKILL_BY_SLUG("ts")],
  },
  {
    id: 1,
    icon: projectTwoImg,
    name: "Project 2",
    links: [
      {
        id: 0,
        link: "htts://github.com",
        label: "Github",
      },
    ],
    el:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",
    skills: [SHORT_SKILL_BY_SLUG("js"), SHORT_SKILL_BY_SLUG("ts")],
  },
  {
    id: 2,
    icon: { projectOneImg },
    name: "Project 3",
    links: [
      {
        id: 0,
        link: "htts://github.com",
        label: "Github",
      },
    ],
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",
    skills: [SHORT_SKILL_BY_SLUG("js"), SHORT_SKILL_BY_SLUG("ts")],
  },
];

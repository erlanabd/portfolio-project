import { SHORT_SKILL_BY_SLUG } from "../Skills/mock_data";
import projectOneImg from "./../../assets/images/no-img.svg";
import projectTwoImg from "./../../assets/images/svelte-logo.png";
import screenshot1 from './../../assets/images/screenshot1.jpeg'
import screenshot2 from './../../assets/images/screenshot2.jpeg'
import screenshot3 from './../../assets/images/screenshot3.png'
import screenshot4 from './../../assets/images/screenshot4.jpeg'
import screenshot5 from './../../assets/images/screenshot5.avif'


export const PROJECT_BY_ID = (id) => {
  const findProject = PROJECTS_DATA.find((project) => project.id === id);
  if (!findProject) {
    return {};
  }
  return {
    id: findProject.id,
    icon: findProject.icon,
    name: findProject.name,
    links: findProject.links,
    description: findProject.el,
    skills: findProject.skills,
    screenshots: findProject.screenshots
  };
};

export const PROJECTS_DATA = [
  {
    id: "0",
    icon: projectOneImg,
    name: "First Slick Portfolio",
    links: [
      {
        id: 0,
        link: "https://github.com",
        label: "Github",
      },
    ],
    el: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",
    skills: [SHORT_SKILL_BY_SLUG("ts")],
    screenshots: [],
  },
  {
    id: "1",
    icon: projectTwoImg,
    name: "Second Slick Portfolio",
    links: [
      {
        id: 0,
        link: "htts://github.com",
        label: "Github",
      },
    ],
    el: "A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",
    skills: [
      SHORT_SKILL_BY_SLUG("ts"),
      SHORT_SKILL_BY_SLUG("sass"),
      SHORT_SKILL_BY_SLUG("svelte"),
    ],
    screenshots: [
      {
        image: screenshot1
      },
      {
        image: screenshot2
      },
      {
        image: screenshot3
      },
      {
        image: screenshot4
      },
      {
        image: screenshot5
      }
    ]
  },
];

import jsLogo from "./../../assets/images/js-logo.png";
import tsLogo from "./../../assets/images/ts-logo.png";
import cssLogo from "./../../assets/images/css-logo.png";
import htmlLogo from "./../../assets/images/html-logo.png";
import sassLogo from "./../../assets/images/sass-logo.png";
import reactLogo from "./../../assets/images/react-logo.png";
import svelteLogo from "./../../assets/images/svelte-logo.png";
import emptyImg from "./../../assets/images/no-img.svg";

export const SKILLS_BY_NAME = (name) => {
  return SKILLS_DATA.find((skill) => skill.name === name) || null;
};

export const SHORT_SKILL_BY_SLUG = (slug) => {
  const findSkill = SKILLS_DATA.find((skill) => skill.name === slug);
  if (!findSkill) {
    return {};
  }
  return {
    id: findSkill.id,
    slug: findSkill.name,
    label: findSkill.label,
    image: findSkill.image,
    description: findSkill.description,
    relatedExperience: findSkill.relatedExperience,
  };
};

export const SKILLS_DATA = [
  {
    id: 0,
    name: "js",
    label: "Javascript",
    image: jsLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    relatedExperience: [
      {
        id: 0,
        image: emptyImg,
        label: "Open Source developer @ Self employed",
        to: "/experiences/open-sourcer",
      },
      {
        id: 1,
        image: emptyImg,
        label: "Freelancer @ Self employed",
        to: "/experiences/software-freelance",
      },
      {
        id: 2,
        image: emptyImg,
        label: "Junior Freelancer @ Self employed",
        to: "/experiences/software-freelance-junior",
      },
    ],
  },
  {
    id: 1,
    name: "ts",
    label: "Typescript",
    image: tsLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    relatedExperience: [
      {
        id: 0,
        image: emptyImg,
        label: "Slick Portfolio (Website Template)",
        to: "/projects/0",
      },
      {
        id: 1,
        image: svelteLogo,
        label: "Slick Portfolio (Website Template)",
        to: "/projects/1",
      },
      {
        id: 2,
        image: emptyImg,
        label: "Open Source Developer  @ Self employed",
        to: "/experiences/open-sourcer",
      },
      {
        id: 3,
        image: emptyImg,
        label: "Freelancer @ Self employed",
        to: "/experiences/software-freelance",
      },
    ],
  },
  {
    id: 2,
    name: "css",
    label: "CSS",
    image: cssLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    relatedExperience: [
      {
        id: 0,
        image: emptyImg,
        label: "Freelancer  @ Self employed",
        to: "/experiences/software-freelance",
      },
      {
        id: 1,
        image: emptyImg,
        label: "Junior Freelancer @ Self employed",
        to: "/experiences/software-freelance-junior",
      },
    ],
  },
  {
    id: 3,
    name: "html",
    label: "HTML",
    image: htmlLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    relatedExperience: [
      {
        id: 0,
        image: emptyImg,
        label: "Freelancer  @ Self employed",
        to: "/experiences/software-freelance",
      },
      {
        id: 1,
        image: emptyImg,
        label: "Junior Freelancer @ Self employed",
        to: "/experiences/software-freelance-junior",
      },
    ],
  },
  {
    id: 4,
    name: "sass",
    label: "SASS",
    image: sassLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    relatedExperience: [
      {
        image: svelteLogo,
        label: "Slick Portfolio  (Website Template)",
        to: "/projects/1",
      },
      {
        image: emptyImg,
        label: "Junior Freelancer @ Self employed",
        to: "/experiences/software-freelance-junior",
      },
    ],
  },
  {
    id: 5,
    name: "react",
    label: "React Js",
    image: reactLogo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    relatedExperience: [],
  },
  {
    id: 6,
    name: "svelte",
    label: "Svelte",
    image: svelteLogo,
    description:
      "Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.",
    relatedExperience: [
      {
        id: 0,
        image: svelteLogo,
        label: "Slick Portfolio (Website Template)",
        to: "/projects/1",
      },
      {
        id: 1,
        image: emptyImg,
        label: "Junior Freelancer @ Self employed",
        to: "/experiences/software-freelance-junior",
      },
    ],
  },
];

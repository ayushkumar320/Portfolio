// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Ayush Kumar | Portfolio",
  description:
    "Student Developer passionate about full-stack development, AI/ML, and open-source projects.",
  siteUrl: "https://ayushkumar.dev/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Tech Stack",
    ref: "tech-stack",
  },
  {
    name: "Experience",
    ref: "experience",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const getMenuRef = (name: string): string => {
  const match = MENULINKS.find((link) => link.name === name);
  return match?.ref ?? name.toLowerCase().replace(/\s+/g, "-");
};

export const TYPED_STRINGS = [
  "I build MERN applications",
  "I explore AI/ML every day",
  "I contribute to open source",
  "I design seamless user journeys",
];

export const EMAIL = "ayushkumar85385@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/ayushnotkumar",
  github: "https://github.com/ayushkumar320",
  instagram: "https://instagram.com/ayushnotkumar",
  twitter: "https://twitter.com/notaprocoder",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [];

export const SKILLS = {
  core: ["MongoDB", "Express.js", "React", "Next.js", "Node.js"],
  data: ["PostgreSQL", "Prisma ORM"],
  tooling: ["Docker", "TypeScript", "Tailwind CSS"],
};

export const GTAG = "UA-163844688-1";

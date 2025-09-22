export type Project = {
  title: string;
  blurb: string;
  repo: string;
  live?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Mentor Site (Flask)",
    blurb:
      "Mentoring site built with Flask/Jinja; local dev & containerized deploy. Includes tests and scripts to freeze/build & ship.",
    repo: "https://github.com/Sreyeesh/mentor-site",
    stack: ["Flask", "Jinja", "Python", "Docker", "Pytest", "Shell"],
  },
  {
    title: "Disk Monitoring",
    blurb:
      "Lightweight disk-usage monitoring utility for Linux servers; cron-friendly scripts and alerting hooks.",
    repo: "https://github.com/Sreyeesh/disk-monitoring",
    stack: ["Bash", "Linux", "Cron", "Monitoring"],
  },
  {
    title: "Web App Deployment Script",
    blurb:
      "Reusable deployment script for web apps: build, package, and bring up services with predictable steps.",
    repo: "https://github.com/Sreyeesh/Building-a-Web-Application-Deployment-Script",
    stack: ["Shell", "CI/CD", "Docker"],
  },
  {
    title: "Keynote Site",
    blurb:
      "Static site for talks/keynotes; Nginx config + Docker compose for local preview and simple hosting.",
    repo: "https://github.com/Sreyeesh/keynote-site",
    stack: ["HTML", "CSS", "Nginx", "Docker"],
  },
  {
    title: "Sortify (Go)",
    blurb:
      "Sorting playground/utility written in Go — handy for experimenting with algorithms and simple benchmarking.",
    repo: "https://github.com/Sreyeesh/Sortify",
    stack: ["Go", "Algorithms", "CLI"],
  },
];

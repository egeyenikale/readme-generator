export const project = {
  slug: "readme-generator",
  title: "README Generator",
  description: "CLI tool that creates professional README files from project metadata.",
  features: [
  "Project metadata input",
  "Template engine",
  "Markdown sections",
  "Technology badges",
  "Usage examples",
  "Validation"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}

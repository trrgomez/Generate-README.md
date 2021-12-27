// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  let markdownTemplete = `
  # ${data.title}
 
  ## Description
  ${data.description}
 `;

 let tableOfcontents = `## Table of Contents`;

 if (data.installation !== '') { tableOfcontents += `
* [Installation](#installation)` };

if (data.usage !== '') { tableOfcontents += `
* [Usage](#usage)` };

if (data.contributing !== '') { tableOfcontents += `
* [Contributing](#contributing)` };

if (data.tests !== '') { tableOfcontents += `
* [Tests](#tests)` };


if (data.license !== '') { tableOfcontents += `
* [License](#license)` };

markdownTemplete += tableOfcontents;

}

module.exports = generateMarkdown;

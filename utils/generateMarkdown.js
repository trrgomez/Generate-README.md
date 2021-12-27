// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Github licence](http://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  let markdownTemplete = `
  # ${data.title}
 
  ## Description
  ${data.description}
 `;

 let tableOfcontents = `
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributing](#contributing)
 * [Tests](#tests)
 `;

if (data.license !== '') { tableOfcontents += `
* [License](#license)` };

markdownTemplete += tableOfcontents;

markdownTemplete +=
`   
## Installation    
${data.installation}
`;

markdownTemplete +=      
`   
## Usage     
${data.usage}
`;
      
markdownTemplete +=        
`    
## Contributing    
${data.contributing}
`;
      
markdownTemplete +=
`    
## Tests  
${data.tests} 
`


// if license is provided
if(data.license !== ''){
markdownTemplete += 
`
## License
${renderLicenseBadge(data.license)}

`
}
  
  
// Questions section
  
let questionSection = 
`
  
## Questions
  
contact me at: ${data.email}
GitHub Profile: [https://github.com/${data.username}](https://github.com/${data.username})
  
`
  markdownTemplete += questionSection
  
  return markdownTemplete

}

module.exports = generateMarkdown;

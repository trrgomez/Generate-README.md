// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  // the begining of the readme templete
  let markdownTemplete = `
  # ${data.title}
 
  ## Description
  ${data.description}
 `;

//  table of contents
 let tableOfcontents = `
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [License](#license)
 `;

// append table of contents to markdown templete
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
`;

markdownTemplete += 
`
## License
![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
`;
 
// Questions section
  
let questionSection = 
`
  
## Questions
  
contact me at: ${data.email}
GitHub Profile: [https://github.com/${data.username}](https://github.com/${data.username})
  
`
// append question section to templete
  markdownTemplete += questionSection
  
  return markdownTemplete

}

// exports page
module.exports = generateMarkdown;

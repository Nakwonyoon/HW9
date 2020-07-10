function generateMarkdown(data) {
  return `

# ${data.title}
[![License:${ data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licnese](#Licnese)
* [Contribution](#Contribution)
* [Test](#Test)
* [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Licnese 
[![License:${ data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

## Contribution
${data.contributing}

## Test
${data.tests}

## Questions 
Github profile : https://github.com/${data.username}

[Anytime] Email : ${data.email}
`;
  
}

module.exports = generateMarkdown;

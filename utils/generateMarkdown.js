// If any of the prompts that pertain to the follow functions were left blank, return an empty string
// Returns user story in a code block
const renderUserStory = userStory => (userStory != '') ? '\n\n## User Story\n\`\`\`\n' + userStory + '\n\`\`\`' : ''

// Returns additional installation instructions
const renderAdditionalInstructions = installation => (installation != '') ? '\n' + installation : ''

// Returns license badge
const renderLicenseBadge = (license, badgeColor) => (license != 'Unlicensed') ? '[![license](https://img.shields.io/badge/license-' + license + '-' + badgeColor + ')](./LICENSE)' : ''

// Returns license table of contents link
const renderLicenseLink = license => (license != 'Unlicensed') ? '\n- [License](#license)' : ''

// Returns license section header and badge
const renderLicenseSection = license => (license != 'Unlicensed') ? '\n\n## License\nThis application is covered under the ' + license + ' license.' : ''

// Returns features table of contents link
const renderFeaturesLink = features => (features != '') ? '\n- [Features](#features)' : ''

// If the user input the features in the format the prompt stated, splits the features and returns feature section header and list
const renderFeaturesList = features => {
  if (features != '') {
    const featurePrep = '\n\n## Features\n- ' + features;
    const featureList = featurePrep.replaceAll(' & ', '\n- ');
    return featureList;
  } else {
    return '';
  }
}

// Returns contributing table of contents link
const renderContributingLink = contributing => (contributing == 'Yes') ? '\n- [Contributing](#contributing)' : ''

// Returns contributing section headers and content
const renderContributingSection = contributing => (contributing == 'Yes') ? '\n\n## Contributing\nWhen contributing to this repository, please contact the owner by opening an issue or sending an emailing before making a change.\n\n### Pull Requests\n1. Update the README.md with details of the changes made.\n2. Contact another developer on the project to review your pull request.\n3. Merge the pull request after it has been reviewed and approved. If you do not have merge access, contact another developer to merge the pull request.' : ''

// Returns tests table of contents link
const renderTestsLink = tests => (tests != '') ? '\n- [Tests](#tests)' : ''

// Returns tests section header and content
const renderTestsSection = tests => (tests != '') ? '\n\n## Tests\n' + tests : ''

// Function to pull response data from the prompts to create a markdown
// Formatting on certain markdown elements were necessary to be in-line because if optional prompts were omitted, this formatting will ensure there are no unnecessary line breaks in the generated README
const generateMarkdown = data => {
  return `# ${data.title}
${renderLicenseBadge(data.license, data.badgeColor)}
## Description
${data.description}${renderUserStory(data.userStory)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(data.license)}${renderFeaturesLink(data.features)}${renderContributingLink(data.contributing)}${renderTestsLink(data.tests)}
- [Questions](#questions)

## Installation
To get the app on your local machine:
Click on the code button on the repo.
Copy the HTTPS or SSH link.
Run the command \`git clone\` with the copied HTTPS or SSH link.${renderAdditionalInstructions(data.installation)}

## Usage
${data.visual}

![alt text](enter committed web visual file path here)${renderLicenseSection(data.license)}${renderFeaturesList(data.features)}${renderContributingSection(data.contributing)}${renderTestsSection(data.tests)}

## Questions
To view more of my projects, you can visit my GitHub page at [${data.username}](https://github.com/${data.username}).
If you have questions, email me at [${data.email}](mailto:${data.email}).`;
}

module.exports = { generateMarkdown };

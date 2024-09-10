// Get form and resume elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume') as HTMLElement;

// Listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get user input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  // Generate the resume dynamically
  resumeSection.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    
    <h4>Education</h4>
    <p>${education}</p>
    
    <h4>Work Experience</h4>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Company:</strong> ${company}</p>
    
    <h4>Skills</h4>
    <ul>
      ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
    </ul>
  `;
});

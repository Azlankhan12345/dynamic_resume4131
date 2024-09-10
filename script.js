// Get form and resume elements
var form = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume');
// Listen for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate the resume dynamically
    resumeSection.innerHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    \n    <h4>Education</h4>\n    <p>").concat(education, "</p>\n    \n    <h4>Work Experience</h4>\n    <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n    <p><strong>Company:</strong> ").concat(company, "</p>\n    \n    <h4>Skills</h4>\n    <ul>\n      ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n    </ul>\n  ");
});

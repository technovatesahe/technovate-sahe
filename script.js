// This array holds your team members' data.
// Replace the dummy data with your actual members' info.
const teamMembers = [
    {
        name: "Akash Sharma",
        role: "President",
        photoUrl: "", // Leave this empty for now
        github: "https://github.com/akash-s",
        linkedin: "https://linkedin.com/in/akash-s",
        instagram: "https://instagram.com/akash-s"
    },
    {
        name: "Priya Singh",
        role: "Web Lead",
        photoUrl: "", // Leave this empty
        github: "https://github.com/priya-s",
        linkedin: "https://linkedin.com/in/priya-s",
        instagram: "https://instagram.com/priya-s"
    },
    {
        name: "Rahul Kumar",
        role: "Design Lead",
        photoUrl: "", // Leave this empty
        github: "https://github.com/rahul-k",
        linkedin: "https://linkedin.com/in/rahul-k",
        instagram: "https://instagram.com/rahul-k"
    }
];

const memberList = document.getElementById("member-list");
const profileDisplay = document.getElementById("profile-display");

// Function to render the list of names from the teamMembers array
function renderMemberList() {
    teamMembers.forEach(member => {
        const listItem = document.createElement("li");
        listItem.textContent = member.name;
        listItem.dataset.name = member.name; // Store the name as a data attribute
        memberList.appendChild(listItem);
    });
}

// Function to display a member's profile
function displayProfile(member) {
    profileDisplay.innerHTML = `
        <div class="profile-photo-placeholder"></div>
        <div class="profile-details">
            <h3>${member.name}</h3>
            <p><strong>Role:</strong> ${member.role}</p>
            <div class="social-links">
                <a href="${member.linkedin}" target="_blank">LinkedIn</a>
                <a href="${member.github}" target="_blank">GitHub</a>
                <a href="${member.instagram}" target="_blank">Instagram</a>
            </div>
        </div>
    `;
    profileDisplay.classList.add("active");
}

// Event listener for clicks on the member list
memberList.addEventListener("click", (event) => {
    // Check if a list item (li) was clicked
    if (event.target.tagName === "LI") {
        // Remove 'active-name' class from all other list items
        document.querySelectorAll("#member-list li").forEach(item => {
            item.classList.remove("active-name");
        });

        // Add 'active-name' class to the clicked item
        event.target.classList.add("active-name");

        const clickedName = event.target.dataset.name;
        const selectedMember = teamMembers.find(member => member.name === clickedName);

        // If a matching member is found, display their profile
        if (selectedMember) {
            displayProfile(selectedMember);
        }
    }
});

// Initial call to render the list of names when the page loads
renderMemberList();

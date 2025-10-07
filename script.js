const employees = [
  { name: "John Smith", position: "Software Engineer", email: "john@company.com", photo: "https://i.pravatar.cc/80?img=1" },
  { name: "Mary Johnson", position: "HR Manager", email: "mary@company.com", photo: "https://i.pravatar.cc/80?img=2" },
  { name: "David Lee", position: "Project Manager", email: "david@company.com", photo: "https://i.pravatar.cc/80?img=3" },
  { name: "Sophia Brown", position: "UI/UX Designer", email: "sophia@company.com", photo: "https://i.pravatar.cc/80?img=4" },
  { name: "Chris Evans", position: "Backend Developer", email: "chris@company.com", photo: "https://i.pravatar.cc/80?img=5" },
  { name: "Emma Watson", position: "QA Engineer", email: "emma@company.com", photo: "https://i.pravatar.cc/80?img=6" },
  { name: "Liam Miller", position: "Data Analyst", email: "liam@company.com", photo: "https://i.pravatar.cc/80?img=7" }
];

// Function to display employee cards
function displayEmployees(list) {
  const container = document.getElementById("employeeList");
  container.innerHTML = "";

  list.forEach(emp => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${emp.photo}" alt="${emp.name}">
      <h3>${emp.name}</h3>
      <p>${emp.position}</p>
      <p>${emp.email}</p>
    `;
    container.appendChild(card);
  });
}

// Search employee by name
function searchEmployee() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = employees.filter(emp => emp.name.toLowerCase().includes(query));
  displayEmployees(filtered);
}

// Initial display
displayEmployees(employees);
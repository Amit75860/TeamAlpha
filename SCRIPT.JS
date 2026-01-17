// MOBILE NAV TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu on link click (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===== LOADING SCREEN CONTROL =====
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
  }, 2600);
});



// ==== TEAM DATA ====
const members = [
  { name: "Amit Ranjan Kuiry", role: "Team member", photo: "https://media.licdn.com/dms/image/v2/D5603AQEA2qtXrR_JVg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725687204948?e=1769644800&v=beta&t=FlizpTJpbFpqYt8ub2HlHj60NnH1wmGGc5-2FRV52tM", surveyed: 19, educated: 12, aiKnown: 7, aiNotKnown: 12 },
  { name: "Bablu Mahato", role: "Team Member", photo: "https://media.licdn.com/dms/image/v2/D4D03AQEYRyRhqjJ1pQ/profile-displayphoto-scale_400_400/B4DZuym_l8IIAg-/0/1768228128008?e=1769644800&v=beta&t=c7z3duqL4sXWX7mtEhEnN8OR0CQ5ECQCjChep8TXUmU", surveyed: 19, educated: 12, aiKnown: 8, aiNotKnown: 11 },
  { name: "Rohit Rajwar", role: "Team member", photo: "https://media.licdn.com/dms/image/v2/D5603AQHhn9G_cGn2EQ/profile-displayphoto-shrink_400_400/B56ZRG2MVTGQAk-/0/1736355406482?e=1769644800&v=beta&t=Ty705pcm_o7HEoeHUCdVEDABXl4D1V-M8oKkN7cHZ7s", surveyed: 19, educated: 13, aiKnown: 9, aiNotKnown: 10 },
  { name: "Sourav Mahatha", role: "Team member", photo: "https://scontent.frdp4-2.fna.fbcdn.net/v/t39.30808-1/333974689_729238988852296_3514690703731494046_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=yzBIdk58XwIQ7kNvwFhM5L6&_nc_oc=AdlsIBWmL0PLxB_MCywIX8vxKXJMGKtYnUtZJz2mWnhZVIansjEZNNX2yZJf4Isdk32vY8R9ICW_XJwjdyg75fNA&_nc_zt=24&_nc_ht=scontent.frdp4-2.fna&_nc_gid=zMh4TfRXBwR_x72J8Kh5Aw&oh=00_Afp258OMIXUmRsxvuoIsTDSk9z1YBnwnIThFn8ba5gDqnQ&oe=696AE5DF", surveyed: 19, educated: 10, aiKnown: 7, aiNotKnown: 12 },
  { name: "Nityananda Mahato", role: "Team member", photo: "https://scontent.frdp4-2.fna.fbcdn.net/v/t39.30808-1/332292659_768818367568071_284402613398327059_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=qdH7nvpXWj8Q7kNvwFYDb61&_nc_oc=AdlHbbrZXF4MGladxxfUN6_dwTSgkD0nP-qF_uBGU7cvvRbqbR0N-IeFYBQNX65j0W-mRMy2KWlPDC8sdJAnsJUH&_nc_zt=24&_nc_ht=scontent.frdp4-2.fna&_nc_gid=76feQImppPt8_bwEkAeK_w&oh=00_Afryt9YE_syL2mvUgVCMIJP-bZ3Lcaj8i0CGJv05fEtzrA&oe=696ADBDF", surveyed: 19, educated: 12, aiKnown: 7, aiNotKnown: 12 },
  { name: "Sayan Banerjee", role: "Team member", photo: "https://media.licdn.com/dms/image/v2/D4D03AQH46QbvLSPfoQ/profile-displayphoto-shrink_400_400/B4DZvG3GeJJQAg-/0/1768567892409?e=2147483647&v=beta&t=oLiXYTymBQafuU35rxpTJ2hUI8SAm4rxcEHJYUxwRRo", surveyed: 19, educated: 11, aiKnown: 9, aiNotKnown: 10 }
];

// ==== DOM ELEMENTS ====
const teamSection = document.getElementById("teamSection");
const tableBody = document.getElementById("dataTable");
const summarySection = document.querySelector('.summary');
const progressFills = document.querySelectorAll('.progress-fill');

// ==== TOTALS ====
let totalSurveyed = 0;
let totalEducated = 0;
let totalAiKnown = 0;
let totalAiNotKnown = 0;

// ==== RENDER TEAM CARDS & TABLE ====
members.forEach(member => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${member.photo}" alt="${member.name}" loading="lazy">
    <h3>${member.name}</h3>
    <div class="role">${member.role}</div>
    <p>👥 Surveyed: ${member.surveyed}</p>
    <p>🎓 Educated: ${member.educated}</p>
  `;

  // CLICK EVENT → OPEN POPUP
  card.addEventListener("click", () => openProfile(member));

  teamSection.appendChild(card);

  // Table row
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${member.name}</td>
    <td>${member.surveyed}</td>
    <td>${member.educated}</td>
    <td>${member.aiKnown}</td>
    <td>${member.aiNotKnown}</td>
  `;
  tableBody.appendChild(row);

  totalSurveyed += member.surveyed;
  totalEducated += member.educated;
  totalAiKnown += member.aiKnown;
  totalAiNotKnown += member.aiNotKnown;
});


const aiScore = Math.round((totalAiKnown / totalSurveyed) * 100);

document.getElementById("aiScore").innerText = aiScore + "%";
document.getElementById("aiScoreBar").style.width = aiScore + "%";


// ==== ANIMATE NUMBERS FUNCTION ====
function animateNumber(id, target) {
  let count = 0;
  const increment = Math.ceil(target / 50);
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    document.getElementById(id).innerText = count;
  }, 20);
}

// ==== SCROLL-TRIGGERED ANIMATION ====
let animated = false;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      // Animate numbers
      animateNumber("totalSurveyed", totalSurveyed);
      animateNumber("totalEducated", totalEducated);
      animateNumber("aiKnown", totalAiKnown);
      animateNumber("aiNotKnown", totalAiNotKnown);

      // Animate progress bars (example max 150)
      progressFills[0].style.width = `${(totalSurveyed / 150) * 100}%`;
      progressFills[1].style.width = `${(totalEducated / 150) * 100}%`;
      progressFills[2].style.width = `${(totalAiKnown / 150) * 100}%`;
      progressFills[3].style.width = `${(totalAiNotKnown / 150) * 100}%`;

      // Pie Chart
      const ctxPie = document.getElementById('aiPieChart').getContext('2d');
      new Chart(ctxPie, {
        type: 'pie',
        data: {
          labels: ['AI Aware', 'AI Not Aware'],
          datasets: [{
            label: 'AI Awareness',
            data: [totalAiKnown, totalAiNotKnown],
            backgroundColor: ['#3498db', '#e74c3c']
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom' } }
        }
      });

      // Bar Chart - Member Survey vs Educated
      const ctxBar = document.getElementById('memberBarChart').getContext('2d');
      new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: members.map(m => m.name),
          datasets: [
            {
              label: 'Surveyed',
              data: members.map(m => m.surveyed),
              backgroundColor: '#3498db'
            },
            {
              label: 'Educated',
              data: members.map(m => m.educated),
              backgroundColor: '#2ecc71'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom' } },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });

      animated = true;
    }
  });
}, { threshold: 0.5 });

observer.observe(summarySection);

const modal = document.getElementById("profileModal");
const closeBtn = document.querySelector(".close-btn");

function openProfile(member) {
  document.getElementById("modalPhoto").src = member.photo;
  document.getElementById("modalName").innerText = member.name;
  document.getElementById("modalRole").innerText = member.role;
  document.getElementById("modalSurveyed").innerText = member.surveyed;
  document.getElementById("modalEducated").innerText = member.educated;
  document.getElementById("modalAiKnown").innerText = member.aiKnown;
  document.getElementById("modalAiNotKnown").innerText = member.aiNotKnown;

  modal.style.display = "flex";
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});


// Cache the DOM elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

// ---DATA FROM SUPERBASE

//Run the below async function
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://xoyeshynepoflasuwlnz.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhveWVzaHluZXBvZmxhc3V3bG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2MjAxMzcsImV4cCI6MTk4NzE5NjEzN30._MSGLUqK18n1wb-Q_QzPewQv7oBjxNxN-IRBRExP200",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhveWVzaHluZXBvZmxhc3V3bG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2MjAxMzcsImV4cCI6MTk4NzE5NjEzN30._MSGLUqK18n1wb-Q_QzPewQv7oBjxNxN-IRBRExP200",
      },
    }
  );
  //transfer data into json
  const data = await res.json();

  //log data to console

  console.log(data);
}

// ---EVENT HANDLER

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

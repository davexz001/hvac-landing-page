document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  const res = await fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const status = document.getElementById("status");

  if (res.ok) {
    status.innerText = "Request submitted successfully!";
    status.style.color = "green";
  } else {
    status.innerText = "Something went wrong.";
    status.style.color = "red";
  }

  e.target.reset();
});

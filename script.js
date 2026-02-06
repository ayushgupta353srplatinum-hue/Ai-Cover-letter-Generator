async function generate() {async function generate() {
  document.getElementById("loading").style.display = "block";

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;
  const prompt = `
Write a professional cover letter.

Name: ${name}
Applying for Role: ${role}
Company Name: ${company}
Skills: ${skills}

Tone: professional, clear, confident.
`;

  const res = await fetch("http://localhost:5000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const result = await res.json();

  document.getElementById("output").value = result.output;

  document.getElementById("loading").style.display = "none";
}

// Copy button
function copy() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Copied!");
}



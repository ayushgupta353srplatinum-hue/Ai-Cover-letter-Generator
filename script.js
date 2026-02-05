async function generate() {
  document.getElementById("loading").style.display = "block";
  document.getElementById("output").value = "";

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

  const res = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const result = await res.json();

  document.getElementById("output").value =
    result.output || "No response received.";

  document.getElementById("loading").style.display = "none";
}

function copy() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("✅ Copied to clipboard!");
}


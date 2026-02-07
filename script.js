let selectedContext = [];

function addContext(context) {
  if (selectedContext.includes(context)) {
    selectedContext = selectedContext.filter(c => c !== context);
  } else {
    selectedContext.push(context);
  }
  event.target.classList.toggle("active");
}

function generateStatus() {
  const sleep = document.getElementById("sleep").value;
  const stress = document.getElementById("stress").value;
  const activity = document.getElementById("activity").value;

  let status = "On Track ✅";
  let explanation = "Your habits look balanced today.";

  if (sleep < 6 || activity === "None") {
    status = "Lower Activity — Explanation Available";
    explanation =
      `Main factors: Sleep (${sleep || 0} hrs), Activity (${activity}). ` +
      (selectedContext.length ? `Context noted: ${selectedContext.join(", ")}.` : "No context added.");
  }

  document.getElementById("result").style.display = "block";
  document.getElementById("statusText").innerText = status;
  document.getElementById("explanation").innerText = explanation;
}

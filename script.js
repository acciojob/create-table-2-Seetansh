function createTable() {
  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear existing content

  const rn = parseInt(prompt("Input number of rows"));
  const cn = parseInt(prompt("Input number of columns"));

  if (isNaN(rn) || isNaN(cn)) return;
  if (rn <= 0 || cn <= 0) {
    alert("Please enter positive numbers greater than 0.");
    return;
  }

  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}

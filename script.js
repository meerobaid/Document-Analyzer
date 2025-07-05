const mockData = {
  documentName: "invoice.pdf",
  fields: {
    InvoiceNumber: "INV-1001",
    Date: "2025-07-01",
    CustomerName: "John Doe",
    TotalAmount: "$450.00"
  },
  table: [
    ["Item", "Quantity", "Price"],
    ["Laptop", "1", "$400"],
    ["Mouse", "1", "$50"]
  ],
  summary: "This invoice includes a laptop and a mouse with a total value of $450."
};

document.getElementById("documentUpload").addEventListener("change", function () {
  if (this.files.length > 0) {
    document.getElementById("results").classList.remove("d-none");
    renderData(mockData);
  }
});

function renderData(data) {
  const fieldsContainer = document.getElementById("fields");
  fieldsContainer.innerHTML = "";
  for (let key in data.fields) {
    const div = document.createElement("div");
    div.className = "card mb-2 p-2";
    div.innerHTML = `<strong>${key}:</strong> ${data.fields[key]}`;
    fieldsContainer.appendChild(div);
  }

  const table = document.getElementById("tableResults");
  table.innerHTML = "";
  data.table.forEach((row, index) => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement(index === 0 ? "th" : "td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  document.getElementById("summary").textContent = data.summary;
}
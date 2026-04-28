let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

function addTicket() {

  let totalVal = Number(document.getElementById("total").value);
  let paidVal = Number(document.getElementById("paid").value);
  let due = totalVal - paidVal;

  let data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    sector: document.getElementById("sector").value,
    ticketDate: document.getElementById("ticketDate").value,
    flightDate: document.getElementById("flightDate").value,
    total: totalVal,
    paid: paidVal,
    due: due,
    payment: document.getElementById("payment").value
  };

  tickets.push(data);
  localStorage.setItem("tickets", JSON.stringify(tickets));

  showTickets();
}

function showTickets() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  tickets.forEach((t, i) => {
    list.innerHTML += `
      <div class="card">
        <b>${t.name}</b><br>
        ${t.phone}<br>
        ${t.sector}<br>
        Ticket: ${t.ticketDate}<br>
        Flight: ${t.flightDate}<br>
        Total: ${t.total} | Paid: ${t.paid} | Due: ${t.due}<br>
        Payment: ${t.payment}

        <br><br>
        <button onclick="printTicket(${i})">🖨️ Print</button>
      </div>
    `;
  });
}

function printTicket(i){
  let t = tickets[i];

  let win = window.open('', '', 'width=800,height=600');

  win.document.write(`
    <h2>Travel Invoice</h2>
    <hr>
    Name: ${t.name}<br>
    Phone: ${t.phone}<br>
    Sector: ${t.sector}<br>
    Ticket Date: ${t.ticketDate}<br>
    Flight Date: ${t.flightDate}<br>
    Total: ${t.total}<br>
    Paid: ${t.paid}<br>
    Due: ${t.due}<br>
    Payment: ${t.payment}
  `);

  win.print();
}

showTickets();
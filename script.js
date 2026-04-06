function doPost(e) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet()
  .getSheetByName("Sheet1");

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.phone,
    data.service,
    data.date,
    data.time,
    data.message
  ]);

  return ContentService
    .createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}document.getElementById("bookingForm")
.addEventListener("submit", async function(e) {

e.preventDefault();

const data = {
  name: document.getElementById("name").value,
  phone: document.getElementById("phone").value,
  service: document.getElementById("service").value,
  date: document.getElementById("date").value,
  time: document.getElementById("time").value,
  message: document.getElementById("message").value
};

await fetch("PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE", {
  method: "POST",
  body: JSON.stringify(data)
});

document.getElementById("status").innerText =
"✅ Appointment Booked Successfully!";alert("✅ Appointment received! We will contact you soon.");
});

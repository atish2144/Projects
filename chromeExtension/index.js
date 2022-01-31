let myleads = [];

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const deletBtn = document.getElementById("delete-btn");

//console.log(ulEl);

const inputbutton = document.getElementById("input-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myleads = leadsFromLocalStorage;
  renderLeads();
}

//console.log(leadsFromLocalStorage);

inputbutton.addEventListener("click", function () {
  myleads.push(inputEl.value);

  localStorage.setItem("myleads", JSON.stringify(myleads));

  renderLeads();
  console.log(localStorage.getItem("myleads"));
});

function renderLeads() {
  let listitems = "";

  for (let i = 0; i < myleads.length; i++) {
    // listitems +=
    //   "<li><a target='_blank' href='" +
    //   myleads[i] +
    //   "'>" +
    //   myleads[i] +
    //   "</a></li>";

    listitems += `<li>
             <a target='_blank' href=' ${myleads[i]} '>
             ${myleads[i]}
             </a>
        </li>`;
  }
  ulEl.innerHTML = listitems;
}

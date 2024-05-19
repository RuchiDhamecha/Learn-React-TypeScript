import { form, savebtn, tbody } from "./references.js";
import { getFormData, createTd, createRow, createElement } from "./utils.js";

savebtn.addEventListener("click", (e) => {
  e.preventDefault();
//   if(!form.checkValidity){
//     form.reportValidy();
//     return;
// }
  // console.log(form);
  // console.log(getFormData(form));
  const userData = getFormData(form);
  const nameTd = createTd(userData.name);
  const ageTd = createTd(userData.age);
  // const addressTd = createTd(userData.address);
  const contactTd = createTd(userData.contact);

  //for button

  const editbtn = createElement("button");//<button></button>
  const delbtn = createElement("button");
  editbtn.textContent="edit";
  delbtn.textContent="delete";
  // console.log(editbtn);
  const button = createTd(editbtn,delbtn);

  const row = createRow(nameTd, ageTd, contactTd,button);
  tbody.appendChild(row);
  console.log(tbody);
  console.log(nameTd);
});
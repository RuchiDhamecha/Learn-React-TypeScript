import { form, savebtn, tbody } from "./references.js";
import { getFormData, createTd, createRow, createElement, createbtn } from "./utils.js";

savebtn.addEventListener("click", (e) => {
  e.preventDefault();  //no server side rendering link form no data to browser
  if(!form.checkValidity){
    form.reportValidy()
    return;

}
  console.log(form);    // form tags return
  console.log(getFormData(form));
  const userData = getFormData(form);
  const nameTd = createTd(userData.name);
  const ageTd = createTd(userData.age);
  // const addressTd = createTd(userData.address);

  const contactTd = createTd(userData.contact);
  const editbtn = createbtn("edit");
   editbtn.classList.add("btn","btn-ok")  // to add css to edit btn

    const deletebtn = createbtn("delete");
    editbtn.classList.add("btn","btn-ok");   // to add css to delete btn
  console.log(editbtn);
  const button = createTd();
  // console.log(userData.name);
  // const name = document.createElement("tr");
  // console.log(name);
  // tbody.appendChild();

  deletebtn.addEventListener("click",(e)=>{
    console.log(btn);
  })

  editbtn.addEventListener("click",(e)=>{
    console.log(btn);
  })
  const row = createRow(nameTd, ageTd, contactTd,editbtn,deletebtn);
  tbody.appendChild(row);
  console.log(tbody);
  console.log(nameTd);
  console.log(deletebtn);
});


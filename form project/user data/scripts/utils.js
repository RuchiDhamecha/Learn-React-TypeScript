export const getFormData = (formEl) => {
  const formData = new FormData(formEl);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  return data;
};

export const createElement = (type) => document.createElement(type);

export const createRow = (...tds) => {
  const row = createElement("tr");
  for (let td of tds) {
    row.appendChild(td);
    if(td instanceof document.HTMLElement){
      row.appendChild(createElement(butt))
    }
  }
  return row;
};

export const createTd = (content) => {
  const td = createElement("td");
  td.innerHTML = content;
  return td;
};

export const createbtn = (content) =>{
  const btn = createElement("button");
  btn.innerHTML = content;
  return btn;
  
}

export default {
  getFormData,
};
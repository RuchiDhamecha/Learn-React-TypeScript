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
  }
  return row;
};

export const createTd = (...content) => {
  const td = createElement("td");
  for (let cont of content) {
    if (cont instanceof HTMLElement) {
      td.appendChild(cont);
    } else {
      td.innerHTML = content;
    }
  }
  return td;
};

export default {
  getFormData,
};
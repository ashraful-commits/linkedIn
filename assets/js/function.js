const setAlert = (msg, type) => {
  `<h5 class="alert alert-${type} text-center">${msg}</h5>`;
};

const setDataLS = (key, value) => {
  let data = [];
  if (localStorage.getItem(key)) {
    data = JSON.parse(localStorage.getItem(key));
  }
  data.push(value);
  return localStorage.setItem(key, JSON.stringify(data));
};

const getItemLs = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
};

const updateLsData = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
};

const timeCounter = (postTime) => {
  let currentTime = Date.now();

  let timeDiff = currentTime - postTime;

  let TotalSecond = Math.floor(timeDiff / 1000);
  let Total_min = Math.floor(TotalSecond / 60);
  let TotalHour = Math.floor(Total_min / 60);
  let totalDay = Math.floor(TotalHour / 24);

  if (TotalSecond <= 60) {
    return `${TotalSecond} sec ago`;
  } else if (TotalSecond >= 60) {
    return `${Total_min / 60} min ago`;
  } else if (Total_min >= 60) {
    return `${TotalHour / 60} hour ago`;
  } else if (TotalHour >= 24) {
    return `${totalDay / 24} day ago`;
  }
};

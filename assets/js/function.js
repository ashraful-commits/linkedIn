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

// timeCounter

const timeCounter = (postTime) => {
  let currentTime = Date.now();
  let timeDiff = currentTime - postTime;

  let totalSecond = Math.floor(timeDiff / 1000);
  let totalMin = Math.floor(totalSecond / 60);
  let totalHour = Math.floor(totalMin / 60);
  let totalDay = Math.floor(totalHour / 24);

  if (totalSecond <= 59) {
    return `${totalSecond} sec ago`;
  }
  if (totalSecond <= 60 || totalSecond <= 3599) {
    return `${totalMin} min ago`;
  }
  if (totalSecond >= 3600 || totalSecond <= 86399) {
    return `${totalHour} hour ago`;
  }
  if (totalSecond >= 86400) {
    return `${totalDay} day ago`;
  }
};

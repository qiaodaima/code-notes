function doA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('doA success');
    }, 2000);
  });
}

function doB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('doB success');
    }, 2000);
  });
}

function doC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('doC success');
    }, 2000);
  });
}

function doD() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('doD success');
    }, 2000);
  });
}


doA()

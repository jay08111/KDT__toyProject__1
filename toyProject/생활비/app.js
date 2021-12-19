const list = document.querySelector(".list");
const getData = async () => {
  let res = await fetch(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4d3d3-c52c-4ea8-b665-968a3b17c5ea/bank.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211216T111948Z&X-Amz-Expires=86400&X-Amz-Signature=d7a1aaefc2bc66b1650574ef85d8a96b89e2f38fd03c4219b5adf7e14bb4c2d6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bank.json%22&x-id=GetObject"
  );
  let data = await res.json();
  console.log(data.bankList);
  const filteredData = data.bankList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date); // ascending
  });
  return filteredData;
};
const showData = (item) => {
  console.log(item);
  let result = "";
  item.slice(0, 3).map((data) => {
    result += `<div>${data.date}<div/>`;
  });
  list.innerHTML = result;
};

document.addEventListener("DOMContentLoaded", () => {
  getData().then((item) => showData(item));
});

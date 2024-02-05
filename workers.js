onmessage = async function (event) {
  //  const data = event.data;
  // console.log("============================> ");
  // let processFunction = new Function("return", data.func);
  let arr = await LoadData();
  arr.sort((a, b) => a.postId - b.postId);

  this.postMessage(arr);
};

async function LoadData() {
  let data = await fetch("https://dummyjson.com/comments?limit=340", {
    method: "GET",
  });
  let d = await data.json();
  return d.comments;
}

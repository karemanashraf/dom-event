var enterButton = document.getElementById("enter");
var input = document.getElementById("user-input");
var myList = document.getElementById("my-list");

enterButton.addEventListener("click", function(event) {
  if (input.value === "") {
    return;
  }
  var items = input.value;
  var newElement = document.createElement("li");
  newElement.innerHTML = items;
  myList.appendChild(newElement);
  input.value = "";

  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";

  deleteBtn.addEventListener("click", function(event) {
    event.target.parentNode.remove();
  });

  newElement.appendChild(deleteBtn);
});

var deleteList = document.getElementsByClassName("delete");

for (var i = 0; i < deleteList.length; i++) {
  var deleteBtn = deleteList[i];

  deleteBtn.addEventListener("click", function(event) {
    event.target.parentNode.remove();
  });
}

input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    var items = input.value;
    var newElement = document.createElement("li");
    newElement.innerHTML = items;
    myList.appendChild(newElement);
    input.value = "";

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";

    deleteBtn.addEventListener("click", function(event) {
      event.target.parentNode.remove();
    });

    newElement.appendChild(deleteBtn);
  }
});

myList.addEventListener("click", function(toggle) {
  myList.classList.toggle("done");
});

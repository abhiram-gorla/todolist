window.onload = function() {
	//variables
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var list = document.getElementById("list");
	var btnClr = document.getElementById("btnClr");
	var id = 1;
	// listItem = {item: "todo item", checked: flase}
	var liItem = "";
	var todoList = [];

	//button event listener
	btn.addEventListener("click", addTodoItem);

	//list event listener
	list.addEventListener("click", boxChecked);

	//event listener for clear list
	btnClr.addEventListener("click", clearList);
  function addTodoItem() {
  		if(input.value === "") {
  			alert("You must enter some value!");
  		}
  		else {
  			if(list.style.borderTop === "") {
  				console.log("here!")
  				list.style.borderTop = "2px solid white";
  				btnClr.style.display = "inline";
  			}
  			var text = input.value;
  			var item = `<li id="li-${id}" style=font-size=20px;>${text}<input id="box-${id}" 			class="checkboxes" type="checkbox"></li>`;
  			list.insertAdjacentHTML('beforeend', item);
  			liItem = {item: text, checked: false};
  			todoList.push(liItem);
  			id++;

  			form.reset();
  		}
  	}

  	//adding string through style to list itme
  	function boxChecked(event) {
  		const element = event.target;
  		if(element.type === "checkbox") {
  			element.parentNode.style.textDecoration = "line-through";

  			todoList[element.id.split('-')[1]-1].checked = element.checked.toString();

  		}

  	}function clearList() {
		todoList = [];

		list.innerHTML = "";
		btnClr.style.display = "none";
		list.style.borderTop = "";
  }}

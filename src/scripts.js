function newItem() {

  //1 --- Adding a new list item ---

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
 
  //2 --- Crossing out a list item ---

  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

  //3 --- Adding the delete button "X" ---
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append('X');
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
 		li.addClass("delete")
 	}
     
  //4 --- Reordering the items ---
  $('#list').sortable();
}
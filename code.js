function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
      // create new HTML list item
      var item = document.createElement("li");
      // add HTML for buttons and new task text
      // Note, need to use '' because of "" in HTML
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + 
        '<input type="button" class="important" value="!" onclick="important(this.parentNode)"/>' +
      newTask;
      // add new item as part of existing list
      document.getElementById("tasks").appendChild(item);  
      
      
      var input = document.getElementById("input");
      input.value = "enter next task...";
    }
  }
  
  
  
  // change styling used for given item
  function markDone (item) { 
      item.className = 'finished';
  }
  
  
  function remove (item) {
    // remove item completely from document
    if (item.className =='finished') {
         item.remove();
    }
  }
  
  function important (item) {
    item.className = 'important';
  }
  
  
  function doAbout() {
    var about = document.getElementById("divabout");
    var color = document.getElementById("divabout");
    divabout.innerHTML = "Author is Zachary Turney";
    divabout.className = "aboutcolor";
  }
  
  
  function clearAbout() {
    divabout.innerHTML = "";
  }

<!--jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- javascript -->
<script src="main.js" type="text/javascript"></script>

function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

$(document).ready(function(){
    $("#add-item").click(function() { // bind handler for click event
        var list = $("#grocery-list"); // get the ol list by id
        var itemInput = $("#new-list-item"); // get the new item input
	  // append the input value within an li element
        list.append("<li>" + itemInput.val() + "</li>"); 
    });
});

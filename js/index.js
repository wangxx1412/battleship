$(function() {
  $(".draggable").draggable({
    containment: "document",
    cursor: "move",
    revert: true
  });
});

$(function() {
  $(".dropsquare").droppable({
    drop: handleDrop
  });
});

function handleDrop(event, ui) {
  ui.draggable.position({
    of: $(this),
    my: "left top",
    at: "left top"
  });
  ui.draggable.draggable("option", "revert", false);
  console.log("Dropped");
  console.log(
    $(ui.draggable)
      .attr("class")
      .split(" ")[0]
  );
  console.log(
    $(this)
      .attr("class")
      .split(" ")[1]
  );
}

// Toggle to rotate the ship

// Cant duplicate ships

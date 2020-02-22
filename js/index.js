const field = {
  carrier: { location: [], rotate: false },
  battleShip: { location: [], rotate: false },
  destroyer: { location: [], rotate: false },
  submarine: { location: [], rotate: false },
  cruiser: { location: [], rotate: false }
};

// Drag
$(function() {
  $(".draggable").draggable({
    containment: ".field",
    cursor: "move",
    revert: true
  });
});

// Drop
$(function() {
  $(".dropsquare").droppable({
    drop: handleDrop
  });
});

$(function() {
  $(".fleet")
    .not(".dropsquare")
    .droppable({
      drop: handleDropOut
    });
});

// Drop handler
function handleDrop(event, ui) {
  ui.draggable.position({
    of: $(this),
    my: "left top",
    at: "left top"
  });

  ui.draggable.draggable("option", "revert", false);

  const ship = $(ui.draggable)
    .attr("class")
    .split(" ")[0];

  if (
    $(this)
      .attr("class")
      .split(" ")[0] === "dropsquare"
  ) {
    field[ship].location = [
      $(this)
        .attr("class")
        .split(" ")[1]
    ];
  }
  console.log(field);
}

// Toggle to rotate the ship
$(".rotate").dblclick(function(event) {
  const ship = $(this)
    .attr("class")
    .split(" ")[0];

  $(this).toggleClass(`${ship}rotated`);

  field[ship].rotate = !field[ship].rotate;

  if (field[ship].rotate) {
    field[ship].location;
  } else {
    field[ship].location;
  }
  console.log(field);
});

function handleDropOut(event, ui) {
  ui.draggable.position({
    of: $(this),
    my: "left top",
    at: "left top"
  });

  ui.draggable.draggable("option", "revert", false);

  const ship = $(ui.draggable)
    .attr("class")
    .split(" ")[0];

  field[ship].location = [];

  console.log("Out", field);
}

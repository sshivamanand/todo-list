const new_task = `<div class="task">
          <p class="task_inp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
              class="tick"
            >
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M8 12.5L10.5 15L16 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
            style="cursor: pointer;"
            class="cut"
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>`;

$(".add").click(function () {
  $(".add").addClass("pressed");
  setTimeout(() => {
    $(".add").removeClass("pressed");
  }, 200);
  let input = document.getElementById("inp").value;
  if (input === "") {
    window.alert("You must input some task");
  } else {
    $(".list").append(new_task);
    $(".task_inp:last").append("<span>" + input + "</span>");
  }
});

$(document).on("click", ".tick", function () {
  if ($(this).css("color") == "rgb(238, 82, 10)") {
    $(this).css("color", "black");
    $(this).parent().css("text-decoration", "none");
  } else {
    $(this).css("color", "rgb(238, 82, 10)");
    $(this).parent().css("text-decoration", "line-through");
  }
});

$(document).on("click", ".cut", function () {
  $(this).parent().remove();
});

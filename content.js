//Wait for the page to load and then make the code diff div full width!

const time = 500;
const selector = ".diff-files-holder";
const maxtime = time * 5;
let overlapsed = 0;
function wait(selector, time) {
  //https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  if (document.querySelector(selector) != null) {
    const els = document.getElementsByClassName("diff-files-holder");
    // .container-limited.limit-container-width.mx-lg-auto.px-3"
    if (els.length) els[0].style.maxWidth = "unset";
  } else if (overlapsed > maxtime) return;
  else {
    overlapsed += time;
    setTimeout(function () {
      wait(selector, time);
    }, time);
  }
}
wait(selector, time);
///*/-/merge_requests/*/diffs

const tabs = document.querySelectorAll('[data-toggle="tabvue"]');
tabs.forEach((el) => {
  el.addEventListener("mousedown", () => {
    overlapsed = 0;
    wait(selector, time);
  });
});

let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));

stack.addEventListener("click", next_event);


function next_event(e) {
    let card = document.querySelector(".card:last-child");
    if (e.target !== card) return;
    card.style.animation = "next_event 500ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
    }, 500);
}

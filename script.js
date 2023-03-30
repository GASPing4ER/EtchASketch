const container = document.querySelector(".container");
console.log(container);

const buttons = document.querySelectorAll(".btn")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        num = button.id;
        while (container.hasChildNodes())
               container.removeChild(container.firstChild)
        for (i = 0; i < num; i++) {
            const row = document.createElement("div");
            row.classList.add("row")
            for (j = 0; j < num; j++) {
                const col = document.createElement("div")
                col.classList.add("col")
                row.appendChild(col)
            }
        container.appendChild(row)
    }
    const cols = document.querySelectorAll(".col")
    definingCells(cols)
})})

let definingCells = (cols) => {
    console.log(cols)
    cols.forEach((column) => {
        column.addEventListener("mouseover", () => {
            column.classList.toggle("hovered")
        }
    )}
)}




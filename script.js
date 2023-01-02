const item = document.querySelector("#item");
const todo = document.querySelector("#todo");

item.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addTo(this.value);
        this.value = "";
    }
}
);
const addTo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item} <i class="fa-solid fa-xmark"></i>`;
    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
        alert(`${item} 📢 Hey wait !!! Are You Sure You Wanna Delete This❌ ... `);
    }
    );
    todo.appendChild(listItem);
};
// Time Function

function time() {
    d = new Date
    h = d.getHours()
    m = d.getMinutes()
    if (h > 12) {
        h = h - 12
    }
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    document.getElementById("time").innerHTML = `${h} : ${m}`
    setInterval(time, 1000)
}


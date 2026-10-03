const hall = [
    { row: 1,  seats: 20, type: "vip",    aisleAfter: 10 },
    { row: 2,  seats: 20, type: "vip",    aisleAfter: 10 },
    { row: 3,  seats: 20, type: "vip",    aisleAfter: 10 },
    { row: 4,  seats: 22, type: "middle", aisleAfter: 11 },
    { row: 5,  seats: 22, type: "middle", aisleAfter: 11 },
    { row: 6,  seats: 22, type: "middle", aisleAfter: 11 },
    { row: 7,  seats: 22, type: "middle", aisleAfter: 11 },
    { row: 8,  seats: 24, type: "cheap",  aisleAfter: 12 },
    { row: 9,  seats: 24, type: "cheap",  aisleAfter: 12 },
    { row: 10, seats: 24, type: "cheap",  aisleAfter: 12 }
];

const balcony = [
    { row: 1,  seats: 24, type: "vip"},
    { row: 2,  seats: 22, type: "middle"},
    { row: 3,  seats: 20, type: "middle"},
];

const sideCircle = [
    { row: 1,  seats: 1, type: "vip" },
    { row: 2,  seats: 1, type: "vip" },
    { row: 3,  seats: 1, type: "vip" },
    { row: 4,  seats: 1, type: "middle" },
    { row: 5,  seats: 1, type: "middle" },
    { row: 6,  seats: 1, type: "middle" },
    { row: 7,  seats: 1, type: "middle" },
    { row: 8,  seats: 1, type: "middle" },
    { row: 9,  seats: 1, type: "middle" },
    { row: 10, seats: 1, type: "middle" }
];

function renderHall(data, containerId, title = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (title) {
        const titleEl = document.createElement("div");
        titleEl.className = "hall-title";
        titleEl.textContent = title;
        container.appendChild(titleEl);
    }

    data.forEach(rowData => {
        const rowEl = document.createElement("div");
        rowEl.className = "hall-row";

        const rowLabel = document.createElement("span");
        rowLabel.className = "row-label";
        rowLabel.textContent = rowData.row;
        rowEl.appendChild(rowLabel);

        for (let i = 1; i <= rowData.seats; i++) {
            const seat = document.createElement("span");
            seat.className = "seat " + rowData.type;
            seat.textContent = i;
            seat.dataset.row = rowData.row;
            seat.dataset.seat = i;

            if (i === rowData.aisleAfter) {
                seat.classList.add("aisle-before");
            }

            rowEl.appendChild(seat);
        }

        container.appendChild(rowEl);
    });
}


renderHall(hall, "hall");
renderHall(sideCircle, "hall-left",  "Бельэтаж левый");
renderHall(sideCircle, "hall-right", "Бельэтаж правый");
renderHall(balcony, "balcony", "Балкон");

const wrapper = document.querySelector(".hall-wrapper");
if (wrapper) wrapper.scrollLeft = 0;
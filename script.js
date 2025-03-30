document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;
  const searchRooms = document.querySelector(".search-box");
  const searchChats = document.querySelector(".chat-sidebar .search-box");
  const rooms = document.querySelectorAll(".sidebar ul li a");
  const chats = document.querySelectorAll(".chat-sidebar ul li a");

  // Toggle Dark Mode
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  // Search Rooms
  searchRooms.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    rooms.forEach((room) => {
      room.parentElement.style.display = room.textContent
        .toLowerCase()
        .includes(query)
        ? "block"
        : "none";
    });
  });

  // Search Chats
  searchChats.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    chats.forEach((chat) => {
      chat.parentElement.style.display = chat.textContent
        .toLowerCase()
        .includes(query)
        ? "block"
        : "none";
    });
  });
});
darkModeToggle.addEventListener("click", () => {
  console.log("Dark mode toggled"); // Check if this appears in the console
  body.classList.toggle("dark-mode");
});

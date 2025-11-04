window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("musicButton");
    const player = document.getElementById("player");

    // Khi người dùng bấm nút
    button.addEventListener("click", () => {
      player.play().then(() => {
        console.log("✅ Nhạc đang phát");
        button.style.display = "none"; // Ẩn nút sau khi phát nhạc
      }).catch(err => {
        console.log("Không thể phát nhạc:", err);
        alert("Trình duyệt chặn phát nhạc tự động, vui lòng thử lại!");
      });
    });
  });
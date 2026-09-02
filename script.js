const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", (e) => {
  const href = "game/TrashRiot-Windows.zip";
  // Keep the button as a normal download link once the ZIP is added.
  // Until then, prevent a confusing 404 and show a helpful message.
  fetch(href, { method: "HEAD" })
    .then(r => {
      if (r.ok) window.location.href = href;
      else alert("게임 파일이 아직 업로드되지 않았어요. game 폴더에 TrashRiot-Windows.zip을 넣어주세요!");
    })
    .catch(() => alert("게임 파일이 아직 업로드되지 않았어요. game 폴더에 TrashRiot-Windows.zip을 넣어주세요!"));
  e.preventDefault();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => {
    document.querySelector(".menu-btn")?.blur();
  });
});

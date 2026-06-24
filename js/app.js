document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const modelKey = body.dataset.model;

  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  const videoList = document.getElementById("video-list");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(item => item.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      tab.classList.add("active");

      const tabId = tab.dataset.tab;
      const activeContent = document.getElementById(tabId);

      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });

  if (modelKey && videoList) {
    fetch("../data/videos.json")
      .then(response => response.json())
      .then(data => {
        const model = data[modelKey];

        if (!model || !model.videos || model.videos.length === 0) {
          videoList.innerHTML = `
            <div class="empty-message">
              Відеоінструкції для цієї моделі готуються. Якщо вам потрібна допомога з налаштуванням, зверніться до служби підтримки EasyVending.
            </div>
          `;
          return;
        }

        videoList.innerHTML = "";

        model.videos.forEach((video, index) => {
          const link = document.createElement("a");
          link.className = "video-card";
          link.href = video.url;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.innerHTML = `
            <span class="video-number">${index + 1}</span>
            <span>${video.title}</span>
          `;
          videoList.appendChild(link);
        });
      })
      .catch(() => {
        videoList.innerHTML = `
          <div class="empty-message">
            Не вдалося завантажити відеоінструкції. Перевірте файл data/videos.json.
          </div>
        `;
      });
  }
});

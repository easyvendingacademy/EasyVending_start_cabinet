document.addEventListener("DOMContentLoaded", function () {
  const modelKey = document.body.getAttribute("data-model");
  const videoList = document.getElementById("video-list");

  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (item) {
        item.classList.remove("active");
      });

      tabContents.forEach(function (content) {
        content.classList.remove("active");
      });

      tab.classList.add("active");

      const tabId = tab.getAttribute("data-tab");
      const activeContent = document.getElementById(tabId);

      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });

  if (!modelKey || !videoList) {
    return;
  }

  fetch("../data/videos.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Не вдалося завантажити videos.json");
      }
      return response.json();
    })
    .then(function (data) {
      const model = data[modelKey];

      if (!model) {
        videoList.innerHTML = `
          <div class="empty-message">
            Для цієї моделі не знайдено відео. Перевірте назву data-model у HTML та ключ у videos.json.
          </div>
        `;
        return;
      }

      if (!model.videos || model.videos.length === 0) {
        videoList.innerHTML = `
          <div class="empty-message">
            Відеоінструкції для цієї моделі готуються. Якщо вам потрібна допомога з налаштуванням, зверніться до служби підтримки EasyVending.
          </div>
        `;
        return;
      }

      videoList.innerHTML = "";

      model.videos.forEach(function (video, index) {
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
    .catch(function (error) {
      videoList.innerHTML = `
        <div class="empty-message">
          Відео не завантажились. Перевірте, чи файл data/videos.json існує і чи збережений без помилок.
        </div>
      `;
      console.error(error);
    });
});

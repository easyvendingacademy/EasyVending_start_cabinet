const videos = {
  "Jetinno JL22": [
    {
      title: "Як увімкнути кавомашину (підключення до Wi-Fi)",
      url: "https://youtu.be/DM0qSrslXjg"
    },
    {
      title: "Як засипати та відкалібрувати каву",
      url: "https://youtu.be/bnDC_qIlg60"
    },
    {
      title: "Як відкалібрувати інгредієнти",
      url: "https://youtu.be/a2n9EPTNIOg"
    }
  ],

  "Jetinno JL31A": [
    {
      title: "Налаштування подачі води",
      url: "https://youtu.be/6NMu-H71efk"
    },
    {
      title: "Налаштування Wi-Fi",
      url: "https://youtu.be/vMuZWfjbAHo"
    }
  ],

  "Jetinno JL300": [
    {
      title: "Перший запуск, комплектація та огляд",
      url: "https://youtu.be/ggVc5k6EepA"
    },
    {
      title: "Встановлення Wi-Fi антени",
      url: "https://youtu.be/i3Ice2InLic"
    }
  ]
};

const cards = document.querySelectorAll(".model-card");

cards.forEach(card => {

  card.addEventListener("click", () => {

    const modelName =
      card.querySelector("h3").innerText;

    openCabinet(modelName);

  });

});

function openCabinet(modelName) {

  const cabinet =
    document.getElementById("cabinet");

  const title =
    document.getElementById("cabinetTitle");

  const videoList =
    document.getElementById("videoList");

  title.innerText = modelName;

  videoList.innerHTML = "";

  if(videos[modelName]) {

    videos[modelName].forEach(video => {

      videoList.innerHTML += `
        <div class="model-card">
          <h3>${video.title}</h3>

          <a href="${video.url}"
             target="_blank">
             Відкрити відео
          </a>
        </div>
      `;

    });

  } else {

    videoList.innerHTML = `
      <p>
      Для цієї моделі відео ще додаються.
      </p>
    `;

  }

  cabinet.classList.remove("hidden");

  cabinet.scrollIntoView({
      behavior: "smooth"
  });

}

function closeCabinet() {

  document
    .getElementById("cabinet")
    .classList
    .add("hidden");

}

const manuals = {
  "Jetinno JL18": "assets/manuals/jl18-manual.pdf",
  "Jetinno JL22": "assets/manuals/jl22-manual.pdf",
  "Jetinno JL28": "assets/manuals/jl28-manual.pdf"
};

const videos = {
  "Jetinno JL22": [
    { title: "Як увімкнути кавомашину (підключення до Wi-Fi)", url: "https://youtu.be/DM0qSrslXjg" },
    { title: "Як засипати та відкалібрувати каву", url: "https://youtu.be/bnDC_qIlg60" },
    { title: "Як відкалібрувати інгредієнти", url: "https://youtu.be/a2n9EPTNIOg" },
    { title: "Як налаштувати формати сплати", url: "https://youtu.be/hvCijY-R9b4" },
    { title: "Як скинути помилки", url: "https://youtu.be/3Gub94vtoE0" },
    { title: "Як працювати з режимом баристи", url: "https://youtu.be/FVUTQGdHI5s" },
    { title: "Як прочистити та промити робочі вузли", url: "https://youtu.be/a4Rr3FnLh_Q" },
    { title: "Налаштування промивки кавомашини", url: "https://youtu.be/28UzDFKixuY" },
    { title: "Злив води з резервуару", url: "https://youtu.be/HyUFQo6D1CM" },
    { title: "Злив води з бойлера", url: "https://youtu.be/X8KewyAPV7o" },
    { title: "Налаштування температури в бойлері та зміна пароля", url: "https://youtu.be/CP2bYMRQxOc" },
    { title: "Зняття на техобслуговування й підключення заварювального блоку", url: "https://youtu.be/JREI4Hd_854" },
    { title: "Налаштування рецептури напоїв", url: "https://youtu.be/dE4c57K1kck" },
    { title: "Як додати напій, зображення та налаштувати ціну", url: "https://youtu.be/rXpA7FHoWPw" },
    { title: "Зміна статусу напою", url: "https://youtu.be/FOSgHdFLo1U" },
    { title: "Як створити напій", url: "https://youtu.be/OBlCdHx9TEE" },
    { title: "Налаштування рекламного відео під час простою апарата", url: "https://youtu.be/kDNHQ990Yd8" }
  ],

  "Jetinno JL31A": [
    { title: "Налаштування подачі води в кавомашину", url: "https://youtu.be/6NMu-H71efk" },
    { title: "Налаштування Wi-Fi та підключення до особистого кабінету", url: "https://youtu.be/vMuZWfjbAHo" },
    { title: "Налаштування напоїв, цін та зображень", url: "https://youtu.be/oOOO6wuK2wg" },
    { title: "Налаштування та калібрування кави", url: "https://youtu.be/MJ5IYdvPpz4" },
    { title: "Калібрування подачі молока / молочної піни", url: "https://youtu.be/9W-3BYU2zaM" },
    { title: "Калібрування гарячого молока", url: "https://youtu.be/VGfMpGTtu68" },
    { title: "Очищення капучинатора: фізичне та хімічне", url: "https://youtu.be/lWDUx8T8Yk0" },
    { title: "Хімічне очищення заварювального вузла", url: "https://youtu.be/W21169Owsi0" },
    { title: "Як знімається та ставиться на місце заварювальний блок", url: "https://youtu.be/_BTgbuQ_UDQ" },
    { title: "Злив води з бойлера", url: "https://youtu.be/9sBkWohXG3I" }
  ],

  "Jetinno JL300": [
    { title: "Перший запуск, комплектація та огляд JL300", url: "https://youtu.be/ggVc5k6EepA" },
    { title: "Як встановити Wi-Fi антену, зафіксувати автомат та встановити відро для монетника", url: "https://youtu.be/i3Ice2InLic" },
    { title: "Встановлення бутлів з водою в кавомат", url: "https://youtu.be/I5NdBczlx0A" },
    { title: "Під'єднання JL300 до мережі Wi-Fi та наповнення апарата стаканчиками", url: "https://youtu.be/_aTaPpHPY6E" },
    { title: "Встановлення сиропів в автомат", url: "https://youtu.be/jTx9E3jCEzQ" },
    { title: "Наповнення та встановлення кавового бункера", url: "https://youtu.be/6QY5QVZf5l4" },
    { title: "Промивання кавомата, зняття та встановлення заварювального вузла", url: "https://youtu.be/nAjgtU7E8IM" }
  ]
};

document.querySelectorAll(".model-card").forEach(card => {
  card.addEventListener("click", () => {
    const modelName = card.querySelector("h3").innerText;
    openCabinet(modelName);
  });
});

function openCabinet(modelName) {
  const cabinet = document.getElementById("cabinet");
  const title = document.getElementById("cabinetTitle");
  const videoList = document.getElementById("videoList");

  title.innerText = modelName;

  let content = "";

  if (manuals[modelName]) {
    content += `
      <div class="manual-box">
        <h3>📖 Інструкція</h3>
        <a href="${manuals[modelName]}" target="_blank">Відкрити PDF-інструкцію</a>
      </div>
    `;
  } else {
    content += `
      <div class="manual-box">
        <h3>📖 Інструкція</h3>
        <p>Інструкція для цієї моделі поки готується.</p>
      </div>
    `;
  }

  content += `<h3>🎥 Відеоінструкції</h3>`;

  if (videos[modelName]) {
    videos[modelName].forEach(video => {
      content += `
        <div class="video-card">
          <h4>${video.title}</h4>
          <a href="${video.url}" target="_blank">Відкрити відео</a>
        </div>
      `;
    });
  } else {
    content += `<p>Відео для цієї моделі поки додаються.</p>`;
  }

  videoList.innerHTML = content;

  cabinet.classList.remove("hidden");
  cabinet.scrollIntoView({ behavior: "smooth" });
}

function closeCabinet() {
  document.getElementById("cabinet").classList.add("hidden");
}

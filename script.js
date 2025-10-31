let fortunes = JSON.parse(localStorage.getItem("fortunes")) || [
  "오늘은 행운의 날이에요! 🌟",
  "작은 친절이 큰 기쁨으로 돌아올 거예요 😊",
  "도전하는 하루가 당신을 성장시킬 거예요 💪",
  "조용히 자신을 돌보면 좋은 일이 생길 거예요 🌿"
];

const fortuneBtn = document.getElementById("fortune-btn");
const fortuneResult = document.getElementById("fortune-result");
const adminBtn = document.getElementById("admin-btn");
const adminPanel = document.getElementById("admin-panel");
const fortuneList = document.getElementById("fortune-list");
const addBtn = document.getElementById("add-fortune");
const clearBtn = document.getElementById("clear-all");
const newFortuneInput = document.getElementById("new-fortune");

function showFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneResult.textContent = fortunes[randomIndex];
}

function updateFortuneList() {
  fortuneList.innerHTML = "";
  fortunes.forEach((f, i) => {
    const li = document.createElement("li");
    li.textContent = f;

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => {
      fortunes.splice(i, 1);
      saveFortunes();
      updateFortuneList();
    };

    li.appendChild(delBtn);
    fortuneList.appendChild(li);
  });
}

function saveFortunes() {
  localStorage.setItem("fortunes", JSON.stringify(fortunes));
}

fortuneBtn.addEventListener("click", showFortune);

adminBtn.addEventListener("click", () => {
  const pass = prompt("관리자 비밀번호를 입력하세요:");
  if (pass === "admin1234") {
    adminPanel.classList.toggle("hidden");
    updateFortuneList();
  } else {
    alert("비밀번호가 틀렸습니다!");
  }
});

addBtn.addEventListener("click", () => {
  const text = newFortuneInput.value.trim();
  if (text) {
    fortunes.push(text);
    saveFortunes();
    newFortuneInput.value = "";
    updateFortuneList();
  }
});

clearBtn.addEventListener("click", () => {
  if (confirm("정말 모든 운세를 삭제하시겠습니까?")) {
    fortunes = [];
    saveFortunes();
    updateFortuneList();
  }
});
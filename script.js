let fortunes = JSON.parse(localStorage.getItem("fortunes")) || [
  "쏟아지는 행운 속에서 살아가기를 바라요 🍀",
  "작은 친절이 큰 기쁨으로 돌아올 거예요 😊",
  "도전하는 하루가 당신을 성장시킬 거예요 💪",
  "조용히 자신을 돌보면 좋은 일이 생길 거예요 🌿"
  "모든 근심 걱정이여 사라져랏!! 😋"
  "당신은 이 세상에서 가장 사랑받아 마땅한 존재 🫶"
  "스스로를 소중하게 여겨주세요 ☺️ 당신의 인생의 주인공은 오직 자기자신일뿐이랍니다!"
  "

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
  if (pass === "ys0321**") {
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

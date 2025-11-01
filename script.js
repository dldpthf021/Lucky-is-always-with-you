// 운세 배열
let fortunes = [
  "쏟아지는 행운 속에서 살아가기를 바라요 🍀",
  "작은 친절이 큰 기쁨으로 돌아올 거예요 😊",
  "도전하는 하루가 당신을 성장시킬 거예요 💪",
  "조용히 자신을 돌보면 좋은 일이 생길 거예요 🌿",
  "모든 근심 걱정이여 사라져랏!! 😋",
  "당신은 이 세상에서 가장 사랑받아 마땅한 존재 🫶",
  "스스로를 소중하게 여겨주세요 ☺️ 당신의 인생의 주인공은 오직 자기자신일뿐이랍니다!"
];

const fortuneBtn = document.getElementById("fortune-btn");
const recommendationBtn = document.getElementById("recommendation-btn");
const fortuneResult = document.getElementById("fortune-result");

const adminBtn = document.getElementById("admin-btn");
const adminPanel = document.getElementById("admin-panel");
const newFortuneInput = document.getElementById("new-fortune");
const addBtn = document.getElementById("add-fortune");
const fortuneList = document.getElementById("fortune-list");
const clearBtn = document.getElementById("clear-all");

// 추천 문구 배열
const recommendations = [
  "오늘은 운동을 조금 해보는 걸 추천해요! 🏃‍♂️",
  "맛있는 차 한잔으로 여유를 가져보세요 ☕",
  "작은 선행을 해보면 기분이 좋아질 거예요 😊",
  "좋은 책을 읽으며 마음을 채워보세요 📚",
  "길가의 화단에 어떤 꽃이 심어져 있는지 살펴보는 것도 좋아요! 어쩌면 행운을 발견할지도? 🍀",
  "오랜만에 가족이랑 시간을 보내보면 어떨까요?",
  "좋아하는 노래를 들으며 마음을 편안하게 하는 건 어떨까요?",
  "좋아하는 카페에서 여유로운 커피 한 잔 ☕️",
  "맛있는 음식으로 행복을 올려보는 건 어떨까요?"
];

// 운세 버튼 클릭
fortuneBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneResult.textContent = fortunes[randomIndex];
  recommendationBtn.style.display = "inline-block";
});

// 추천 버튼 클릭
recommendationBtn.addEventListener("click", () => {
  const randomRec = Math.floor(Math.random() * recommendations.length);
  fortuneResult.textContent += "\n\n추천: " + recommendations[randomRec];
});

// 관리자 버튼
adminBtn.addEventListener("click", () => {
  const pass = prompt("관리자 비밀번호를 입력하세요:");
  if(pass === "admin1234") {
    adminPanel.classList.toggle("hidden");
    updateFortuneList();
  } else {
    alert("비밀번호가 틀렸습니다!");
  }
});

// 관리자 패널 리스트 업데이트
function updateFortuneList() {
  fortuneList.innerHTML = "";
  fortunes.forEach((f,i) => {
    const li = document.createElement("li");
    li.textContent = f;

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => {
      fortunes.splice(i,1);
      updateFortuneList();
    };

    li.appendChild(delBtn);
    fortuneList.appendChild(li);
  });
}

// 운세 추가
addBtn.addEventListener("click", () => {
  const text = newFortuneInput.value.trim();
  if(text) {
    fortunes.push(text);
    newFortuneInput.value = "";
    updateFortuneList();
  }
});

// 모든 운세 삭제
clearBtn.addEventListener("click", () => {
  if(confirm("정말 모든 운세를 삭제하시겠습니까?")) {
    fortunes = [];
    updateFortuneList();
  }
});


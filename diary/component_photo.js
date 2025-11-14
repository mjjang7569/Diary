let 로딩중 = false;
let 무한스크롤리스너 = null;

const 사진보관함렌더링 = () => {
  document.getElementById("필터검색일기쓰기버튼").innerHTML = `
    <div class="필터검색기능">
      <div class="필터전체">
        <input type="checkbox" class="필터제목" id="사진필터제목ID">
        <ul class="필터목록" id="사진필터목록ID">
          <li>
            <input id="기본형" type="radio" name="사진필터" value="기본형" onclick="사진필터선택기능(event);강아지사진형태생성(event)" checked>
            <label for="기본형">기본형</label>
          </li>
          <li>
            <input id="가로형" type="radio" name="사진필터" value="가로형" onclick="사진필터선택기능(event);강아지사진형태생성(event)">
            <label for="가로형">가로형</label>
          </li>
          <li>
            <input id="세로형" type="radio" name="사진필터" value="세로형" onclick="사진필터선택기능(event);강아지사진형태생성(event)">
            <label for="세로형">세로형</label>
          </li>
        </ul>
      </div>
    </div>
    `;
  // 필터 제목 초기값 설정
  setTimeout(() => {
    const 필터제목 = document.getElementById("사진필터제목ID");
    if (필터제목) {
      필터제목.style = `--필터제목 : "기본형" `;
    }
  }, 0);

  // 카드영역 초기화 및 스켈레톤 로딩 표시
  document.getElementById("카드영역").innerHTML =
    '<div class="강아지사진스켈레톤"></div>';

  // 카드영역 중앙 정렬 (cssText로 강제 적용)
  const 카드영역 = document.getElementById("카드영역");
  카드영역.style.cssText =
    "justify-content: center !important; width: 1168px; display: flex; flex-direction: row; align-content: flex-start; gap: 24px; flex-wrap: wrap; min-height: 936px;";

  // 페이지네이션 완전히 숨기기
  const 페이지네이션영역 = document.querySelector(".페이지네이션영역");
  if (페이지네이션영역) {
    페이지네이션영역.style.display = "none";
    // 페이지 버튼들도 제거
    document.getElementById("페이지영역").innerHTML = "";
  }

  // 기존 스크롤 리스너 제거
  if (무한스크롤리스너) {
    window.removeEventListener("scroll", 무한스크롤리스너);
  }

  // 첫 사진 로딩
  사진불러오는기능(true);

  // 무한스크롤 이벤트 리스너 등록
  무한스크롤리스너 = () => {
    const 스크롤높이 = window.scrollY;
    const 윈도우높이 = window.innerHeight;
    const 문서높이 = document.documentElement.scrollHeight;

    // 페이지 하단에서 200px 전에 도달하면 추가 로딩
    if (스크롤높이 + 윈도우높이 >= 문서높이 - 200) {
      if (!로딩중) {
        사진불러오는기능(false);
      }
    }
  };

  window.addEventListener("scroll", 무한스크롤리스너);
};

// 무한스크롤 리스너 제거 함수
const 무한스크롤제거 = () => {
  if (무한스크롤리스너) {
    window.removeEventListener("scroll", 무한스크롤리스너);
    무한스크롤리스너 = null;
  }
};

const 사진필터선택기능 = (event) => {
  document.getElementById(
    "사진필터제목ID"
  ).style = `--필터제목 : "${event.target.id}" `;
  document.getElementById("사진필터제목ID").click();
};

window.사진보관함렌더링 = 사진보관함렌더링;
window.무한스크롤제거 = 무한스크롤제거;
window.사진필터선택기능 = 사진필터선택기능;

const 사진불러오는기능 = (첫로딩 = false) => {
  로딩중 = true;

  fetch("https://dog.ceo/api/breeds/image/random/10")
    .then((받아온결과) => {
      return 받아온결과.json();
    })
    .then((객체만뽑힌결과) => {
      const 이미지다운로드주소들 = 객체만뽑힌결과.message;
      const 상태 = 객체만뽑힌결과.status;

      const 새사진HTML = 이미지다운로드주소들
        .map((ele) => `<img class="강아지사진" src="${ele}">`)
        .join("");

      if (첫로딩) {
        // 첫 로딩: 기존 내용(스켈레톤) 교체
        document.getElementById("카드영역").innerHTML = 새사진HTML;
      } else {
        // 추가 로딩: 기존 사진에 추가
        document.getElementById("카드영역").innerHTML += 새사진HTML;
      }

      로딩중 = false;
    })
    .catch((error) => {
      console.error("사진 로딩 실패:", error);
      로딩중 = false;
    });
};

const 강아지사진형태생성 = (event) => {
  const 값 = event.target.value;
  console.log(값);
  const 강아지사진들 = document.querySelectorAll(".강아지사진");
  console.log(강아지사진들);
  강아지사진들.forEach((ele) => {
    switch (값) {
      case "기본형": {
        ele.style.cssText = " aspect-ratio : 1/1; object-fit: cover;";
        break;
      }
      case "가로형": {
        ele.style.cssText = "aspect-ratio : 4/3; object-fit: cover;";

        break;
      }
      case "세로형": {
        ele.style.cssText = "aspect-ratio : 3/4; object-fit: cover; ";

        break;
      }
    }
  });
};

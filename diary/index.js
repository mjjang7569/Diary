window.addEventListener("DOMContentLoaded", () => {
    // 처음 들어왔을 때 "일기" 화면을 기본으로
    일기보관함렌더링();
  
    // 버튼 이벤트
    document.getElementById("일기").addEventListener("click", 일기보관함렌더링);
    document.getElementById("사진").addEventListener("click", 사진보관함렌더링);
    document.getElementById("카드영역").style = "flex-direction : row; : flex-wrap: wrap; gap:24px"


  });
  
document.getElementById("사진").addEventListener("click", ()=>{
  document.getElementById("일기").style = "border-bottom: none; color: #ABABAB"
  document.getElementById("사진").style = "border-bottom: solid; color: black"
  document.getElementById("카드영역").style = "flex-direction : column; justify-content: center ;align-items: center; gap:40px"
  document.getElementById("카드").style = " display: none"  
  document.getElementsByClassName("강아지사진스켈레톤").style = "display : block"
})

  document.getElementById("일기").addEventListener("click", ()=>{
    document.getElementById("사진").style = "border-bottom: none; color: #ABABAB"
      document.getElementById("일기").style = "border-bottom: solid; color: black"
      document.getElementById("카드영역").style = "flex-direction : row; : flex-wrap: wrap; gap:24px"
      document.getElementById("카드").style = " display: flex"  
      document.getElementsByClassName("강아지사진스켈레톤").style = "display : none"

    })
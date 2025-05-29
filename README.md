# EXP-MISSION-Netflix

### 구현 기능
- 상세정보 모달 구현
- 검색 기능 구현
- API를 활용한 콘텐츠 데이터 가져오기
- 메인 페이지 카페고리별 구현
- 반응형 구현

### 메인 페이지
![스크린샷 2025-05-29 오후 6 42 42](https://github.com/user-attachments/assets/a5a8d129-9a7b-4ee7-8fc3-6cee3e3dd32b)

### 반응형
![스크린샷 2025-05-29 오후 6 43 05](https://github.com/user-attachments/assets/13f02364-3269-4afa-9ee0-cf1029ddcbb8)

### 모달
![스크린샷 2025-05-29 오후 6 43 22](https://github.com/user-attachments/assets/e5ca608c-a5ce-42ef-880c-4df11745d278)

### 검색
![스크린샷 2025-05-29 오후 6 43 55](https://github.com/user-attachments/assets/ecac7f6f-4d43-4e41-b066-a29be58ef351)

## 파일구조
- api : axios 관련 함수 생성
  - axios : axios 생성 함수
  - requests : 공통된 url
- components : 기본 생성 컴포넌트
  - Banner : 메인 페이지 메인 영상
  - Footer : 하단 기본 정보
  - Nav : 상단 해더
  - Row : fetch 해온 영화 데이터를 한줄의 가로형태로 만듬
- pages : components 에서 생성한 컴포넌트들을 페이지별로 만듬
  - DetailPage : 눌렀을 시 나오는 디테일 화면
  - MainPage : 메인 페이지
  - SearchPage : 검색 시 보이는 화면

# EXP-MISSION-Netflix


## 구현 기능
- 반응형 웹 적용
- 상세정보 모달 구현
- 검색 기능 구현
- API를 활용한 콘텐츠 데이터 가져오기
- 메인 페이지 카테고리별 구현
- HTML 구조 및 기본 UI 구현

---

## 결과물 화면

### 메인
![image](https://github.com/user-attachments/assets/768f3002-96df-426f-ac77-d6a36d60b1c3)

### 마우스 hover시 : 포스터 크기, 툴팁
![image](https://github.com/user-attachments/assets/da6fef93-776e-4f0f-80d7-3b82609b71fd)

### 상세정보 모달
![image](https://github.com/user-attachments/assets/3e939b7d-5357-4b29-99ee-547360f01ba0)

### 검색
![image](https://github.com/user-attachments/assets/daf64c1f-0eb9-4225-aa2a-2152b5543645)


---

## 디렉토리 설명
- `src/App.js`: 루트 컴포넌트, 페이지 라우팅 및 전역 구조 설정  
- `src/index.js`: ReactDOM 렌더링 진입점  
- `src/index.css`: 전체 앱에 적용되는 기본 스타일  
- `src/App.css`: 전역 범위 스타일 정의  

- `src/api/`: TMDB API 관련 설정 및 엔드포인트  
  - `axios.js`: Axios 인스턴스 및 공통 설정  
  - `requests.js`: API 엔드포인트 정리  

- `src/components/`: 재사용 가능한 UI 컴포넌트  
  - `Banner.js`: 상단 영화 배너 (랜덤 영화 표시)  
  - `Banner.css`: 배너 스타일  
  - `Nav.js`: 상단 네비게이션 바 (검색창 포함)  
  - `Nav.css`: 네비게이션 스타일  
  - `Row.js`: 영화 리스트 슬라이더 (Swiper 사용)  
  - `Row.css`: Row 스타일 정의  
  - `Footer.js`: 푸터 컴포넌트 (사용 여부 확인 필요)  
  - `MovieModal/`: 모달 컴포넌트  
    - `index.js`: 영화 상세 모달  
    - `MovieModal.css`: 모달 스타일  

- `src/hooks/`: 커스텀 React 훅  
  - `useDebounce.js`: 검색 입력 지연 처리용 디바운스 훅  
  - `useOnClickOutside.js`: 모달 외부 클릭 감지 훅  

- `src/pages/`: 화면 단위 페이지 컴포넌트  
  - `MainPage/`: 홈(추천) 페이지  
    - `index.js`: 메인 페이지 구성  
  - `SearchPage/`: 영화 검색 결과 페이지  
    - `index.js`: 검색 페이지  
    - `SearchPage.css`: 검색 페이지 스타일  
  - `DetailPage/`: 영화 상세 페이지
    - `index.js`: 상세 페이지 컴포넌트  

- `reportWebVitals.js`: 웹 성능 측정 함수
- `setupTests.js`: 테스트 초기 설정 파일

const requests = {
  // 배너용 (현재 상영 중인 영화)
  fetchNowPlaying: "/movie/now_playing",

  // 넷플릭스 오리지널 (TV 시리즈 중 network가 213인 것)
  fetchNetflixOriginals: "/discover/tv?with_networks=213",

  // 전체 트렌딩 (영화 + 시리즈, 주간 기준)
  fetchTrending: "/trending/all/week",

  // 평점 높은 영화
  fetchTopRated: "/movie/top_rated",

  // 액션 영화
  fetchActionMovies: "/discover/movie?with_genres=28",

  // 코미디 영화
  fetchComedyMovies: "/discover/movie?with_genres=35",

  // 호러 영화
  fetchHorrorMovies: "/discover/movie?with_genres=27",

  // 로맨스 영화
  fetchRomanceMovies: "/discover/movie?with_genres=10749",

  // 다큐멘터리 (영화 기반)
  fetchDocumentMovies: "/discover/movie?with_genres=99",

  // 다큐멘터리 (TV 기반)
  fetchDocumentaries: "/discover/tv?with_genres=99",

  // 애니메이션 (TV 기반)
  fetchAnimationTV: "/discover/tv?with_genres=16",

  // 미국 드라마 (TV + 국가 = US)
  fetchAmericanTV:
    "/discover/tv?with_original_language=en&with_origin_country=US",

  // 한국 TOP 10 영화 (트렌딩 영화 중 국가 필터)
  fetchKoreanTopMovies: "/trending/movie/week", // 추가 필터 필요시 백엔드에서 처리

  // 한국 TOP 10 시리즈 (트렌딩 TV 중 국가 필터)
  fetchKoreanTopTV: "/trending/tv/week", // 추가 필터 필요시 백엔드에서 처리

  // 넷플릭스에서만 볼 수 있는 인기 영화 (넷플릭스 + 높은 평점 조합)
  fetchNetflixTopRatedMovies:
    "/discover/movie?with_watch_providers=8&watch_region=KR&sort_by=vote_average.desc",

  // 몰아보기 추천 (평점 높은 TV 시리즈)
  fetchRecommendedBingeTV:
    "/discover/tv?sort_by=vote_average.desc&vote_count.gte=100",
};

export default requests;

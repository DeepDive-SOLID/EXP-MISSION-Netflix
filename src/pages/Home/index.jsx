import Banner from "../../components/Banner/Banner.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import requests from "../../api/requests.jsx";
import Row from "../../components/Row/Row.jsx";

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />

      <Row
        title="꼭 챙겨보세요! 회원님을 위한 콘텐츠"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row
        title="오늘 대한민국의 TOP 10 시리즈"
        id="TOP_TV_KR"
        fetchUrl={requests.fetchKoreanTopTV}
        isLargeRow
      />

      <Row
        title="오직 넷플릭스에서"
        id="ONLY_NETFLIX"
        fetchUrl={requests.fetchNetflixTopRatedMovies}
      />

      <Row
        title="오늘 대한민국의 TOP 10 영화"
        id="TOP_MOVIE_KR"
        fetchUrl={requests.fetchKoreanTopMovies}
        isLargeRow
      />

      <Row
        title="몰아보기 추천 해외 시리즈"
        id="BINGE_TV"
        fetchUrl={requests.fetchRecommendedBingeTV}
      />

      <Row
        title="넷플릭스에 새로 올라온 콘텐츠"
        id="NOW_PLAYING"
        fetchUrl={requests.fetchNowPlaying}
      />

      <Row
        title="미국 드라마"
        id="AMERICAN_TV"
        fetchUrl={requests.fetchAmericanTV}
      />

      <Row
        title="애니메이션"
        id="ANIMATION_TV"
        fetchUrl={requests.fetchAnimationTV}
      />

      <Row
        title="호러 영화"
        id="HORROR_MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
      />
    </div>
  );
}

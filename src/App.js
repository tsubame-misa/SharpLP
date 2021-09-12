// import ogpImg from "./images/OGP.png";
import logo from "./images/logo2.png";
import inputImage from "./images/input.png";
import searchImage from "./images/search.png";
import browseImage from "./images/browse.png";
import birthdayImage from "./images/birthday.png";
import "./style.css";

function Header() {
  return (
    <div className="title-block">
      <img src={logo} className="title-image"></img>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="about">
          <p>
            その人と前に何を話したか、覚えていますか？
            <br />
            出身は？趣味は？好きな食べ物は？
            <br />
            <br />
            同じこと聞いてたらどうしよう
            <br />
            この人といつもなんの話してたっけ
            <br />
            <br />
            コミュニケーション、もっと簡単にとれるんじゃない？
          </p>
        </div>
        <div className="product-link">
          <a
            href="https://sharp-profile.netlify.app/home"
            class="btn btn-border"
          >
            今すぐ始める
          </a>
        </div>
        <div className="introduce">
          <div className="intro-group">
            <img src={inputImage} className="intro-image" />
            <div className="intro-about">
              <h2>#入力</h2>
              <p>人と会話して情報を増やす</p>
            </div>
          </div>
          <div className="intro-group">
            <div className="intro-about">
              <h2>#検索</h2>
              <p>人を簡単に見つける</p>
            </div>
            <img src={searchImage} className="intro-image" />
          </div>

          <div className="intro-group">
            <img src={browseImage} className="intro-image" />
            <div className="intro-about">
              <h2>#閲覧</h2>
              <p>話したことを思い出す</p>
            </div>
          </div>

          <div className="intro-group intro-last">
            <div className="intro-about">
              <h2>#誕生日</h2>
              <p>誕生日が近い人が分かる</p>
            </div>
            <img src={birthdayImage} className="intro-image" />
          </div>
        </div>
        <div className="links">
          <a
            href="https://github.com/tsubame-misa/Sharp"
            class="btn btn-border link-btn"
          >
            github
          </a>
          <a
            href="https://docs.google.com/presentation/d/1HqgpSp_UdSFQbwAbKUHqp1XuG3-jfngD/edit?usp=sharing&ouid=114173514687445978777&rtpof=true&sd=true"
            class="btn btn-border link-btn"
          >
            企画発表会スライド
          </a>
          <a href="" class="btn btn-border link-btn">
            成果発表会スライド
          </a>
        </div>
      </main>
      <footer className="footer" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="content" style={{ textAlign: "right" }}>
          <p className="footer-pala">チーム&ensp;べべベランド</p>
          <p className="footer-pala">
            渡邉みさと&emsp; 沼部恵&emsp;阿部沙亜弥&emsp;中島綾乃
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

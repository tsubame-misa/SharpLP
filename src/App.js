// import ogpImg from "./images/OGP.png";
import logo from "./images/logo.png";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <img src={logo}></img>;
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
      </main>
      <footer className="footer py-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="content" style={{ textAlign: "right" }}>
          <p>チーム&ensp;べべベランド</p>
          <p>
            {/*<a
              href="https://twitter.com/Tsubame_misa"
              style={{ color: "#FE931D" }}
            >*/}
            渡邉みさと&emsp;
            {/*</a>*/}
            沼部恵&emsp;阿部沙亜弥&emsp;中島綾乃
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

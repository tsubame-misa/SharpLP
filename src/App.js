import ogpImg from "./images/OGP.png";
import QRImg from "./images/Donuts.png";
import "./style.css";

function Header() {
  return (
    <header className="hero has-background-white is-bold is-small">
      <div className="hero-body">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            className="title is-2 is-size-3-mobile"
            style={{ color: "#FE931D", margin: "0px" }}
          >
            Donuts
          </h1>
          <div className="QRcode">
            <p className="is-5 is-size-7-mobile"> 使ってみる</p>

            <img src={QRImg} className="QRImg" />
          </div>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <div>
            <div className="DonutsWarp">
              <div
                style={{
                  backgroundColor: "#FE931D",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={ogpImg} className="DonutsImg" alt="イメージ画像" />
              </div>
            </div>
            <div
              className="section py-5"
              style={{ backgroundColor: "#FFB547" }}
            >
              <div className="container">
                <div className="has-text-centered">
                  <div className="subtitle is-2 is-size-4-mobile has-text-white">
                    充実したオタ活のための
                    <br />
                    DVDラベル管理アプリ
                  </div>
                  <div
                    className="has-text-left"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ul style={{ listStyle: "initial" }}>
                      <li>ダビングした番組のリスト作成 </li>
                      <li>QRコード作成</li>
                      <li>検索、スマホでの読み取り</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="columns has-text-centered">
                <div className="column  p-5">
                  <a href="https://drive.google.com/file/d/1gg6wFxnbR9hMoFFK5MFQwC944o6xMZ09/view?usp=sharing">
                    <button
                      className="button is-danger is-large has-text-white"
                      style={{ backgroundColor: "#FFB547" }}
                    >
                      企画書
                    </button>
                  </a>
                  <p className="pt-3">
                    アプリ作成に関する企画書です。作成前の事前調査や目的等が書かれています。
                  </p>
                </div>
                <div className="column  p-5">
                  <a href="https://github.com/tsubame-misa/labelMaker">
                    <button
                      className="button is-danger is-large has-text-white"
                      style={{ backgroundColor: "#FE931D" }}
                    >
                      Github
                    </button>
                  </a>
                  <p className="pt-3">本アプリのプログラムです。</p>
                </div>
                <div className="column  p-5">
                  <a href="https://drive.google.com/file/d/1ye9MJJX_1_rvjLpSZPmDmmOtXZRM_lFq/view?usp=sharing">
                    <button
                      className="button is-danger is-large has-text-white"
                      style={{ backgroundColor: "#FFB547" }}
                    >
                      ポスター
                    </button>
                  </a>
                  <p className="pt-3">授業内の発表会で用いたポスターです。</p>
                </div>
                <div className="column p-5">
                  <a href="">
                    <button
                      className="button is-danger is-large has-text-white"
                      style={{ backgroundColor: "#FE931D" }}
                    >
                      使い方
                    </button>
                  </a>
                  <p className="pt-3">
                    アプリの使用方法です。操作方法がわからない際にご覧ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer" style={{ backgroundColor: "#fef4e6" }}>
        <div className="content has-text-centered">
          <p>チーム&ensp;ｺﾜｸﾅｲﾖｰ</p>
          <p>
            {/*<a
              href="https://twitter.com/Tsubame_misa"
              style={{ color: "#FE931D" }}
            >*/}
            渡邉みさと
            {/*</a>*/}
            沼部恵 阿部沙亜弥 中島綾乃
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

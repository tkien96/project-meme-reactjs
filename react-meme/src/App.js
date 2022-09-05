import Header from "./components/Header"

function App() {
  return (
    <>
    {/* HEADER */}
    <Header />
    {/* MAIN */}
    <main>
      <div className="container">
        {/*sections*/}
        <div className="row">
          <div className="col-lg-8">
            <div className="ass1-section__list">
              <div className="ass1-section__item">
                <div className="ass1-section">
                  <div className="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" className="ass1-section__avatar ass1-avatar"><img src="./assets/images/avatar-02.png" alt="" /></a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" className="ass1-section__name">Thanos</a>
                      <span className="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div className="ass1-section__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!</p>
                    <div className="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html"><img src="./assets/images/microphone-1209816_1920.jpg" alt="" /></a>
                    </div>
                  </div>
                  <div className="ass1-section__footer">
                    <a href="#" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                  </div>
                </div>
              </div>
              <div className="ass1-section__item">
                <div className="ass1-section">
                  <div className="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" className="ass1-section__avatar ass1-avatar"><img src="./assets/images/avatar-02.png" alt="" /></a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" className="ass1-section__name">Thanos</a>
                      <span className="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div className="ass1-section__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!</p>
                    <div className="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html"><img src="./assets/images/blog-rating.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="ass1-section__footer">
                    <a href="#" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                  </div>
                </div>
              </div>
              <div className="ass1-section__item">
                <div className="ass1-section">
                  <div className="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" className="ass1-section__avatar ass1-avatar"><img src="./assets/images/avatar-02.png" alt="" /></a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" className="ass1-section__name">Thanos</a>
                      <span className="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div className="ass1-section__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!</p>
                    <div className="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html"><img src="./assets/images/dress_owesom.jpg" alt="" /></a>
                    </div>
                  </div>
                  <div className="ass1-section__footer">
                    <a href="#" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                  </div>
                </div>
              </div>
              <div className="ass1-section__item">
                <div className="ass1-section">
                  <div className="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" className="ass1-section__avatar ass1-avatar"><img src="./assets/images/avatar-02.png" alt="" /></a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" className="ass1-section__name">Thanos</a>
                      <span className="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div className="ass1-section__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!</p>
                    <div className="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html"><img src="./assets/images/frog-1530803_960_720.jpg" alt="" /></a>
                    </div>
                  </div>
                  <div className="ass1-section__footer">
                    <a href="#" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
                  </div>
                </div>
              </div>
              <button className="load-more ass1-btn"><span>Xem thêm</span></button>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="ass1-aside">
              <div className="ass1-content-head__t">
                <div>Bài viết gần đây của bạn.</div>
              </div>
              <div>Vui lòng đăng nhập để xem nội dung này
                <a href="#">Đăng nhập</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  </>
  );
}

export default App;

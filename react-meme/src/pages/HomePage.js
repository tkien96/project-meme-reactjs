import Post from "../components/Post";

export default function HomePage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <Post />
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
    )
}
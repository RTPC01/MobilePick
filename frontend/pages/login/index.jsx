export default function Login() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">로그인</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        이메일 주소
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="이메일을 입력하세요"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        비밀번호
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="비밀번호를 입력하세요"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    로그인
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
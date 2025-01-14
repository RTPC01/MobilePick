export default function PriceComparison() {
    return (
        <>
            {/* 핸드폰 선택 */}
            <div className="container d-flex flex-column gap-4">
                <h1 className="text-center">핸드폰 가격비교</h1>
                <div className="d-flex flex-row justify-content-evenly align-items-center">
                    <button type="button" className="btn btn-outline-dark row shadow">
                        <img src="/assets/logos/apple.svg" alt="apple_logos" width="80" height="80" className="me-2"/>
                        아이폰
                    </button>
                    <button type="button" className="btn btn-outline-dark row shadow">
                        <img src="/assets/logos/samsung.svg" alt="apple_logos" width="80" height="80" className="me-2"/>
                        갤럭시
                    </button>
                </div>
            </div>
        </>
    );
}
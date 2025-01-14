import React, { useState } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function PriceComparison() {

    const [formData, setFormData] = useState({
        voice: "",
        data: "",
        sms: "",
        age: "",
        type: "",
        dis: "",
    });

    const ageOptions = [
        { value: "20", label: "성인" },
        { value: "18", label: "청소년" },
        { value: "65", label: "실버(만 65세 이상)" },
    ];

    const typeOptions = [
        { value: "2", label: "3G" },
        { value: "3", label: "LTE" },
        { value: "6", label: "5G" },
    ];

    const disOptions = [
        { value: "0", label: "무약정" },
        { value: "12", label: "12개월" },
        { value: "24", label: "24개월" },
    ];

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <>
            {/* 요금제 추천받는 폼 */}
            <div className="container d-flex flex-column gap-4">
                <h1 className="text-center">요금제 추천</h1>
                <form>
                    {/* 요청 변수:voice */}
                    <Input
                        id="voice"
                        label="월 평균 통화량 (무제한:999999)"
                        placeholder="입력단위:분"
                        min="1"
                        onChange={handleInputChange}
                    />
                    {/* 요청 변수:data */}
                    <Input
                        id="data"
                        label="월 평균 데이터 사용량 (무제한:999999)"
                        placeholder="입력단위:MB"
                        min="1"
                        onChange={handleInputChange}
                    />
                    {/* 요청 변수:sms */}
                    <Input
                        id="sms"
                        label="월 평균 문자 발송량 (무제한:999999)"
                        placeholder="입력단위:건수"
                        min="1"
                        onChange={handleInputChange}
                    />
                    {/* 요청 변수:age */}
                    <Select
                        id="age"
                        label="-- 연령 --"
                        defaultValue=""
                        options={ageOptions}
                        onChange={handleInputChange}
                    />
                    {/* 요청 변수:type */}
                    <Select
                        id="type"
                        label="-- 서비스 타입 --"
                        defaultValue=""
                        options={typeOptions}
                        onChange={handleInputChange}
                    />
                    {/* 요청 변수:dis */}
                    <Select
                        id="dis"
                        label="-- 약정기간 --"
                        defaultValue=""
                        options={disOptions}
                        onChange={handleInputChange}
                    />
                    <div className="mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => console.log(formData)}
                        >
                            제출
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
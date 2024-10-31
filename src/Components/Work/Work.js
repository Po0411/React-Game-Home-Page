import React from 'react';
import img1 from '../../../src/assets/work/KakaoTalk_20241031_140538426.png'
import img2 from '../../../src/assets/work/KakaoTalk_20241031_140538426_01.jpg'
import img3 from '../../../src/assets/work/KakaoTalk_20241031_140538426_02.png'
import './Work.css';

const Work = () => {
    return (
        <div className="work-container">
            <div className="promotion-container">
                <h1 className="promotion-link">학생작품</h1>
                <span className="promotion-text">경기과학기술대 학생들의 작품입니다.</span>
            </div>
            <div className="image-scroll-container">
                <img src={img1} alt="Student Work 1" className="work-image" />
                <img src={img2} alt="Student Work 2" className="work-image" />
                <img src={img3} alt="Student Work 3" className="work-image" />
            </div>
        </div>
    );
};

export default Work;

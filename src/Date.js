import React from "react";

const Date = ({ date }) => {
  let year = "20";
  let month = "02";
  let newDate = "02";
  if (date.length === 8) {
    year = date.slice(0, 4);
    month = date.slice(4, 6);
    newDate = date.slice(6, 8);
  }
  return (
    <div className="date-form">
      <h2>{`${year}년 ${month}월 ${newDate}일 박스오피스 영화 순위는?`}</h2>
    </div>
  );
};

export default Date;

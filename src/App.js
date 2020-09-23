import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [date, setDate] = useState(null);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 방지를 위한 작업
    if (input.length !== 8) {
      alert("8자리를 입력해주세요(ex 20200202)"); //input안에 8자리를 받기위한 코드
    }
    if (isNaN(Number(input)) === true) {
      alert("숫자만 입력해주세요"); //isNaN으로 문자열을 넣었을때 숫자를 입력해달라는 코드
    }
    setDate(input);
  };

  const onChange = (e) => {
    setInput(e.currentTarget.value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const query = date || "20200202";
        setLoading(true);
        const response = await axios.get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_API_KEY}&targetDt=20200101`
        );
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          placeholder="원하는날짜를 입력하세요(20190202)"
          onChange={onChange}
        />
        {console.log(process.env.REACT_APP_API_KEY)}
        <button type="submit">입력하기</button>
      </form>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieTemplate from "./MovieTemplate";

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
    setInput("");
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
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_API_KEY}&targetDt=${query}`
        );
        setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchMovies();
  }, [date]);

  if (!movies) {
    return null;
  }
  if (loading) {
    return <div>로딩중..</div>;
  }

  return (
    <div>
      <MovieTemplate
        onSubmit={onSubmit}
        onChange={onChange}
        input={input}
        date={date}
        movies={movies}
      />
    </div>
  );
}

export default App;

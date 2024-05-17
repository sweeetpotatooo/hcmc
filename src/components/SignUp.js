import React, { useState } from "react";

const SignUpForm = () => {
  const [form, setForm] = useState({
    username: "",
    birthdate: "",
    gender: "",
    university: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // 서버로 폼 데이터 전송 로직 추가
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">아이디:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="birthdate">생년월일:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">성별:</label>
        <select
          id="gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">선택하세요</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
          <option value="other">기타</option>
        </select>
      </div>
      <div>
        <label htmlFor="university">소속 대학교:</label>
        <input
          type="text"
          id="university"
          name="university"
          value={form.university}
          onChange={handleChange}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUpForm;

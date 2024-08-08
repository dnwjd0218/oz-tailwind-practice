export default function Header() {
  return (
    <header className="flex justify-between px-2 py-1 bg-black align-center">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center gap-5 align-center">
        <li className="text-xs font-normal list-none">로그인</li>
        <li className="text-xs font-normal list-none">회원가입</li>
        <li className="text-xs font-normal list-none">내클래스</li>
      </ul>
    </header>
  );
}
// .header-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: black;
// }

// .header-container ul {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// }

// ul li {
//   list-style: none;
//   font-weight: 400;
//   font-size: 13px;
// }

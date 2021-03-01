import React from 'react';
import Xlsx from 'xlsx';

function XlsxD() {
  const saveH =() => {
    const day = new Date().getDate();
    const mon = new Date().getMonth();
    const title = `${mon}_${day}`
    let Data = JSON.parse(localStorage.getItem("todos"));
    const worksheet = Xlsx.utils.json_to_sheet(Data);
    const workBook = Xlsx.utils.book_new();
    Xlsx.utils.book_append_sheet(workBook, worksheet, "today todos");
    Xlsx.writeFile(workBook,`${title}.xlsx`);
  }
  return (
    <div className="sv-button">
      <button onClick={saveH} type="submit">
      <i className="fas fa-save" style={{fontSize: "36px"}} ></i>
      </button> 
    </div>
  )
}

export default XlsxD;

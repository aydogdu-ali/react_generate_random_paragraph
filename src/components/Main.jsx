import { useState } from "react";
import data from "../helper/data"

const Main = () => {
  const [count, setCount] = useState("");
  const [text, setText] = useState([]);

  console.log(count)
  console.log(text);
const handleSubmit = (e)=>{
 e.preventDefault();
 let amount = parseInt(count)

 if (count<=0){
    alert("lütfen 1 ile 7 arasında sayı giriniz")
 }
 

 if (count > 7) {
    e.preventDefault()
    alert("En Fazla 7 girebilirsiniz");
    }
    setText(data.slice(0, amount));
    console.log(setText(data.slice(0, amount)));
  };

const handleClear = ()=>{
    setCount("")
}

  return (
    <div className="Main">
      <h2> Cümle Ekle</h2>
      <form className="add" onSubmit={handleSubmit}>
        <label htmlFor="İndex"> Cümle Sayısı:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          max="7"
          min ="0"
        />
       
         
          <button className="Ekle"> Ekle</button>
       
      </form>
      <button className="temizle" onClick={handleClear}>
      
        Temizle
      </button>
      <div>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );



};

export default Main;

import { useState } from "react";
import data from "../helper/data" // data verimizi import ediyoruz.

const Main = () => {

    // kullanacağım stateleri tanımlıyorum.
    // count statetini kullanıcıdan alıyorum.
  const [count, setCount] = useState("");
  // kullanıcıdan aldığım count a göre ekrana yazdıracağım cümle sayısını belirliyorum.
  const [text, setText] = useState([]);


  // form içinde imput tanımlarsak ayrıca herhengi bir butona onClik göndermemize gerek kalmaz burda onu gösterdim.
  // onSubmit methodu ile bu işlevi yerine getirir. Burada form elementine yazdığımız fonksiyomu tanımladım.
 
const handleSubmit = (e)=>{
  e.preventDefault();
  let amount = parseInt(count);
  // inputta girilen sayısı yakaladık yakaladığımız sayı ile ilgili koşulları yazdım.
  // Burada inputun değerine max-min özelliği ile girilebilecek sayıları aşağıda tanımladım.
  //Ancak yine de kullanıcaya bilgi vermek için bu koşulları yazdım. 
  if (count <= 0) {
    alert("lütfen 1 ile 7 arasında sayı giriniz");
  }

  if (count > 7) {
    e.preventDefault();
    alert("En Fazla 7 girebilirsiniz");
    return setCount("");
  }

  // burda kullanıcı girdiği sayıyı kullanarak slice methodu ile girdiği sayı kadar data veri setimizden cümlemizi alıyoruz. Ve text statetimize gönderiyoruz.
  setText(data.slice(0, amount));
 
};

// Temizle butonuna bastığımızda stateleri başlangıç durumuna getiriyoruz.
const handleClear = ()=>{
    setCount("")
    setText([])
}

// Sil butonuna bastığımızda çalışacak fonksiyonu tanımlıyoruz.
const handleDelete = (item) => {
const deleteItem =item
const index = text.indexOf(deleteItem)
if (index > -1) {
   setCount((text.splice(index, 1)));
   
}


 }
   
 
    
   
  







  return (
    <div className="main">
      <h2> Cümle Göster</h2>
      <form className="add" onSubmit={handleSubmit}>
        <label htmlFor="İndex"> Cümle Sayısı:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          max="8"
          min ="0"
        />
       
         
          <button className="ekle"> Ekle</button>
       
      </form>
      <button className="temizle" onClick={handleClear}>
      
        Temizle
      </button>
      <div >
        {/*Kullanıcıdan aldığımız counta göre text'e gönderilen sayı jadar cümleyi DOM'a gönderiyoruz.*/}
        {text.map((item,index) => {
          return (
            <div key={index}>
            
              <p className="paragraf">{item}</p>
              <button className="sil " onClick={()=>handleDelete(item)}> Sil</button>
            </div>
          );
        })}
      </div>
    </div>
  );



};

export default Main;

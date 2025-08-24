import IqbalApi from "../Apis/IqbalApi"
const Iqbalsher = () =>{

    return(

      <>

    <div style={{
      textDecorationColor: 'black',
  background: 'linear-gradient(45deg, #f4f1e8, #e8dcc0, #d4c4a0)',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: 'serif'

    
//   async function fetchData() {
//   try {
//     const response = await fetch("http://localhost:9000/api/sher/Allama_Iqbal");
//     const data = await response.json();
    
//     // Handle the fetched data here
//     let t = document.getElementById("container");
//     let i = Math.floor(Math.random()*11);
//       // t.innerHTML = data[i].replace(/\n/g, "<br><br>");
//       t.innerHTML = data[i].text.replace(/\n/g, "<br><br>");
//       console.log(data);
    
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchData();

   }}>

    <IqbalApi />
   </div>
    
  

 
  </>
    )
}



export default Iqbalsher
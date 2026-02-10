import { useState, useEffect} from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useContext } from "react";
import { MyContext } from "../ContextProvider"
import { ProfileCard } from "./components/ProfileCard";





const UserProfile = () =>{


  let newTrial;


    const[userName, setUserName] = useState("");
    const[netKalam, setNetKalam] = useState("");
    const[joining, setJoining]  =  useState("");
    const[ghazalLength, setGhazalLength] = useState("");
    const[nazmLength, setNazmLength] = useState("");
    const[sherLength, setSherLength] = useState("");
    const[date, setDate] = useState("");
    const[counter, setCounter] = useState("");
    const[current, setCurrent] = useState("");
    const{streak, setStreak, streak2, setStreak2} = useContext(MyContext);
    const[data, setData] = useState("")
     
   

    const profile= ()=>{




        axiosInstance

        .get('http://localhost:9000/api/users')
        .then(response =>{
            

            // currentstreak

           

             const currentValue =  response.data.counter[0].streak

             const trial = Number(response.data.counter[0].streak);
             

            setCurrent(currentValue)

             console.log(current)




            // Username

            console.log(response.data)

            const res = response.data.userDb[0].name
            console.log(res)

            setUserName(res);


            // Total contributions made

             const red = response.data.leng
            console.log(red);

            setNetKalam(red);


            // date when account created

            const date = response.data.userDb[0].createdAt;

            setJoining(date);

            // contributions made in shayri category

            const sherLen = response.data.sherCollectionLen;
            setSherLength(sherLen);


            // Contributions made in ghazal category

            const ghazal = response.data.ghazalLen;
            setGhazalLength(ghazal);

            
            // Contributions made in nazm Category

            const nazm = response.data.nazmLen;
            setNazmLength(nazm);

            //

            const tareekh = response.data.userDb[0].createdAt

            // current streak

           
            

            
  const localDate = new Date(tareekh).toLocaleString();

  setDate(localDate);

     //  Defining streak logic

    //  let streakDate = new Date(streak);
     
    //  streakDate.setDate(streakDate.getDate() + 3);

    //  console.log(streakDate.getDate());


     let numb = new Date(streak);

    //  let numb2 = numb.setDate(numb.getDate());
    //  console.log(numb2);

    let numb2 = numb.getTime()/1000/60/60;

     // Original Date

    //  console.log(streakDate.setDate(streakDate.getDate() + 1));

    //  let num = new Date(streak);





    // let numb3 = new Date(streak2);

    // let numb4 = numb3.setDate(numb2.getdate());

    // console.log(numb4);


      let numb3 = new Date(streak2);

      let numb4 = numb3.getTime()/1000/60/60;

       
      let diff = numb2 - numb4;

      console.log(diff)

      if(diff >= 24 && diff <= 48){

        // setCurrent(prev=> prev + 1)

        newTrial = trial + 1;
        setCurrent(newTrial);

      }else if(diff > 48){
        // setCounter(0)

        newTrial = 0;
        setCurrent(newTrial);
      }else{
        // setCurrent(prev=>prev + 4)

        // newTrial = trial + 4;

        // setCurrent(newTrial);


        axiosInstance 
      .put('http://localhost:9000/streak',{

        // count: current

        count: newTrial

        
      },
      
      {withCredentials: true}
    
    )

      .then((response)=>{
      console.log(response.data)

      

    })



      }

        })


  //        const HandleCount = ()=>{

  //     console.log(current)

  //      axiosInstance 
  //     .put('http://localhost:9000/streak',{

  //       // count: current

  //       count: newTrial

        
  //     },
      
  //     {withCredentials: true}
    
  //   )

  //     .then((response)=>{
  //     console.log(response.data)

      

  //   })

    
    

  // };
 
  // useEffect(()=>{
  //     HandleCount()
  //   }, [current]);



}

    useEffect(()=>{
        profile();
    }, []);


   

  


    return(
        <>
        {/* <h1>User Profile</h1>
        <h1>Hello {userName}</h1>
        <h1>Total Kalams submitted {netKalam}</h1>
        <h1>Account created on {joining}</h1>
        <h1>Contributions made in Shayri: {sherLength}</h1>
        <h1>Contributions made in Ghazal: {ghazalLength}</h1>
        <h1>Contributions made in Nazm: {nazmLength}</h1>
        <h1>Date: {date}</h1>
        <h1>Streak: {current}</h1> */}



        {/* <h1>{current}</h1>
        <h1>{currentValue}</h1> */}
        {/* <button onClick={HandleCount}>Handle</button>  */}
        
        <ProfileCard
        
        userName={userName}
        totalKalams={netKalam}
        joiningDate={joining}
        Streak={current}
        totalSher={sherLength}
        totalGhazal={ghazalLength}
        totalNazm={nazmLength}
        

        
        />

        <input  type ="file"  onChange={(e)=> setData(e.target.value)}  />
{
        console.log("image Data", data)
}
        </>
    )

  
}


export default UserProfile;
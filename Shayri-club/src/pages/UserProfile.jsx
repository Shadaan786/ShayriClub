import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useContext } from "react";
import { MyContext } from "../ContextProvider"
import { PoetProfileDashboard } from "./components/ProfileCard";
import { useSearchParams, useNavigate } from "react-router-dom";





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
    const[file, setFile] = useState(null);
    const[data, setData] = useState("")
    const[available, setAvailable]  = useState(false);
    const[profilePic, setProfilePic] = useState("");
    const[followerCount, setFollowerCount] = useState(0)

    // --- Follow / own-profile state ---
    // PoetProfileDashboard is presentational: it no longer fetches this
    // itself (ProfileCard used to), so we own it here instead.
    const[loggedInUserId, setLoggedInUserId] = useState("");
    const[isOwnProfile, setIsOwnProfile] = useState(true);
    const[isFollowing, setIsFollowing] = useState(false);
    const[followersList, setFollowersList] = useState([]);
    const [featuredVerse, setFeaturedVerse] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const[SearchParams] = useSearchParams();
    const navigate = useNavigate();

    const userId = SearchParams.get("userId");
     
   

    const profile= ()=>{




        axiosInstance

        .get(`/api/users?userId=${userId}`, {
          withCredentials: true
        })
        .then(response =>{
          console.log("see response.data", response.data);
            

            // currentstreak
            const followers = response.data.netFollowers?.followers.length || response.data.userFollowers
            console.log("see followers",followers)

           setFollowerCount(followers)

          //  console.log("follower_count", response.data.netFollowers.followers.length)

            //  const currentValue =  response.data.counter[0].streak

            //  const trial = Number(response.data.counter[0].streak);
             

            // setCurrent(currentValue)

            //  console.log(current)

             // ProfilePic Link from cloudinary

             const profilePic = response.data.userDb?.[0].profilePic || response.data.profilePic;


             setProfilePic(profilePic)

             const profileCover = response.data.userDb?.[0].profileCover || response.data.profileCover;

             setCoverImage(profileCover);

             const featuredVerse = response.data.userDb?.[0].featuredVerse || JSON.parse(response.data.userInfo).featuredVerse;
             console.log("see it",response.data.userDb?.[0].featuredVerse || JSON.parse(response.data.userInfo).featuredVerse)

             setFeaturedVerse(featuredVerse);




            // Username

            console.log(response.data)

            const res = response.data.userDb?.[0].name || JSON.parse(response.data.userInfo).name
            console.log("see name",res)

            setUserName(res);


            // Total contributions made

             const red = response.data.leng
             if(!red){
              setNetKalam(response.data.userKalamLength)
              console.log("red1", response.data.userKalamLength)
             }else{

               console.log("red2", red);

            setNetKalam(red );


             }
           

            // date when account created

            const date = response.data.userDb?.[0].createdAt || JSON.parse(response.data.userInfo).createdAt

            setJoining(date);

            // contributions made in shayri category

            const sherLen = response.data.sherCollectionLen;
            if(!sherLen){
              setSherLength(response.data.userSherLength)
            }
            setSherLength(sherLen);


            // Contributions made in ghazal category

            const ghazal = response.data.ghazalLen;
            if(!ghazal){
              setGhazalLength(response.data.userGhazalLength)
            }
            setGhazalLength(ghazal);

            
            // Contributions made in nazm Category

            const nazm = response.data.nazmLen;
            if(!nazm){
              setNazmLength(response.data.userNazmLength)
            }
            setNazmLength(nazm);

            //

            const tareekh = response.data.userDb?.[0].createdAt || JSON.parse(response.data.userInfo).createdAt

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
      .put('/streak',{

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

    // --- Own-profile check + follow state ---
    // This used to live inside ProfileCard itself. Since the dashboard is
    // now a presentational component, we fetch it here and pass it down.
    useEffect(()=>{
      axiosInstance
      .get(`/api/userId`, { withCredentials: true })
      .then((response)=>{
        const loggedInId = response.data._id;
        setLoggedInUserId(loggedInId);
        setIsOwnProfile(loggedInId === userId);
      })
      .catch((error)=>{
        console.error("error fetching logged-in userId", error);
      });
    }, [userId]);

    const fetchFollowers = () => {
      axiosInstance
      .get(`/api/getFollowers?user=${userId}`, { withCredentials: true })
      .then((response)=>{
        console.log("follower_data", response.data)
        if(response.data.found){
          setIsFollowing(true);
          setFollowersList(response.data.follower.followers || []);
        }else{
          setIsFollowing(false);
        }
      })
      .catch((error)=>{
        console.error("error fetching follower", error)
      });
    };

    useEffect(()=>{
      if(!isOwnProfile){
        fetchFollowers();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOwnProfile, userId]);

    const triggerFollow = () => {
      axiosInstance
      .post('/api/follow', { userId }, { withCredentials: true })
      .then((response)=>{
        if(response.data.success){
          setIsFollowing(true);
        }
      });
    };

    const triggerUnfollow = () => {
      axiosInstance
      .post(`/api/unfollow?userId=${userId}`, { withCredentials: true })
      .then((response)=>{
        console.log(response.data)
        if(response.data.success){
          setIsFollowing(false);
        }
      });
    };

    const handleSearchUser = (query) => {
      return axiosInstance
        .post('/api/searchUser', { query })
        .then((response)=> response.data);
    };

    const handleSelectSearchResult = (item) => {
      navigate(`/profile?userId=${item._id}`);
      navigate(0);
    };

    const handleWriteStanza = () => {
      navigate('/write');
    };


  

    


    const handleUpload =()=>{


      if(!available){

        alert("Select an image");

        return
      }else{


         const formData = new FormData();


    formData.append("image", file)


      axiosInstance
      .post("/upload", formData,{

        headers:{"Content-Type":"multipart/form-data" },
        withCredentials: true
      })

      .then((response)=>{

        console.log(response.data)
      })


      }
   
    }

    


   

  


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
        
        <PoetProfileDashboard

        userName={userName}
        totalKalams={netKalam}
        joiningDate={joining}
        Streak={current}
        totalSher={sherLength}
        totalGhazal={ghazalLength}
        totalNazm={nazmLength}
        profileLink={profilePic}
        totalFollowers={followerCount}
        userId={userId}
        spotlightVerse={featuredVerse}
        coverImage={coverImage}
        

        isOwnProfile={isOwnProfile}
        isFollowing={true}
        onFollow={triggerFollow}
        onUnfollow={triggerUnfollow}
        followersList={followersList}
        onFollowersOpen={fetchFollowers}

        onSearchUser={handleSearchUser}
        onSelectSearchResult={handleSelectSearchResult}
        onWriteStanza={handleWriteStanza}

         badges={[
    { name: "First Ghazal", icon: "🌙", desc: "Published your very first Ghazal.", earned: true },
    { name: "Hundred Shers", icon: "✍️", desc: "Wrote 100 shers in total.", earned: true },
    { name: "Trending Poet", icon: "🔥", desc: "Had a kalam reach trending.", earned: false },
    { name: "Maqta Master", icon: "👑", desc: "10 acclaimed maqta couplets.", earned: false },
  ]}
        

        
        />

        {/* <input  type ="file"  onChange={(e)=> 
        
        
        {
        setFile(e.target.files[0])
        setAvailable(true)
      
        }
      
      }
        
        
        
        
        
        /> */}
{
        console.log("image Data", data)
}

{/* <button onClick={handleUpload}>upload</button> */}


        </>
    )

  
}


export default UserProfile;
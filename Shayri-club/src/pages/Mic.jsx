import { useRef, useState } from "react";



export const  MicTesting=()=>{

    const audioChunk = useRef([]);
    const [recording, setRecording] = useState([])
    const mediaRecorderRef = useRef(null);
    const [streamRecording, setStreamRecording] = useState(false);


    const startRec =async()=>{

         const stream = await navigator.mediaDevices.getUserMedia({audio:true});

         const mediaRecorder = new MediaRecorder(stream);

         mediaRecorder.ondataavailable = (e)=>{

            if(e.data.size > 0){

                // saving the data
                audioChunk.current.push(e.data)
            }
        }

        mediaRecorder.onstop =()=>{

            const audioBlob = new Blob(audioChunk.current, {type: 'audio/wav'});
            const audioUrl = URL.createObjectURL(audioBlob);

            setRecording([audioUrl]);
        };

        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
        setStreamRecording(true);

    }
    // }  catch (error){
               
    //     console.log("error", error);
    // }


    const stopRec =()=>{
        if(mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording'){
            mediaRecorderRef.current.stop();
        }{
            mediaRecorderRef.current.stop();
            setStreamRecording(false);
        }
    }
 


    return(
        <>
        <button onClick={startRec}>start</button>
        <button onClick={stopRec}>stop</button>

        {
            recording.map((recUrl, i)=>(

                <div key={i}>
                    <audio controls src={recUrl}/>
                    <a href={recUrl} download={`recording-${i}.wav`}>Download</a>


                </div>
            ))
        }
        
        </>
    )
}
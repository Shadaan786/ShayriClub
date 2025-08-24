import {Link} from  'react-router-dom'
import Allama from "../Allama.jpg"
import Iqbalsher from "./Iqbalsher.jsx"


const IqbalInfo = () =>{

    return(

      <>

    <div style={{
  background: 'linear-gradient(45deg, #f4f1e8, #e8dcc0, #d4c4a0)',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: 'serif'
}}>
  <div className="text-center">
    <h1 className="text-6xl" style={{color: '#5a4a3a', marginBottom: '30px'}}>Allama Iqbal</h1>
    <div className="flex gap-4">
      <div className="flex-shrink-0" style={{width: '300px'}}>
        <img src={Allama} alt="" srcSet="" className="w-60 h-50" style={{border: '3px solid #8b7355'}} />
        <h2 style={{color: '#5a4a3a', marginTop: '15px', marginBottom: '10px'}}>Key Contributions</h2>
        <ul className="text-left text-sm" style={{listStyleType: 'disc', paddingLeft: '20px', color: '#3a3a3a'}}>
          <li style={{marginBottom: '5px'}}>Philosophy and Poetry: Iqbal's philosophical works and poetry have had a lasting impact on Urdu literature and Islamic thought.</li>
          <li style={{marginBottom: '5px'}}>Political Influence: His vision for a separate Muslim state laid the groundwork for the Pakistan Movement.</li>
          <li style={{marginBottom: '5px'}}>Legacy: Iqbal is celebrated annually in Pakistan on Iqbal Day, November 9, to honor his contributions.</li>
        </ul>
      </div>
      <div className="flex-1">
        <p className="text-left" style={{color: '#3a3a3a', lineHeight: '1.6', fontSize: '14px'}}>
          <br/><br/>
          Allama Iqbal, born on November 9, 1877, in Sialkot, was a prominent philosopher, poet, and politician in British India who is widely regarded as having inspired the Pakistan Movement. He is also known as Mufakkir-e-Pakistan (The Thinker of Pakistan), Shair-e-Mashriq (The Poet of the East), and Hakeem-ul-Ummat (The Sage of the Ummah).
          <br/><br/>
          Iqbal's poetry is primarily in Persian and Urdu, and he is considered one of the most important figures in Urdu literature. His works include "Shikwa" (Complaint) and "Jawab-e-Shikwa" (Response to the Complaint), which express his thoughts on the state of Muslims in India and their relationship with God.
          <br/><br/>
          He played a significant role in the intellectual revival of the Muslim community in India and is credited with inspiring the idea of a separate Muslim state, which eventually led to the creation of Pakistan in 1947. Iqbal passed away on April 21, 1938, but his legacy continues to influence Pakistani culture and politics.
        </p>
      </div>
    </div>
    
    <div style={{marginTop: '40px'}}>
      <h2 style={{color: '#5a4a3a', marginBottom: '15px', textAlign: 'left'}}>Further Reading</h2>
      <p style={{color: '#3a3a3a', textAlign: 'left', marginBottom: '20px'}}>
        For more information about Allama Iqbal, you can visit the following resources:
      </p>
      <ul style={{textAlign: 'left', color: '#3a3a3a', marginBottom: '30px'}}>
        <li><a href="#" style={{color: '#6b5b95', textDecoration: 'underline'}}>Wikipedia - Allama Iqbal</a></li>
        <li><a href="#" style={{color: '#6b5b95', textDecoration: 'underline'}}>Allama Iqbal Official Website</a></li>
      </ul>
      
      <div style={{textAlign: 'center', marginTop: '30px'}}>
        <Link to = "Iqbalsher/">
        <button style={{
          backgroundColor: '#6b5b95',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '25px',
          border: 'none',
          fontSize: '14px',
          cursor: 'pointer'
        }}>
          Listen to Iqbal's Poetry
        </button>
        </Link>
      </div>
    </div>
  </div>
</div>

    </>

    )
}   

export default IqbalInfo    
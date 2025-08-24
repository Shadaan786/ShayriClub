import {Link} from  'react-router-dom'
import Allama from "../Allama.jpg"
import Iqbalsher from "./Iqbalsher.jsx"

const IqbalInfo = () =>{
    return(
        <>
            <div style={{
                background: 'linear-gradient(45deg, #f4f1e8, #e8dcc0, #d4c4a0)',
                minHeight: '100vh',
                padding: '16px',
                fontFamily: 'serif'
            }}>
                <div className="text-center">
                    {/* Responsive title */}
                    <h1 
                        className="text-4xl md:text-6xl" 
                        style={{
                            color: '#5a4a3a', 
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}
                    >
                        Allama Iqbal
                    </h1>
                    
                    {/* Responsive flex container - stacks on mobile */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Image and key contributions section */}
                        <div className="flex-shrink-0 md:w-80 w-full flex flex-col items-center">
                            <img 
                                src={Allama} 
                                alt="Allama Iqbal" 
                                className="w-48 h-auto md:w-60" 
                                style={{
                                    border: '3px solid #8b7355',
                                    borderRadius: '8px'
                                }} 
                            />
                            
                            <h2 style={{
                                color: '#5a4a3a', 
                                marginTop: '20px', 
                                marginBottom: '15px',
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>
                                Key Contributions
                            </h2>
                            
                            <ul 
                                className="text-left text-sm md:text-base" 
                                style={{
                                    listStyleType: 'disc', 
                                    paddingLeft: '20px', 
                                    color: '#3a3a3a',
                                    maxWidth: '100%'
                                }}
                            >
                                <li style={{marginBottom: '8px'}}>
                                    Philosophy and Poetry: Iqbal's philosophical works and poetry have had a lasting impact on Urdu literature and Islamic thought.
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    Political Influence: His vision for a separate Muslim state laid the groundwork for the Pakistan Movement.
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    Legacy: Iqbal is celebrated annually in Pakistan on Iqbal Day, November 9, to honor his contributions.
                                </li>
                            </ul>
                        </div>
                        
                        {/* Main content section */}
                        <div className="flex-1">
                            <p 
                                className="text-left" 
                                style={{
                                    color: '#3a3a3a', 
                                    lineHeight: '1.6', 
                                    fontSize: '14px',
                                    marginTop: '16px'
                                }}
                            >
                                Allama Iqbal, born on November 9, 1877, in Sialkot, was a prominent philosopher, poet, and politician in British India who is widely regarded as having inspired the Pakistan Movement. He is also known as Mufakkir-e-Pakistan (The Thinker of Pakistan), Shair-e-Mashriq (The Poet of the East), and Hakeem-ul-Ummat (The Sage of the Ummah).
                                <br/><br/>
                                Iqbal's poetry is primarily in Persian and Urdu, and he is considered one of the most important figures in Urdu literature. His works include "Shikwa" (Complaint) and "Jawab-e-Shikwa" (Response to the Complaint), which express his thoughts on the state of Muslims in India and their relationship with God.
                                <br/><br/>
                                He played a significant role in the intellectual revival of the Muslim community in India and is credited with inspiring the idea of a separate Muslim state, which eventually led to the creation of Pakistan in 1947. Iqbal passed away on April 21, 1938, but his legacy continues to influence Pakistani culture and politics.
                            </p>
                        </div>
                    </div>
                    
                    {/* Further reading section */}
                    <div style={{marginTop: '40px'}}>
                        <h2 style={{
                            color: '#5a4a3a', 
                            marginBottom: '15px', 
                            textAlign: 'left',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}>
                            Further Reading
                        </h2>
                        
                        <p style={{
                            color: '#3a3a3a', 
                            textAlign: 'left', 
                            marginBottom: '20px',
                            fontSize: '14px'
                        }}>
                            For more information about Allama Iqbal, you can visit the following resources:
                        </p>
                        
                        <ul style={{
                            textAlign: 'left', 
                            color: '#3a3a3a', 
                            marginBottom: '30px',
                            fontSize: '14px'
                        }}>
                            <li style={{marginBottom: '8px'}}>
                                <a href="#" style={{
                                    color: '#6b5b95', 
                                    textDecoration: 'underline'
                                }}>
                                    Wikipedia - Allama Iqbal
                                </a>
                            </li>
                            <li style={{marginBottom: '8px'}}>
                                <a href="#" style={{
                                    color: '#6b5b95', 
                                    textDecoration: 'underline'
                                }}>
                                    Allama Iqbal Official Website
                                </a>
                            </li>
                        </ul>
                        
                        {/* Button with responsive styling */}
                        <div style={{textAlign: 'center', marginTop: '30px'}}>
                            <Link to="Iqbalsher/">
                                <button style={{
                                    backgroundColor: '#6b5b95',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '25px',
                                    border: 'none',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    width: '100%',
                                    maxWidth: '280px',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#5a4b7a'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#6b5b95'}
                                >
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
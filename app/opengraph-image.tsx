import { ImageResponse } from 'next/og';
export const alt='Websathi — Free website consultation';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',background:'linear-gradient(120deg,#163879,#141d40,#352569)',color:'white',fontFamily:'sans-serif',textAlign:'center'}}><div style={{fontSize:34,color:'#96b9ff',marginBottom:40}}>websathi</div><div style={{fontSize:66,fontWeight:800}}>Your Business Deserves</div><div style={{fontSize:66,fontWeight:800,color:'#7a99ff'}}>a Better Website.</div><div style={{fontSize:26,marginTop:38,color:'#ccd6eb'}}>Book a Free Consultation Call</div></div>,size);}

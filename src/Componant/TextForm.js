import React,{useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function TextForm(props){
const handleUpClick =()=>{
  let newText=text.toUpperCase();
  setText(newText);

}
const handleDownClick =()=>{
  let newText2=text.toLowerCase();
  setText(newText2)
}
const handleOnChange =(e)=>{
  setText(e.target.value)
}

const handdleRemoveSpace =() =>{
  let newText =text.split(/[ ]+/)
  setText(newText.join(" "))
}
const handleClearText=()=>{
  setText("")
}


const Alert=()=>{
  alert(  "Copied"  )
}


    const [text, setText] = useState("");
    
    const [copied, setCopied]=useState(false);

  return (
    <>
     

<div className='left'>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" placeholder="Enter the text here" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>

</div>
<button className="bttn " onClick={handleUpClick}>Uppercase</button>
<button className="bttn " onClick={handleDownClick}>Lowercase</button>

<CopyToClipboard text={text} onCopy={()=> setCopied(true)}>

  <button className="bttn "  onClick={Alert}>Copy To Clipboard</button>

</CopyToClipboard>

<button className="bttn " onClick={handdleRemoveSpace}>Remove Space</button>
<button className="bttn " onClick={handleClearText}>Clear Text</button>

</div>
<div className='right'>
    <h1>Current View</h1>
   
    <p>Word :{text.split(" ").filter((e)=>{return e.length !== 0}).length}, Charecter :{text.length}, Times :{0.008 * text.split(" ").length} Minutes</p>
    
    
</div>
    </>
  )
}


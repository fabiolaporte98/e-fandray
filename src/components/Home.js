import '../styles/Home.css'
// import {fond} from '../assets/images/fond.jpg'
import logo1 from '../assets/images/user2.png'
import send from '../assets/images/send.png'
import email from '../assets/images/email.png'
// import vola from '../assets/images/vola.png'
import React from 'react'
function NavBar(){
    return <div >
                 <center><h1 className="bg-gray-500">e-fandray</h1></center>   
                 
                 <ul className="container  menu">
                     <li>Nom:LAPORTE</li>
                     <li>Prénom:Marie Fabio</li>
                     <li>Classe: IGGLIA3 n°49</li>
                 </ul>
           </div>

}

// function Banner(){
//     return <div className="ban">
                 
                 
              
//            </div>
    
    
// }
// chatliste
class Liste extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            msg : this.msg
        }
    }
    render(){
        return <div className="liste border-2 border-black w-96">
                     
                    <div className="list_msg flex flex-row">
                    <img src={email} alt="msg" className="w-8 h-8"></img>
                    <button className="but bg-gray-900 text-purple-600 ml-1">+ Nouveau</button> 
                    </div>
                    <div className="recherche">
                            <input type="text" placeholder="Recherche" className="border-2 border-black rounded-md"></input>
                            <button className="but_rech bg-gray-900 text-purple-600">Recherche</button>
                    </div>
                    <div className="item">
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                        <ItemList></ItemList>
                    </div>
                </div>
    }
}

// chatlisteitem liste message rehetra
class ItemList extends React.Component{
    render(){
        return<div className="flex flex-row border-2 border-black">
             <img src={logo1} alt="ico" className="rounded-full w-14"></img>
             <h1><b>Mpandefa.Name</b><br></br> Tonga avany am mpandefa...</h1>
             
        </div>
    }
    
}
// class Story extends React.Component{
//     render(){
//         return <div className="flex flex-row sto">
//                <img src={vola} alt="story" className="story"></img>
//                <img src={vola} alt="story" className="story"></img>
//                <img src={vola} alt="story" className="story"></img>
//                {/*<img src={vola} alt="story" className="story"></img>
//                <img src={vola} alt="story" className="story"></img>
//                <img src={vola} alt="story" className="story"></img>*/}
//               </div>
//     }
// }

class Story extends React.Component{
    render(){
        return <div className="card">
                     <h3>Story.Name</h3>
                     <div className="bar">
                         <div className="emptybar"></div>
                         <div className="filledbar"></div>
                     </div>
                     <div className="circle"></div>
               </div>
    }
}

//body chat
class Corps extends React.Component{
    render(){
        return <div>
                     <Story></Story>
                    <div className="ban flex flex-row">
                        <Liste></Liste>
                        <Message></Message>
                        <Profile></Profile>
                        
                    </div>
               </div>     
    }
}

//user profile
class Profile extends React.Component{
    render(){
        return <div className=" float-right profil ml-32">
                   <img src={logo1} alt="ico" className="rounded-full w-40 "></img>
                   <h1>Informations</h1>
                   <p>Lorem ipsum dolor</p>
              </div>
    }
}

//chat content
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleBtn = this.handleBtn.bind(this)
    }
    handleChange(e){
        let v = e.target.value
        this.state.message.push(v)

    }
    handleBtn(event){
        event.preventDefault()
        this.setState(function(s){
            return {
                message:[...s.message,this.message]
            }
        })
    }
    render(){
        return  <div className="inp ">
                    <br></br>
                    <p className="bg-black text-pink-600 h-14 rounded-2xl ml-20"> Message Send</p><br></br>
                    <p className="bg-black text-pink-600 h-14 rounded-2xl mr-20">Message received</p><br></br>
                    <p className="bg-black text-pink-600 h-14 rounded-2xl ml-20">Message send</p><br></br>
                    <p className="bg-black text-pink-600 h-14 rounded-2xl ml-20">Message send</p><br></br>
                   {
                       this.state.message.map(msg =>
                        <p className="mt-72">{this.msg}</p>)
                   }
                    
                    <div className="mandefa  flex flex-row ">
                    <input type="text" placeholder="message " className="rounded-xl h-12  w-80 ml-10" onChange={this.handleChange}></input>
                    <button onClick={this.handleBtn}><img src={send} alt="send" className="w-20 h-12"></img></button> 
                    </div>
                    
                </div>    
    }
}
export function Home (){
    
    return <div>
             <NavBar></NavBar>
            {/* <Banner></Banner> */}
            <Corps></Corps>
            
            
            
    </div>
}

import React, { useEffect, useState } from 'react';

import facebook from './imgs/facebook.png'
import youtube from './imgs/youtube.png'
import instagram from './imgs/instagram.png'
import github from './imgs/github.png'
import linkedin from './imgs/linkedin.png'
import twitter from './imgs/twitter.png'
import whatsapp from './imgs/whatsapp.png'
import skype from './imgs/skype.png'
import pinterest from './imgs/pinterest.png'
import messenger from './imgs/messenger.png'

interface cards{
  cardContent: string,
  isSelected: boolean,
  id:number,
  name:string
}

const App:React.FC = () => {
  const [cards,setCards] = useState<cards[]>([
    {id:1,cardContent:facebook,isSelected:false,name:'facebook'},
    {id:2,cardContent:youtube,isSelected:false,name:'youtube'},
    {id:3,cardContent:instagram,isSelected:false,name:'instagram'},
    {id:7,cardContent:whatsapp,isSelected:false,name:'whatsapp'},
    {id:4,cardContent:github,isSelected:false,name:'github'},
    {id:5,cardContent:linkedin,isSelected:false,name:'linkedin'},
    {id:6,cardContent:twitter,isSelected:false,name:'twitter'},
    {id:8,cardContent:skype,isSelected:false,name:'skype'},
    {id:11,cardContent:facebook,isSelected:false,name:'facebook'},
    {id:9,cardContent:pinterest,isSelected:false,name:'pinterest'},
    {id:12,cardContent:youtube,isSelected:false,name:'youtube'},
    {id:10,cardContent:messenger,isSelected:false,name:'messenger'},
    {id:13,cardContent:instagram,isSelected:false,name:'instagram'},
    {id:17,cardContent:whatsapp,isSelected:false,name:'whatsapp'},
    {id:14,cardContent:github,isSelected:false,name:'github'},
    {id:15,cardContent:linkedin,isSelected:false,name:'linkedin'},
    {id:20,cardContent:messenger,isSelected:false,name:'messenger'},
    {id:16,cardContent:twitter,isSelected:false,name:'twitter'},
    {id:19,cardContent:pinterest,isSelected:false,name:'pinterest'},
    {id:18,cardContent:skype,isSelected:false,name:'skype'},

  ])

  const [openGame,setOpenGame] = useState<boolean>(false)

  const [selectedValues,setSelectedValues] = useState<cards[]>([])

  const [matchingvalue,setMatchingvalue] = useState<string[]>([])

  const [timetofinish,setTimetofinish] = useState<string>('')

  const [end,setEnd] = useState<boolean>(false)

  useEffect(() => {
    if(matchingvalue.length === 10){

      // let starttime = new Date()
  
      // let time = starttime.getHours() + ' : ' + starttime.getMinutes()
  
      // hide game
      setOpenGame(false)
  
      // show winning message
      setTimetofinish('Nice Work')
  
      setEnd(true)
    }

    
  }, [matchingvalue.length === 10])
  
  

const showImg = (el:{cardContent:string,id:number,name:string,isSelected:boolean})=> {

  if(!matchingvalue.includes(el.name)){
    let currentState = [...cards];
    let newState = currentState.map((img)=> {
      if(img.id === el.id){
        img.isSelected = true;
      }
      return img;
    })
    setCards(newState)
  
  
    if(selectedValues.length){
  
      // if user hit the same card
      if(el.id === selectedValues[0].id){
        console.log('same card');
      }else {
        if(el.name === selectedValues[0].name){
            setMatchingvalue([...matchingvalue,el.name])
          // then empty selectetvalues array
          setSelectedValues([])
        }else {
          // hide none matching cards
          let stateifnotmatch = currentState.map(elem=> {
            if(elem.name === el.name || elem.name === selectedValues[0].name){
              elem.isSelected = false;
            }
            return elem;
          })
          setCards(stateifnotmatch)
          setSelectedValues([])
        }
  
      }
    }else {
      setSelectedValues([...selectedValues,el])
    }

  }
}

const openGameFun = ()=> {
  setOpenGame(true)

  // let starttime = new Date()

  // let time = starttime.getHours() + ' : ' + starttime.getMinutes()

  // setTimetofinish(time)
}

  return (


    <div className='app'>
        <h1 className='text-center text-lg m-10'>Memory Game</h1>
        {openGame ?
          <div className="cards-container mx-auto rounded-md grid grid-cols-4 gap-1 p-3 m-1 border-2 border-black">
            {cards?.map((el)=> (
              <div onClick={()=> showImg(el)} key={el.id}
                className={`img-container mx-auto overflow-hidden rounded-md cursor-pointer border border-blue-500 ${el.isSelected && 'border-4'}`} style={{width:'60px',height:'60px'}}>
                {el.isSelected &&<img className='mx-auto mt-2' style={{width: '40px',height: '40px'}} src={el.cardContent} alt="" />}
              </div>
            ))}
          </div>:
          <button onClick={openGameFun} className='block border p-2 mx-auto mb-4 border-slate-600 rounded-md font-bold'>Start</button>
        }

        {/* winning message */}
        {end && <h5>Game End. Your Time is = {timetofinish}</h5> }
    </div>
  );
}

export default App;

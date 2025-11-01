import React, { useContext, useState } from 'react'
import { CountContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atom/count';

function App(){

  return (
      <div>
          <RecoilRoot>
            <Count />
          </RecoilRoot>
      </div>
  )
}

function Count(){
  console.log("re-render")
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  
  return ( 
    <div>
      <b>
        {count}
      </b>
      <EvenCountRenderer />
    </div>
  )
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : "It is odd"};
  </div>
}

function Buttons(){
  console.log("re-render buttons")
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={function(){
      setCount(count => count+1)
    }}>Increase</button>
    
    <button onClick={function(){
      setCount(count => count-1)
    }}>Decrease</button>
  </div>
}

function Para(){
  const count = useRecoilValue(countAtom);

  if(count % 2 == 0){
    return (
      <p>It is even</p>
    )
  }else{
    return (
      <p>It is odd</p>
    )
  }
}

export default App;
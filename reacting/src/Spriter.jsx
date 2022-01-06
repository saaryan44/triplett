import {useState,useEffect} from 'react';

import d1 from './sprites/dragon/p1.png';
import d2 from './sprites/dragon/p2.png';
import d3 from './sprites/dragon/p3.png';
import d4 from './sprites/dragon/p4.png';
import d5 from './sprites/dragon/p5.png';

import {upfx,downfx} from './action.count';
import {useDispatch,useSelector} from 'react-redux';



const Spriter=()=>{const dp=useDispatch(); const sp=useSelector(d=>d.counterfx);const [pp,PP]=useState("");const dragon=[d1,d2,d3,d4,d5];useEffect(()=>{let tp=dragon.length;let ko=-1; setInterval(()=>{if(++ko===tp){ko=0;}PP(ko.toString()); },766); },[]);return(<div><section style={{padding:"5px"}}><img  src={pp?dragon[pp]:d1.toString()} alt="dragon" /></section><button onClick={()=>dp(upfx())}>👍👍</button><span>Cart-quantity counter : <u>{sp}</u></span><button onClick={()=>{dp(downfx());}}>👎👎</button></div>);}


export default Spriter;
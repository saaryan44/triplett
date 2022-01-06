let i=2500;
const counterfx=(a=i,b)=>{switch(b.type){case "up":return (a+25); case "down" :return (a-17); default:return (a-2);};};
export default counterfx;
const x=require('express'); const y=x(); y.use(x.json()); const z=require('mongoose'); /*const dotenv=require('dotenv'); dotenv.config();*/ const bcryptjs=require('bcryptjs');y.use(x.static("./build"));
const port=process.env.PORT || 8000;
/*z.connect(process.env.MONGODB_URI,{useNewUrlParser:true}).then(e=>console.log("database access")).catch(f=>console.log('error in database access'));*/
z.connect("mongodb+srv://resume:forResume@cluster0.yj1rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true}).then(e=>console.log("database access")).catch(f=>console.log('error in database access'));

const mx=new z.Schema({name:{type:String,required:true},password:{type:String,required:true},email:{type:String,required:true}}); mx.pre('save',async function(r){if(this.isModified('password')){this.password=await bcryptjs.hash(this.password,13);}r();}); const collection1=z.model('user',mx);


y.post('/register',async (a,b)=>{const {name,email,password}=a.body; console.log(a.body);if(!name || !email || !password){b.status(400).json({ok:false,message:"One or more of the fields is empty."});} if(name && name.length<4){b.status(400).json({ok:false,message:"Name must be at least 4 characters long."});} const u=new collection1({name,email,password}); await u.save(); b.status(201).json({ok:true,message:"Registered succesfully."});});

y.post('/login',async (a,b)=>{const {email,password}=a.body; const u=await collection1.findOne({email:email}); if(!u){b.status(400).json({ok:false,message:"Error in email or password."});} const yy=await bcryptjs.compare(password,u.password);if(!yy){b.status(400).json({ok:false,message:'Error in email or password.'});}else{b.status(201).json({ok:true,message:`Hi there, ${u.name}. You have logged in successfully.`});} });


y.listen(port,()=>console.log(`Server running on port ${port}.`));



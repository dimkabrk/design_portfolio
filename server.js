const express=require('express');const path=require('path');const app=express();const PORT=process.env.PORT||3000;
app.use('/public',express.static(path.join(__dirname,'public')));app.use(express.static(__dirname));
app.get('*',(req,res)=>{res.sendFile(path.resolve(__dirname,'index.html')),(err)=>{if(err)res.status(500).send('Missing index.html')}});
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);});

export let fhsBaseUrl:string
//this is the only env we get in front end, and technically anyone that downloads the site can read it 
if(process.env['NODE_ENV'] === 'production'){
    //if we ran npm run build
    //use the deployed address
    fhsBaseUrl = 'http://34.86.143.125:2020'
}else {
    //we are in test or dev, use the local address
    fhsBaseUrl = 'http://localhost:2020'
}
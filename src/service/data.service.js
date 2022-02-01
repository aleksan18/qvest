export const data=()=> fetch('tasks.json',{
    headers:{
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response=>  response.json()).then(json =>{
    return json;
  })
  .catch((e)=>{throw e});
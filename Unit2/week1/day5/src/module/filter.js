function findel(arr,id){
    let val=arr.find(el=> el.id==id)
   return val?val:'No movie exists with this id';
  }
module.exports={findel};
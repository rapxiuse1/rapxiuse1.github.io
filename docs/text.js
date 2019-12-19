fetch('http://blog.csdn.net/')
.then(response => {
  console.log(response)
  return fetch('https://juejin.im/')
})
.then(response => {
  console.log(response)
})
.catch(error => {
  console.log(error)
})

async function foo(){
  try{
    let response1 = await fetch('http://blog.csdn.net/')
    let response2 = await fetch('http://juejin.im/')
  }catch(err){
    console.log(err)
  }
}
foo()
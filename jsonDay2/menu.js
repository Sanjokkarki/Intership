fetch(`./menu.json`)
.then(res =>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    const newdata= data.menu;
    console.log(newdata);
    let rows="";

    newdata.forEach((menu) =>{
       rows +=`<div class="card text-center " style="width: 18rem;">
       <img src=${menu.image} class="card-img-top" alt="..." height="220px">
       <div class="card-body">
         <h5 class="card-title">${menu.name}</h5>
         <p class="card-text">${menu.description}</p>
         <a href="#" class="btn btn-primary   ">${menu.price}</a>
       </div>
       </div>`
});
document .getElementById("menu").innerHTML = rows;
})
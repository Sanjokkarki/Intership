fetch('https://dummyjson.com/recipes')
.then(res =>{
   return res.json();

})
.then((data)=>{
    console.log(data.recipes);
    const newdata= data.recipes;
    let rows="";
newdata.forEach((recipes) => {
    rows +=`<div class="card" style="width: 18rem;">
    <img src="${recipes.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${recipes.name}</h5>
      
      <p class="card-text">${recipes.ingredients}</p><br>
      <p class="card-text">${recipes.instructions}</p>
    </div>
  </div>` 
});
document.getElementById("foodrecipe").innerHTML = rows;

})
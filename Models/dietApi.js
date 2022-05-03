const axios = require("axios");
let controller = require("../Controllers/exerciseController");

const recipeOptions = {
  method: 'GET',
  url: 'https://cooking-recipe2.p.rapidapi.com/category',
  headers: {
    'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com',
    'X-RapidAPI-Key': 'df32b0ac43msh8e0a5708c9fd453p10bb2djsn6253ed233123'
  }
};
module.exports = {
  recipeCategory: async (req, res, next)=>{
      axios.request(recipeOptions).then(function (response) {
        //console.log(response.data)
        return response.data
      })
      .then(data=>{
        console.log(data)
        //data.push({"type":"recipeCategory"})
        let type = "recipeCategory"
        controller.GetData(data, type)
    })
},
recipe: function (category) {
  //console.log(category)
  let newCategory = category.split(" ")
  console.log(newCategory)

  
  const options = {
    method: 'GET',
    url : "https://cooking-recipe2.p.rapidapi.com/getbycat/",

    headers: {
      'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com',
      'X-RapidAPI-Key': 'df32b0ac43msh8e0a5708c9fd453p10bb2djsn6253ed233123'
    }
  };
  newCategory.forEach(category=>{
    options.url += category+" "
  })
  axios.request(options).then(function (response) {
    return response.data
  })
  .then(data=>{
    console.log("working")
    console.log(data)
    let type = "choosenRecipe"
        controller.GetData(data, type)
})
  .catch(function (error) {
    console.error(error);
  });
  
}

}

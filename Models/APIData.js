const axios = require("axios");
let controller = require("../Controllers/exerciseController");

const listTargetMuscleOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'df32b0ac43msh8e0a5708c9fd453p10bb2djsn6253ed233123'
  }
};
const listByTargetMuscleOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/quads',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'df32b0ac43msh8e0a5708c9fd453p10bb2djsn6253ed233123'
    }
  };
  const listAllExercisesOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'df32b0ac43msh8e0a5708c9fd453p10bb2djsn6253ed233123'
    }
  };
  const nameOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/name/%7Bname%7D',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'df32b0ac43msh8e0a5708c9fd453p10bb2djsn6253ed233123'
    }
  };
module.exports = {
    listTargetMuscles: async (req, res, next)=>{
        try{
            axios.request(listTargetMuscleOptions).then(function (response) {
                return response.data
            })
            .then(data=>{
                const obj =Object.assign({"type":"listTargetMuscles"}, data)
                
                controller.GetData(obj)
            })
            .catch(function (error) {
                console.error(error);
            }); 
        }
        catch(error){
            console.log(error.message)
        }
    },
    listByTargetMuscle: async (req, res, next)=>{
        axios.request(listByTargetMuscleOptions).then(function (response) {
            return response.data
        })
        .then(data=>{
            const obj =Object.assign({"type":"listByTargetMuscle"}, data)
            controller.GetData(obj)
        })
        .catch(function (error) {
            console.error(error);
        });
    },
    listAllExercises: async (req, res, next)=>{
        axios.request(listAllExercisesOptions).then(function (response) {
            return response.data
        })
        .then(data=>{
            const obj =Object.assign({"type":"listAllExercises"}, data)
            controller.GetData(obj)
        })
        .catch(function (error) {
            console.error(error);
        });
    },
    listName: async (req, res, next)=>{
        axios.request(nameOptions).then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    },
    exerciseById: function (id) {
        console.log(id)
        const idOptions = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/exercise/'+id,
            headers: {
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
              'X-RapidAPI-Key': 'df32b0ac43msh8e0a5708c9fd453p10bb2djsn6253ed233123'
            }
          };
          axios.request(idOptions).then(function (response) {
            return response.data
        })
        .then(data=>{
            const obj =Object.assign({"type":"userExercise"}, data)
            controller.GetData(obj)
        })
        .catch(function (error) {
            console.error(error);
        });
    }
}

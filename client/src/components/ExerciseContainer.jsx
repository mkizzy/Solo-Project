import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import '../styles/ExerciseContainer.scss';
import '../styles/ExerciseList.scss';
import ExerciseListContainer from './ExerciseListContainer.jsx';

function ExerciseContainer() {
    const [getbodyPart, setGetBodyPart] = useState('');
    const [results, setResults] = useState([]);
    const [resultsLength, setResultsLength] = useState(0);
    const [exercises, setExercises] = useState([]);
    //state and setState pairs
    //call setState to change set, state is data

    function getResponse() {
         const options = {
          method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'adca40e815mshf9130fd1fe9c44ap1ec9e3jsna820d8d266b7',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        .then(response => response.json())
            .then(response => {
                setResults(response)
                setResultsLength(response.length)
            })
        .catch(err => console.error(err));  
    }

    useEffect(() => getResponse(), []);

    function bodyPartFunction() {
        /*
        const options = {
          method: 'GET',
            headers: {
                'X-RapidAPI-Key': '163751e3c9msh311d311d6cff99bp117418jsn304c728dd887',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        .then(response => response.json())
            .then(response => {
                let result = [];
                let count = 0;
                for (const arr in response) {
                    
                    //gets first 5 exercises pertaining to 5 bodyparts and saves to result state
                    if (response[arr].bodyPart === getbodyPart) {
                        console.log(response[arr])
                        result.push(response[arr])
                        count++
                    }
                    
                    if (count == 5) {
                        //save result from promise chain to results state
                        setResultsLength(result.length)
                        setResults(result)
                        break;
                    }
                }
            })
         */
     
        //.catch(err => console.error(err));
    
        let temp_exercises = [];
        let count = 0;
        for (let i = 0; i < resultsLength; i++) {
            if (results[i].bodyPart === getbodyPart) {
                temp_exercises.push(results[i])
                count++;
            }
            
            if (count == 5){
                setExercises(temp_exercises);
                break;
            }
        }
    }
    
    function renderResults() {
        let temp = [];
        console.log("Exercises Length: ", exercises.length);
        for (let i = 0; i < exercises.length; i++){
          temp.push(<ExerciseListContainer name={exercises[i].name}/>)
        }
      return temp;
    }
    
  return (
    <div className='exerciseheadercontainer'>
      <span className='exercisecontainerheader'>Anabolic Generator</span>
    <div className='exercisecontainer'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/220px-Arnold_Schwarzenegger_1974.jpg" className='arnold'></img>
      <div className='buttoncontainer'>
        <button className='exercisebutton' type='button' onClick={() => {bodyPartFunction(); setGetBodyPart('chest');}}>Big Ol Chest</button>
        <button className='exercisebutton' type='button' onClick={() => {bodyPartFunction(); setGetBodyPart('back');}}>Thicc Back</button>
        <button className='exercisebutton' type='button' onClick={() => {bodyPartFunction(); setGetBodyPart('shoulders');}}>Juicy Shoulders</button>
        <button className='exercisebutton' type='button' onClick={() => {bodyPartFunction(); setGetBodyPart('upper legs');}}>Atomic Legs</button>
        <button className='exercisebutton' type='button' onClick={() => {bodyPartFunction(); setGetBodyPart('cardio');}}>Heart Racing Cardio</button>
        </div>
          </div>
        <div className='exerciselist'>
          {renderResults()}
        </div>
    </div>
  )
}

export default ExerciseContainer;

//overwriting render by misplacing div with classname of exerciselist in exerciselistcontainer
//wanted to show 5 exercises, but was only showing one, however it was just being overwrited
//5 pieces of paper stacked, only saw the one on top aka the last exercise
//want to implement hovering over exercises showing equipment, will have to useState for equipment

/*
The bodyPart STATE is only able to be equal to "chest", "back", "shoulders, "upper legs", "cardio"

but the bodyPart KEY is always equal to "bodyPart"
*/


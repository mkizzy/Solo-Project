import React, { Component, useState } from 'react';
import { render } from 'react-dom';

function ExerciseListContainer(props){
  return(
    <div>
          <li>Exercise: {props.name}</li>
    </div>
  )
};

export default ExerciseListContainer;
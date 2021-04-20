import React from 'react';
import { Container } from './App.styles';
import music from './music.json';
import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
text-align: center;
`
const Track = styled.div`
border: solid black;
margin: 2% 30% 2% 30%;
background: #f3efec;
 `

const App = () => {
  const [input, setInput] = useState('')
  const [value, setValue] = useState('')

  const debounceSetValue = useCallback(debounce(
    setValue,
    3000),[])


  const updateSearch = (e) => {
    setInput(e.target.value)
    debounceSetValue(e.target.value)
  }

  return (
    <Wrapper>
      <h1>Music Search</h1>
      <input type='text' placeholder='search' value={input} name='search' onChange={updateSearch} ></input>
      {music.map((song) => {
        return song.title.includes(value) || song.artist.includes(value) || song.year.toString().includes(value) || song.genres.includes(value) ?
          <Track>
            <h2>Artist: {song.artist}</h2>
            <p>Title: {song.title}</p>
            <p>Release: {song.year}</p>
            {song.genres.map((genre) => {
              return <p>{genre}</p>
            })}


          </Track>
          : null
      })}
    </Wrapper>
  );
};

export default App;

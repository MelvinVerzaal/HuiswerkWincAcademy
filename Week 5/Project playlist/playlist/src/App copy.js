import React, { Component } from 'react';
import SongForm from './SongForm';
import SongList from './SongList';
import './App.css';
class SongOverview extends Component {
      
  constructor() {
    super()
    this.state = 
    {
      songs: {
        name:'somting'
      }
    }
    
  }

  addSong = (song) => {
      // doe iets om de state aan te passen
  }

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong}/>
        <SongList songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongOverview;

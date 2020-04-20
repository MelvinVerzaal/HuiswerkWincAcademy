import React, { Component } from 'react';
//import SongListItem from './SongListItem';


class SongList extends Component {
  
    render() {
      return (
        <div>
            <table className='ListTabel'>
                <tr className="song-header">  
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                    <th></th>
                </tr>

                <tr className="song-header">  
                    <th className="song-row__item">{this.props.songs.id}</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                    <th></th>
                </tr>    
         


               
            </table>
        </div>
      );
    }
}
  
  
  export default SongList;
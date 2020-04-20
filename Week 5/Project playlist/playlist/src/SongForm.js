import React, { Component } from 'react';



class SongForm extends Component {
       
  
    render() {
      return (
        <div>
        <table className='AddFormTabel'>
            <tr className="song-header">  
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
              <th></th>
            </tr>
            <tr className="song-input">  
              <th><input /></th>
              <th><input /></th>
                <th>
                    <select>
                        <option>Pop</option>
                        <option>Rock</option>
                        <option>Indi</option>
                    </select>
                </th>
                <th>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </th>
              <th><button>Versturen</button></th>
            </tr>
        </table>
        </div>
      );
    }
}
  
  
  export default SongForm;
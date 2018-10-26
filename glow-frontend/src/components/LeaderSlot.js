import React, { Component } from 'react';
import '../App.css'

const LeaderSlot = (props) => {
  const emojis = [
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450331/gem-stone_1f48e.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450288/table-tennis-paddle-and-ball_1f3d3.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450248/dragon-face_1f432.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450237/comet_2604.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450224/trophy_1f3c6.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450207/glowing-star_1f31f.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450193/running-shirt-with-sash_1f3bd.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450179/heavy-black-heart_2764.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450155/fire_1f525.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450133/smiling-face-with-horns_1f608.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450116/white-heavy-check-mark_2705.png",
    "https://res.cloudinary.com/kos2kos/image/upload/v1540450084/bomb_1f4a3.png",
  ]
  {
    return(
      <tr style={{"width": "500px"}}>
        <td>
          <h4 class="ui image header">
            <img src={emojis[Math.floor(Math.random() * Math.floor(emojis.length - 1))]} class="ui small rounded image"/>

            <div class="content">
              <h1>{props.player}</h1>
              <div class="sub header">Glowlete

            </div>
          </div>

        </h4>
      </td>

      </tr>
    )
  }
}

export default LeaderSlot

import React from 'react'
import './StarRating.css'

function StarRating() {
  return (
<form>
  <p class="clasificacion">
    <input id="radio1" type="radio" name="estrellas" value="5" />
    <label for="radio1">★</label>
    <input id="radio2" type="radio" name="estrellas" value="4" />
    <label for="radio2">★</label>
    <input id="radio3" type="radio" name="estrellas" value="3" />
    <label for="radio3">★</label>
    <input id="radio4" type="radio" name="estrellas" value="2" />
    <label for="radio4">★</label>
    <input id="radio5" type="radio" name="estrellas" value="1" />
    <label for="radio5">★</label>
  </p>
</form>
  );
}

export default StarRating
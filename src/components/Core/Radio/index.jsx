import React from 'react';
import 'App.css';

function Radio() {
  return (
    <div className='stack-y-l m-bw-y-md'>
      <label class="radio radio-input-label text-xs">
        <input type="radio" name="size" />
        <span class="radio-content"></span>
        <span class="radio-label">
          Everything
        </span>
      </label>
      <label class="radio radio-input-label text-xs">
        <input type="radio" name="size" />
        <span class="radio-content"></span>
        <span class="radio-label">
        Same as email
        </span>
      </label>
      <label class="radio radio-input-label text-xs">
        <input type="radio" name="size" />
        <span class="radio-content"></span>
        <span class="radio-label">
        No push notifications
        </span>
      </label>
    </div>
  );
}

export default Radio;
import React from 'react';
import 'App.css';

function PhotoUpload() {
  return (
    <div>
      <input type="file" name="cover-photo" id="cover_photo" className="hidden" />
      <label for="cover_photo" className="stack-y-c p-5xl bg-color-primary-alpha-1@hover border border-style-dotted border-width-2 border-color-black-alpha-1 border-color-primary@hover radius-sm transition">
        <span>
          <i className="iconoir-media-image h1 color-primary"></i>
        </span>
        <p className="m-t-lg text-center text-xs">
          <a href="1">
            <span className="text-sm color-primary">Upload a file</span> or drag and drop<br />
            PNG, JPG, GIF up to 10MB
          </a>
        </p>
      </label>
    </div>
  );
}

export default PhotoUpload;
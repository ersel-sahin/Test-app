import React from 'react';
import 'App.css';

function CheckBox() {
  return (
    <div className='m-bw-y-md'>
      <div className="stack-x-tl">
        <label className="checkbox checkbox-input-label text-xs">
          <input type="checkbox" name="size" />
           <span className="checkbox-content"></span>
        </label>
        <div className="p-l-sm">
          <div>
            Comments
          </div>
          <div className="text-sm color-black-alpha-3">
            Get notified when someones posts a comment on a posting.
          </div>
        </div>
      </div>
      <div className="stack-x-tl">
        <label className="checkbox checkbox-input-label text-xs">
          <input type="checkbox" name="size" />
           <span className="checkbox-content"></span>
        </label>
        <div className="p-l-sm">
          <div>
            Candidates
          </div>
          <div className="text-sm color-black-alpha-3">
            Get notified when a candidate applies for a job.
          </div>
        </div>
      </div>
      <div className="stack-x-tl">
        <label className="checkbox checkbox-input-label text-xs">
          <input type="checkbox" name="size" />
           <span className="checkbox-content"></span>
        </label>
        <div className="p-l-sm">
          <div>
            Offers
          </div>
          <div className="text-sm color-black-alpha-3">
            Get notified when a candidate accepts or rejects an offer.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
import React from 'react';
import 'App.css';

function CheckBox() {
  return (
    <div className='col-12 col-8@md m-bw-y-lg'>
      <div className="stack-x-l">
          <label className="checkbox checkbox-input-label">
            <input type="checkbox" name="size" />
             <span className="checkbox-content"></span>
             <div className="p-l-sm">
              <div>
                Comments
              </div>
              <div className="text-sm color-black-alpha-3">
                Get notified when someones posts a comment on a posting.
              </div>
            </div>
          </label>
      </div>
      <div className="stack-x-l">
          <label className="checkbox checkbox-input-label">
            <input type="checkbox" name="size" />
            <span className="checkbox-content"></span>
              <div className="p-l-sm">
              <div>
                Comments
              </div>
              <div className="text-sm color-black-alpha-3">
                Get notified when someones posts a comment on a posting.
              </div>
            </div>
          </label>
      </div>
      <div className="stack-x-l">
          <label className="checkbox checkbox-input-label">
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
    </div>
  );
}

export default CheckBox;
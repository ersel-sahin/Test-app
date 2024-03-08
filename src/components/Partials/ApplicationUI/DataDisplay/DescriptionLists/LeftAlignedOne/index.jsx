import React from 'react';

import 'App.css';

function LabelGroupInput ({
  value,
  readOnly,
})
{
  return (
    <input
      className="input"
      defaultValue={value}
      style={readOnly ? {
        paddingLeft: '0',
        paddingRight: '0',
        border: 'none',
        background: 'transparent',
      } : {}}
      readOnly={readOnly}
    />
  )
}

function LabelGroupTextarea ({
  value,
  readOnly,
})
{
  return (
    <textarea
      className="input"
      style={readOnly ? {
        paddingLeft: '0',
        paddingRight: '0',
        border: 'none',
        background: 'transparent',
        resize: 'none',
      } : {}}
      readOnly={readOnly}
    >
      {value}
    </textarea>
  )
}

function LabelGroupFiles ({
  value,
})
{
  return (
    <div className="p-y-md border border-color-black-alpha-1 radius-md">
      {value.map((item, index) => (
        <>
          <div className="stack-x-j p-x-md">
            <div className="stack-x-l m-bw-x-sm">
              <i className="icon iconoir-paste-clipboard text-xl"></i>
              <div className="font-weight-bold">
                {item.title}
              </div>
              <div className="mute-75">
                {item.size}
              </div>
            </div>
            <div className="stack-x-r">
              <a href={item.downloadUrl} className="button button-style-link">
                Download
              </a>
            </div>
          </div>
          {index + 1 < value.length && (
            <hr />
          )}
        </>
      ))}
    </div>
  )
}

function LabelGroup ({
  type,
  label,
  value,
  readOnly,
}) 
{
  return (
    <div className="row">
      <div className="col-12 col-4@md">
        <span className="input-col-label">
          {label}
        </span>
      </div>
      <div className="col-12 col-8@md">
        {type === 'input' && (
          <LabelGroupInput
            value={value}
            readOnly={readOnly}
          />
        )}
        {type === 'textarea' && (
          <LabelGroupTextarea
            value={value}
            readOnly={readOnly}
          />
        )}
        {type === 'files' && (
          <LabelGroupFiles
            value={value}
          />
        )}
      </div>
    </div>
  )
}

function LeftAlignedOne () {
  const [isEditMode, setEditMode] = React.useState(false);

  const items = [
    {
      type: 'input',
      label: 'Full Name',
      value: 'Margot Robbie',
    },
    {
      type: 'input',
      label: 'Application for',
      value: 'Backend Developer',
    },
    {
      type: 'input',
      label: 'Email address',
      value: 'margotfoster@example.come',
    },
    {
      type: 'input',
      label: 'Salary expectation',
      value: '$120,000',
    },
    {
      type: 'textarea',
      label: 'Attachments',
      value: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
    },
    {
      type: 'files',
      label: 'Attachments',
      value: [
        {
          title: 'resume_back_end_developer.pdf',
          size: '2.4mb',
          downloadUrl: '#',
        },
        {
          title: 'cover_letter.pdf',
          size: '1.6mb',
          downloadUrl: '#',
        },
      ],
    },
  ]

  return (
    <section className="m-y-5xl">
      <div className="wrap-mini m-bw-y-xl">
        <div className="stack-x-j">
          <div className="m-bw-y-xs">
            <div className="h6 font-weight-bold">
              Applicant Information
            </div>
            <div className="letter-spacing-sm mute-75">
              Personal details and application. 
            </div>
          </div>
          <div>
            {!isEditMode && (
              <button
                className="button"
                onClick={() => setEditMode(true)}
              >
                Edit
              </button>
            )}
            {isEditMode && (
              <div className="stack-x-l m-bw-x-md">
                <button
                  className="button button-style-link"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
                <button
                  className="button"
                  onClick={() => setEditMode(false)}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <hr className="m-y-none bg-color-black-alpha-1" />
          {items.map((item, index) => (
            <>
              <div className={`p-md ${((index + 1) %2) ? 'bg-color-gray-alpha-1' : ''}`}>
                <LabelGroup
                  type={item.type}
                  label={item.label}
                  value={item.value}
                  readOnly={isEditMode ? false : true}
                />
              </div>
              {index + 1 < items.length && ( // Tekrar eden kullanım index üzerinden hesaplanır
                <hr className="m-y-none bg-color-black-alpha-1" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeftAlignedOne;
import React from 'react';

import 'App.css';

function LabelGroupInput ({
  value,
})
{
  return (
    <input className="input" defaultValue={value} />
  )
}

function LabelGroupText ({
  value,
})
{
  return (
    <div className="input-col-label">
      <div className="stack-x-j">
        {value}
      </div>
    </div>
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
  valuePrefix,
  valueSuffix,
  valueIsPassword,
})
{
  return (
    <div className="row">
      <div className="col-12 col-4@md">
        <div className="input-col-label font-weight-bold">
          {label}
        </div>
      </div>
      <div className="col-12 col-8@md">
        {type === 'text' && (
          <LabelGroupText
            value={value}
            valuePrefix={valuePrefix}
            valueSuffix={valueSuffix}
            valueIsPassword={valueIsPassword}
          />
        )}
        {type === 'files' && (
          <LabelGroupFiles
            value={value}
          />
        )}
        {type === 'input' && (
          <LabelGroupInput
            value={value}
          />
        )}
      </div>
    </div>
  )
}

function LeftAligned () {
  const items = [
    {
      type: 'input',
      label: 'Full Name',
      value: 'Margot Foster',
    },
    {
      type: 'input',
      label: 'Email',
      value: 'margot@example.com',
    },
    {
      type: 'text',
      label: 'Application for',
      value: 'Backend Developer',
    },
    {
      type: 'text',
      label: 'Salary expectation',
      value: '$120,000',
    },
    {
      type: 'text',
      label: 'Password',
      value: '••••••',
      valueIsPassword: true,
    },
    {
      type: 'text',
      label: 'About',
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
        {
          title: 'resume_back_end_developer.pdf',
          size: '2.4mb',
          downloadUrl: '#',
        },
      ],
    },
  ];

  return (
    <section className="m-y-5xl">
      <div className="wrap-mini">
        <div className="stack-y-l m-bw-y-sm">
          <div className="h6 font-weight-bold">
            Applicant Information
          </div>
          <div className="letter-spacing-sm mute-75">
            Personal details and application. 
          </div>
        </div>
        <div className="space-3xl"></div>
        {items.map((item, index) => (
          <>
            <LabelGroup
              type={item.type}
              label={item.label}
              value={item.value}
              valuePrefix={item.valuePrefix}
              valueSuffix={item.valueSuffix}
              valueIsPassword={item.valueIsPassword}
            />
            {index + 1 < items.length && (
              <hr />
            )}
          </>
        ))}
      </div>
    </section>
  )
}

export default LeftAligned;
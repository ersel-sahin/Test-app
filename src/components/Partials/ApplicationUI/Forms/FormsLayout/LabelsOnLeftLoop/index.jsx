import React from 'react';

import 'App.css';

function LabelTitle ({
  desc,
  title,
  className,
})
{
  return (
    <div className={`${className}`}>
      <div className="h6 font-weight-bold">
        {title}
      </div>
      <div className="letter-spacing-xs mute-75">
        {desc}
      </div>
    </div>
  )
}
function LabelInput ({
  value,
  label,
  htmlFor,
  placeholder,
  id,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
      <div className={`${labelClassName}`}>
        <label htmlFor={htmlFor} className="input-col-label font-weight-bold">
          {label}
        </label>
      </div>
      <div className={`${inputClassName}`}>
        <input 
          className="input"
          id={id}
          placeholder={placeholder}
          defaultValue={value} 
        />
      </div>
    </>
    )
}
function LabelTextarea ({
  label,
  htmlFor,
  value,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
      <div className={`${labelClassName}`}>
        <label htmlFor={htmlFor} className="input-col-label font-weight-bold">
          {label}
        </label>
      </div>
      <div className={`${inputClassName}`}>
        <textarea name="message" id="about" className="input input-line-5"></textarea>
        <div className="input-helper mute-75">
          {value}
        </div>
      </div>
    </>
  )
}
function LabelPhoto ({
  value,
  label,
  htmlFor,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
      <div className={`${labelClassName}`}>
        <label htmlFor={htmlFor} className="input-col-label font-weight-bold">
          {label}
        </label>
      </div>
      <div className={`${inputClassName}`}>
        <input type="file" name="cover-photo" id="photo" className="hidden" />
        <label for="photo" className="stack-x-l m-bw-x-md">
          <span className="stack-x-c p-md text-xl color-white bg-color-gray radius-full">
            <i className="h5 iconoir-user"></i>
          </span>
          <span className="button button-size-sm button-style-outline button-color-gray">
            {value}
          </span>
        </label>
      </div>
    </>
  )
}
function LabelCoverPhoto ({
  label,
  htmlFor,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
      <div className={`${labelClassName}`}>
        <label htmlFor={htmlFor} className="input-col-label font-weight-bold">
          {label}
        </label>
      </div>
      <div className={`${inputClassName}`}>
        <input type="file" name="cover-photo" id="coverphoto" className="hidden" />
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
    </>
  )
}
function LabelSelect ({
  label,
  htmlFor,
  children1,
  children2,
  children3,
  children4,
  children5,
  children6,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
      <div className={`${labelClassName}`}>
        <label htmlFor={htmlFor} className="input-col-label font-weight-bold">
          {label}
        </label>
      </div>
      <div className={`${inputClassName}`}>
        <div class="input-wrap">
          <select name="category" class="input">
            <option value="sss">{children1}</option>
            <option value="">{children2}</option>
            <option value="">{children3}</option>
            <option value="">{children4}</option>
            <option value="">{children5}</option>
            <option value="">{children6}</option>
          </select>
          <div class="input-wrap-content">
              <i class="icon iconoir-nav-arrow-down"></i>
          </div>
        </div>
      </div>
    </>
  )
}
function LabelCheckBox ({
  label,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
      <div className={`${labelClassName}`}>
        <label className="input-col-label font-weight-bold">
          {label}
        </label>
      </div>
        <div className={`${inputClassName}`}>
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
      </div>
    </>
  )
}
function LabelRadio ({
  label,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
      <div className={`${labelClassName}`}>
        <label className="input-col-label font-weight-bold">
          {label}
        </label>
      </div>
      <div className={`${inputClassName}`}>
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
      </div>
    </>
  )
}
function LabelButton ({
  button,
  button1,
  className,
})
{
  return (
    <div className={`${className} m-bw-x-sm`}>
      <a href="javascript:;" className="button button-style-plain">
        {button1}
      </a>
      <a href="javascript:;" className="button">
        {button}
      </a>
    </div>
  )
}
function LabelGroup ({
  type,
  title,
  label,
  value,
  desc,
  placeholder,
  id,
  htmlFor,
  button,
  button1,
  children1,
  children2,
  children3,
  children4,
  children5,
  children6,
  className,
  labelClassName,
  inputClassName,
})
{
  return (
    <>
        {type === 'title' && (
          <LabelTitle
            title={title}
            desc={desc}
            className={className}
          />
        )}
        {type === 'input' && (
          <LabelInput
            label={label}
            htmlFor={htmlFor}
            id={id}
            placeholder={placeholder}
            labelClassName={labelClassName}
            inputClassName={inputClassName}
          />
        )}
        {type === 'textarea' && (
          <LabelTextarea
            label={label}
            htmlFor={htmlFor}
            id={id}
            value={value}
            labelClassName={labelClassName}
            inputClassName={inputClassName}
          />
        )}
        {type === 'photo' && (
          <LabelPhoto
            label={label}
            htmlFor={htmlFor}
            id={id}
            value={value}
            labelClassName={labelClassName}
            inputClassName={inputClassName}
          />
        )}
        {type === 'coverphoto' && (
          <LabelCoverPhoto 
            label={label}
            htmlFor={htmlFor}
            id={id}
            labelClassName={labelClassName}
            inputClassName={inputClassName}
          />
        )}
        {type === 'select' && (
          <LabelSelect
          label={label}
          htmlFor={htmlFor}
          id={id}
          children1={children1}
          children2={children2}
          children3={children3}
          children4={children4}
          children5={children5}
          children6={children6}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          />
        )}
        {type === 'checkbox' && (
          <LabelCheckBox 
          label={label}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          />
        )}
        {type === 'radio' && (
          <LabelRadio 
          label={label}
          labelClassName={labelClassName}
          inputClassName={inputClassName}
          />
        )}
        {type === 'button' && (
          <LabelButton 
            button={button}
            button1={button1}
            className={className}
          />
        )}
    </>
  )
}
function LabelsOnLeftLoop () {
  const items = [
    {
      type: 'title',
      title: 'Profile',
      desc:'This information will be displayed publicly so be careful what you share.',
      className: 'col-12',
    },
    {
      type: 'input',
      label: 'Username',
      id: 'username',
      htmlFor:'username',
      placeholder: 'Toom Cook',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'textarea',
      label: 'About',
      id: 'about',
      htmlFor:'about',
      value: 'We are a team of passionate utting-edge digital experiences.',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-8@md',
    },
    {
      type: 'photo',
      label: 'Photo',
      id: 'photo',
      htmlFor:'photo',
      value: 'Change',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-8@md',
    }
    ,
    {
      type: 'coverphoto',
      label: 'Cover photo',
      id: 'coverphoto',
      htmlFor:'coverphoto',
      value: 'Change',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-8@md',
    },
    {
      type: 'title',
      title: 'Personal Information',
      desc:'Use a permanent address where you can receive mail.',
      className: 'col-12',
    },
    {
      type: 'input',
      label: 'First Name',
      id: 'firstlabel',
      htmlFor:'firstlabel',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'input',
      label: 'Last Name',
      id: 'lastlabel',
      htmlFor: 'lastlabel',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'input',
      label: 'Email address',
      id: 'emailaddress',
      htmlFor: 'emailaddress',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'select',
      label: 'Country',
      id: 'country',
      htmlFor: 'country',
      children1: 'Turkey',
      children2: 'Canada',
      children3: 'ABD',
      children4: 'Kuba',
      children5: 'Canada',
      children6: 'Canada',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'input',
      label: 'Street address',
      id: 'streetaddress',
      htmlFor: 'streetaddress',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-8@md',
    },
    {
      type: 'input',
      label: 'State / Province',
      id: 'state',
      htmlFor: 'state',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'input',
      label: 'City',
      id: 'city',
      htmlFor: 'city',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'input',
      label: 'ZIP / Postal code',
      id: 'zip',
      htmlFor: 'zip',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-6@md',
    },
    {
      type: 'title',
      title: 'Notifications',
      desc:'Well always let you know about important changes, but you pick what else you want to hear about.',
      className: 'col-12',
    },
    {
      type: 'checkbox',
      label: 'By Email',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-8@md',
    },
    {
      type: 'radio',
      label: 'By Email',
      labelClassName: 'col-12 col-4@md',
      inputClassName: 'col-12 col-8@md',
    },
    {
      type: 'button',
      button: 'Cancel',
      button1: 'Save',
      className: 'stack-x-r col-12',
    }
  ];
  return (
    <section className="m-y-5xl">
      <div className="wrap-mini">
        <div className="row row-gap-xl@md">
          {items.map((item, index) => (
            <>
              <LabelGroup
                type={item.type}
                title={item.title}
                label={item.label}
                value={item.value}
                desc={item.desc}
                placeholder={item.placeholder}
                id={item.id}
                htmlFor={item.htmlFor}
                button={item.button}
                button1={item.button1}
                children1={item.children1}
                children2={item.children2}
                children3={item.children3}
                children4={item.children4}
                children5={item.children5}
                children6={item.children6}
                className={item.className}
                labelClassName={item.labelClassName}
                inputClassName={item.inputClassName}
              />
              {index !== items.length - 1 && (
                <div className="w-100 m-y-sm" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
export default LabelsOnLeftLoop;
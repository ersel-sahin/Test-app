import React from 'react';

import 'App.css';

function WithAvatarTitle ({
  img,
  name,
  email,
  buttonPhone,
  buttonEmail,
  iconPhone,
  iconEmail,
}) 

{
  return (
    <div className="stack-y-l m-bw-y-lg m-bw-y-none@md stack-x-j@md">
      <div className="stack-x-l m-bw-x-lg">
        <div className="w-20">
          <img src={img} className="radius-full"/>
        </div>
        <div className="stack-y-l">
          <a href="javascirpt:;">
            <strong>
              {name}
            </strong>
            <div className="mute-75">
              {email}
            </div>
          </a>
        </div>
      </div>
      <div className="stack-x-r m-bw-x-md">
        <a href="javascript:;" className="button button-style-outline button-color-gray">
          <i className={`p-r-sm icon iconoir-${iconPhone}`}></i>
          <strong className="color-black">
            {buttonPhone}
          </strong>
        </a>
        <a href="javascript:;" className="button button-style-outline button-color-gray">
          <i className={`p-r-sm icon iconoir-${iconEmail}`}></i>
          <strong className="color-black">
            {buttonEmail}
          </strong>
        </a>
      </div>
    </div>
  )
}
function WithAvatarCard ({
  title,
  depeartment,
  badge,
  location,
  locationIcon,
  depeartmentIcon,
}) 
{
  return (
    <a href="javascript:;" className="stack-x-j bg-color-gray@hover">
      <div className="stack-y-l">
        <div className="font-weight-bold color-primary">
          {title}
        </div>
        <div className="h5 m-bw-x-sm">
          <i className={`mute-75 icon iconoir-${depeartmentIcon}`}></i>
          <span className="text-sm mute-75">{depeartment}</span>
        </div>
      </div>
      <div className="stack-y-r">
        <div className="badge text-xs bg-color-green-alpha-1 color-green">
          {badge}
        </div>
        <div className="h5 m-bw-x-sm">
          <i className={`mute-75 icon iconoir-${locationIcon}`}></i>
          <span className="text-sm mute-75">{location}</span>
        </div>
      </div>
    </a>
  )
}
function WithAvatarAndCard ({
  type,
  text,
  index,
  img,
  name,
  email,
  buttonEmail,
  buttonPhone,
  iconPhone,
  iconEmail,
  title,
  depeartment,
  badge,
  location,
  locationIcon,
  depeartmentIcon,
}) 

{
  return (
    <>
      {type === 'avatar' && (
        <WithAvatarTitle
          type={title}
          img={img}
          name={name}
          email={email}
          buttonPhone={buttonPhone}
          buttonEmail={buttonEmail}
          iconPhone={iconPhone}
          iconEmail={iconEmail}
          key={index}
        />
      )}
      {type === 'avatarcard' && (
        <WithAvatarCard
          type={text}
          title={title}
          depeartment={depeartment}
          badge={badge}
          location={location}
          locationIcon={locationIcon}
          depeartmentIcon={depeartmentIcon}
        />
      )}
    </>
  )
}
function WithAvatarAndActions () {
  const items = [
    {
      type: 'avatar',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Tom Cook',
      email: '@tom_cook',
      buttonPhone: 'Phone',
      buttonEmail: 'Email',
      iconPhone: 'phone-outcome',
      iconEmail: 'mail',
    },
    {
      type: 'avatarcard',
      title: 'Back End Developer',
      depeartment: 'Engineering',
      badge: 'Full-time',
      location: 'Remote',
      locationIcon: 'map-pin',
      depeartmentIcon: 'group',
    },
    {
      type: 'avatarcard',
      title: 'Front End Developer',
      depeartment: 'Engineering',
      badge: 'Full-time',
      location: 'Remote',
      locationIcon: 'map-pin',
      depeartmentIcon: 'group',
    },
    {
      type: 'avatarcard',
      title: 'User Interface Desinger',
      depeartment: 'Desing',
      badge: 'Full-time',
      location: 'Remote',
      locationIcon: 'map-pin',
      depeartmentIcon: 'group',
    },
  ]
  return (
    <section className="m-y-2xl">
      <div className="wrap-mini">
        {items.map((item, index) => (
          <>
            <WithAvatarAndCard
              type={item.type}
              title={item.title}
              depeartment={item.depeartment}
              badge={item.badge}
              location={item.location}
              locationIcon={item.locationIcon}
              depeartmentIcon={item.depeartmentIcon}
              img={item.img}
              name={item.name}
              email={item.email}
              buttonPhone={item.buttonPhone}
              buttonEmail={item.buttonEmail}
              iconPhone={item.iconPhone}
              iconEmail={item.iconEmail}
            />
            {index + 5 > items.length && (<hr/>)}
          </>
        ))}
      </div>
    </section>
  )
}
export default WithAvatarAndActions;
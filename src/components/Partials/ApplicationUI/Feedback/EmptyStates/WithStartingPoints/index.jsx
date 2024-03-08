import React from 'react';

import 'App.css';

function BoxText ({
  icon,
  label,
  value,
  icons,
  iconColor,
  boxColor,
  iconBoxColor,
  iconsColor,
  labelColor,
  valueColor,
}) 

{
  return (
    <div className="col-12 col-6@md">
      <div className={`stack-x-l m-bw-x-lg p-md@md border border-color-white radius-md ${boxColor}`}>
        <div className={`h6 p-lg radius-md ${iconBoxColor}`}>
          <i className={`icon iconoir-${icon} ${iconColor}`}/>
        </div>
        <div className="m-bw-y-sm">
          <div className="text-lg m-bw-x-sm">
            <span className={`text-lg m-bw-x-sm font-weight-bold ${labelColor}`}>
              {label}
            </span>
            <i className={`icon iconoir-${icons} ${iconsColor}`}/>
          </div>
          <div className={`text-lg mute ${valueColor}`}>
            {value}
          </div>
        </div>
      </div>
    </div>
  )
}

function WithStartingPoints () {

  const items = [
    { 
      type: 'text',
      icon: 'menu',
      label: 'Create a List',
      value: 'Another to-do system you ll try but eventually give up on.',
      icons: 'arrow-right',
      iconBoxColor: 'bg-color-primary',
      iconColor: 'color-white',
      iconsColor: 'color-primary',
      labelColor: 'color-black',
      valueColor: 'color-black',
      boxColor: 'border-color-yellow-alpha-5@hover bg-color-yellow-alpha-1@hover',
    },
    { 
      type: 'text',
      icon: 'erase',
      label: 'Create a List',
      value: 'Another to-do system you ll try but eventually give up on.',
      icons: 'arrow-right',
      iconBoxColor: 'bg-color-secondary',
      iconColor: 'color-white',
      iconsColor: 'color-secondary',
      labelColor: 'color-black',
      valueColor: 'color-black',
      boxColor: 'border-color-secondary-alpha-5@hover bg-color-secondary-alpha-1@hover',
    },
    { 
      type: 'text',
      icon: 'calendar',
      label: 'Create a List',
      value: 'Another to-do system you ll try but eventually give up on.',
      icons: 'arrow-right',
      iconBoxColor: 'bg-color-green',
      iconColor: 'color-white',
      iconsColor: 'color-green',
      labelColor: 'color-black',
      valueColor: 'color-black',
      boxColor: 'border-color-green-alpha-5@hover bg-color-green-alpha-1@hover',
    },
    { 
      type: 'text',
      icon: 'media-image',
      label: 'Create a List',
      value: 'Another to-do system you ll try but eventually give up on.',
      icons: 'arrow-right',
      iconBoxColor: 'bg-color-yellow',
      iconColor: 'color-white',
      iconsColor: 'color-yellow',
      labelColor: 'color-black',
      valueColor: 'color-black',
      boxColor: 'border-color-yellow-alpha-5@hover bg-color-yellow-alpha-1@hover',
    },
    { 
      type: 'text',
      icon: 'kanban-board',
      label: 'Create a List',
      value: 'Another to-do system you ll try but eventually give up on.',
      icons: 'arrow-right',
      iconBoxColor: 'bg-color-blue',
      iconColor: 'color-white',
      iconsColor: 'color-blue',
      labelColor: 'color-black',
      valueColor: 'color-black',
      boxColor: 'border-color-blue-alpha-5@hover bg-color-blue-alpha-1@hover',
    },
    { 
      type: 'text',
      icon: 'open-in-browser',
      label: 'Create a List',
      value: 'Another to-do system you ll try but eventually give up on.',
      icons: 'arrow-right',
      iconBoxColor: 'bg-color-purple',
      iconColor: 'color-white',
      iconsColor: 'color-purple',
      labelColor: 'color-black',
      valueColor: 'color-black',
      boxColor: 'border-color-purple-alpha-5@hover bg-color-purple-alpha-1@hover',
    },
  ]

  return (
    <section className="m-y-2xl">
      <div className="wrap-mini">
        <div className="stack-y-l m-bw-y-lg">
          <div className="p-x-md@md">
            <div className="h5 font-weight-bold letter-spacing-xs">
              Projects
            </div>
            <div className="mute letter-spacing-xs">
              You haven’t created a project yet. Get started by selecting a template or start from an empty project.
            </div>
          </div>
          <hr className="w-100 m-x-md@md"/>
          <div className="row row-gap-md">
            {items.map((item) => (
              <BoxText 
                icon={item.icon}
                label={item.label}
                icons={item.icons}
                value={item.value}
                iconColor={item.iconColor}
                labelColor={item.labelColor}
                iconsColor={item.iconsColor}
                valueColor={item.valueColor}
                boxColor={item.boxColor}
                iconBoxColor={item.iconBoxColor}
              />
            ))}
          </div>
          <hr className="w-100 m-x-md@md"/>
          <div className="p-x-md@md">
            <a href="javascript:;" className="button button-style-link">
              <span>Or start from an empty project</span>
              <i className="icon iconoir-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithStartingPoints;
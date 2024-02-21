import React from 'react';

import 'App.css';

function Cards ({
  img,
  name,
  description,
  social,
  ...props
})
{
  return (
    <div className="col-12 col-6@md col-4@lg">
      <a href="javascript:;" className="stack-y-c m-bw-y-md bg-color-white-alpha-1 p-y-5xl shadow radius-lg">
        <img src={img} alt="" className="radius-full w-50"/>
        <div className="text-center">
          <div className="font-weight-bold">{name}</div>
          <div className="mute-50">{description}</div>
        </div>
        <div className="stack-x-c m-bw-x-lg">
          <i className="h6 iconoir-x color-primary@hover"></i>
          <i className="h6 iconoir-linkedin color-primary@hover"></i>
        </div>
      </a>
    </div>
  )
}

function DarkVersionWithLargeİmages() {
  return (
    <section className="m-y-md">
      <div className="wrap">
        <div className="row row-gap-xl">
          <Cards 
            img="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            name="Jane Cooper"
            description="Regional Technician"
            social={true}
          />
          <Cards 
            img="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            name="Jane Cooper"
            description="Regional Technician"
            social={true}
          />
          <Cards 
            img="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            name="Jane Cooper"
            description="Regional Technician"
            social={true}
          />
          <Cards 
            img="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            name="Jane Cooper"
            description="Regional Technician"
            social={true}
          />
          <Cards 
            img="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            name="Jane Cooper"
            description="Regional Technician"
            social={true}
          />
          <Cards 
            img="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            name="Jane Cooper"
            description="Regional Technician"
            social={true}
          />
        </div>
      </div>
    </section>
  );
}

export default DarkVersionWithLargeİmages;
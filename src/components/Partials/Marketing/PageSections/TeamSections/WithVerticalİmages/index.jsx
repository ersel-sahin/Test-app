import React from 'react'
import 'App.css'

function Card({
  name,
  department,
  desc,
  img,
  ...props
}) {
  return (
    <div className="col-12 col-6@md">
      <a href="javascript:;" className="stack-y-jl h-100 m-bw-y-lg">
        <div className="m-bw-y-md">
          <img src={img} alt="" className="radius-lg"/>
          <div className="m-bw-y-xs">
            <div className="text-lg font-weight-bold color-black">
              {name}
            </div>
            <div className="mute-75">
              {department}
            </div>
          </div>
          <p className="text-lg letter-spacing-xs color-black-alpha-6">{desc}</p>
        </div>
        <div className="m-bw-x-lg">
          <i className="h6 iconoir-x color-primary@hover"></i>
          <i className="h6 iconoir-linkedin color-primary@hover"></i>
        </div>
      </a>
    </div>
  )
}
function WithVerticalİmages() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row row-gap-xl">
          <div className="col-12 col-4@md">
            <div className="m-bw-y-lg">
              <div className="h2 font-weight-bold color-black">
                Our Team
              </div>
              <div className="text-xl color-black-alpha-6">
                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
              </div>
            </div>
          </div>
          <div className="col-12 col-8@md">
            <div className="row row-gap-xl">
              <Card 
                img="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                name="Jane Cooper"
                department="Regional Technician"
                desc="Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus."
              />
              <Card
                img="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                name="Alicia Bell"
                department="Junior Copywriter"
                desc="Turpis lectus et amet elementum. Mi duis integer sed consequat. Nam vitae, in tempus. Porta at turpis eu odio. Et, sed in bibendum accumsan. Purus viverra facilisi suspendisse quis est."
              />
              <Card 
                img="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                name="Jenny Wilson"
                department="Studio Artist"
                desc="Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo."
              />
              <Card 
                img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                name="Anna Roberts"
                department="Partner, Creative"
                desc="Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithVerticalİmages;
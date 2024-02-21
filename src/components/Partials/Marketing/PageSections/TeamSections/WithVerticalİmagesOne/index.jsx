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
    <div className="col-12">
      <a href="javascript:;" className="stack-y-l m-bw-y-lg m-bw-y-none@md stack-x-t@md m-bw-x-lg@md">
        <img src={img} alt="" className="w-50 w-30@md w-40@lg radius-lg"/>
        <div className="m-bw-y-md">
          <div className="m-bw-y-xs">
            <div className="text-lg font-weight-bold color-black">
              {name}
            </div>
            <div className="mute-75">
              {department}
            </div>
          </div>
          <p className="text-lg letter-spacing-xs color-black-alpha-6">{desc}</p>
          <div className="m-bw-x-lg">
            <i className="h6 iconoir-x color-primary@hover"></i>
            <i className="h6 iconoir-linkedin color-primary@hover"></i>
          </div>
        </div>
      </a>
    </div>
  )
}
function WithVerticalİmagesOne() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row row-gap-xl">
          <div className="col-12 col-5@lg">
            <div className="m-bw-y-lg">
              <div className="h3 font-weight-bold color-black">
                About the team
              </div>
              <div className="text-xl color-black-alpha-6">
                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
              </div>
            </div>
          </div>
          <div className="col-12 col-7@lg">
            <div className="row row-gap-xl">
              <Card 
                img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                name="John Doe"
                department="Web Developer"
                desc="Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum."
              />
              <div className="col-12">
                <hr />
              </div>
              <Card
                img="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                name="Jane Doe"
                department="Web Developer"
                desc="Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est." 
              />
              <div className="col-12">
                <hr />
              </div>
              <Card
                img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                name="Dries Vincent"
                department="Web Developer"
                desc="Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithVerticalİmagesOne;
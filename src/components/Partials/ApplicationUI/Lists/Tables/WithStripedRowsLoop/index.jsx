import React from 'react';

import 'App.css';

function WithStripedRowsLoop () {
  const items = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Desinger',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Tom Cook',
      title: 'Director of Product',
      email: 'tom.cook@example.com',
      role: 'Member',
    },
    {
      name: 'Whitney Francis',
      title: 'Copywriter',
      email: 'whitney.francis@example.com',
      role: 'Admin',
    },
    {
      name: 'Leonard Krasner',
      title: 'Senior Designer',
      email: 'leonard.krasner@example.com',
      role: 'Owner',
    },
    {
      name: 'Floyd Miles',
      title: 'Principal Designer',
      email: 'floyd.miles@example.com',
      role: 'Member',
    },
  ];

  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-l m-bw-y-lg stack-x-j@md">
          <div className="stack-y-l m-bw-y-md">
            <div className="h6 font-weight-bold">
              Users
            </div>
            <div className="text-md mute-75">
              A list of all the users in your account including their name, title, email and role.
            </div>
          </div>
          <div className="button">
            Add user
          </div>
        </div>
        <div className="space-xl"></div>
        <table className="w-100">
          <thead className="border-b border-color-black-alpha-2">
            <tr>
              <th className="w-25 p-md">
                <div className="h6 font-weight-bold">
                  Name
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="h6 font-weight-bold">
                  Title
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="h6 font-weight-bold">
                  Email
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="h6 font-weight-bold">
                  Role
                </div>
              </th>
              <th className="w-25 p-md">
                  &nbsp;
                </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr>
                  <th className="w-25 p-md">
                    <div className="text-lg font-weight-bold">
                      {item.name}
                    </div>
                  </th>
                  <th className="w-25 p-md">
                    <div className="mute-75">
                      {item.title}
                    </div>
                  </th>
                  <th className="w-25 p-md">
                    <div className="mute-75">
                      {item.email}
                    </div>
                  </th>
                  <th className="w-25 p-md">
                    <div className="mute-75">
                      {item.role}
                    </div>
                  </th>
                  <th className="w-25 p-md">
                    <div className="button button-style-link">
                      Edit
                    </div>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default WithStripedRowsLoop;
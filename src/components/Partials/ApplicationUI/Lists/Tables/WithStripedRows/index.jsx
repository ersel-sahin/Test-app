import React from 'react';

import 'App.css';

function WithStripedRows () {
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
            <tr>
              <th className="w-25 p-md">
                <div className="text-lg font-weight-bold">
                  Lindsay Walton
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Front-end Developer
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  lindsay.walton@example.com	
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Member
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="button button-style-link">
                  Edit
                </div>
              </th>
            </tr>
            <tr className="bg-color-gray-alpha-1">
              <th className="w-25 p-md">
                <div className="text-lg font-weight-bold">
                  Courtney Henry
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Desinger
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  courtney.henry@example.com
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Admin
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="button button-style-link">
                  Edit
                </div>
              </th>
            </tr>
            <tr>
              <th className="w-25 p-md">
                <div className="text-lg font-weight-bold">
                  Tom Cook
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Director of Product
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  tom.cook@example.com
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Member
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="button button-style-link">
                  Edit
                </div>
              </th>
            </tr>
            <tr className="bg-color-gray-alpha-1">
              <th className="w-25 p-md">
                <div className="text-lg font-weight-bold">
                  Whitney Francis
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Copywriter
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  whitney.francis@example.com	
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Admin
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="button button-style-link">
                  Edit
                </div>
              </th>
            </tr>
            <tr>
              <th className="w-25 p-md">
                <div className="text-lg font-weight-bold">
                  Leonard Krasner	
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Senior Designer
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  leonard.krasner@example.com
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Owner
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="button button-style-link">
                  Edit
                </div>
              </th>
            </tr>
            <tr className="bg-color-gray-alpha-1">
              <th className="w-25 p-md">
                <div className="text-lg font-weight-bold">
                Floyd Miles	
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Principal Designer
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  floyd.miles@example.com
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="mute-75">
                  Member
                </div>
              </th>
              <th className="w-25 p-md">
                <div className="button button-style-link">
                  Edit
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default WithStripedRows;
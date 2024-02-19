import React from 'react';

import 'App.css';

function WithStripedRowsInlineEdit () {
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

  const [isEdit, setEdit] = React.useState(false);

  const [getDeleted, setDeleted] = React.useState([]);

  const [getItem, setItems] = React.useState(items);

  const [getTempItem, setTempItem] = React.useState({
    name: '',
    title: '',
    email: '',
    role: '',
  });

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
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="border-b border-color-black-alpha-2">
              <tr>
                <th className="w-20 p-md">
                  Name
                </th>
                <th className="w-20 p-md">
                  Title
                </th>
                <th className="w-20 p-md">
                  Email
                </th>
                <th className="w-20 p-md">
                  Role
                </th>
                <th className="w-20 p-md">
                  &nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              {getItem.map((item, index) => {
                return getDeleted.includes(index) ? (
                  <></>
                ) : (
                  <tr
                    key={index}
                  >
                    <td>
                      {isEdit !== index && (
                        <>
                          {item.name}
                        </>
                      )}
                      {isEdit === index && (
                        <input
                          type="text"
                          defaultValue={item.name}
                          onInput={(e) => {
                            const value = e.target.value;

                            setTempItem({
                              ...getTempItem,
                              name: value,
                            })
                          }}
                          className="input"
                        />
                      )}
                    </td>
                    <td>
                      {isEdit !== index && (
                        <>
                          {item.title}
                        </>
                      )}
                      {isEdit === index && (
                        <input
                          type="text"
                          defaultValue={item.title}
                          onInput={(e) => {
                            const value = e.target.value;

                            setTempItem({
                              ...getTempItem,
                              title: value,
                            })
                          }}
                          className="input"
                        />
                      )}
                    </td>
                    <td>
                      {isEdit !== index && (
                        <>
                          {item.email}
                        </>
                      )}
                      {isEdit === index && (
                        <input
                          type="text"
                          defaultValue={item.email}
                          onInput={(e) => {
                            const value = e.target.value;

                            setTempItem({
                              ...getTempItem,
                              email: value,
                            })
                          }}
                          className="input"
                        />
                      )}
                    </td>
                    <td>
                      {isEdit !== index && (
                        <>
                          {item.role}
                        </>
                      )}
                      {isEdit === index && (
                        <input
                          type="text"
                          defaultValue={item.role}
                          onInput={(e) => {
                            const value = e.target.value;

                            setTempItem({
                              ...getTempItem,
                              role: value,
                            })
                          }}
                          className="input"
                        />
                      )}
                    </td>
                    <td>
                      {isEdit === index && (
                        <>
                          <button
                            onClick={() => {
                              setEdit(false)
                              setTempItem({
                                name: '',
                                title: '',
                                email: '',
                                role: '',
                              })

                              const newItems = [...getItem];
                              newItems[index] = getTempItem;

                              setItems(newItems);
                            }}
                            className="button"
                          >
                            Save
                          </button>
                          &nbsp;
                          <button
                            onClick={() => {
                              setEdit(false)
                              setTempItem({
                                name: '',
                                title: '',
                                email: '',
                                role: '',
                              })
                            }}
                            className="button button-style-link"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      {isEdit !== index && (
                        <>
                          <button
                            onClick={() => {
                              setEdit(index)
                              setTempItem(item)
                            }}
                            className="button button-style-link button-color-green"
                          >
                            Edit
                          </button>
                          &nbsp;
                          <button
                            onClick={() => {
                              const result = window.confirm('Are you sure?');

                              if (result) {
                                setDeleted([
                                  ...getDeleted,
                                  index,
                                ])
                              }
                            }}
                            className="button button-style-link button-color-red"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default WithStripedRowsInlineEdit;
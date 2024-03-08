import React from 'react';

import 'App.css';

function BoxText ({
  title,
  text,
  number,
  boxBorder,
  textColor,
})
{
  return (
    <div className="col-12 col-6@md col-3@lg">
      <div className={`p-xl m-bw-y-sm ${boxBorder}`}>
        <div className="stack-x-j">
          <div className="text-sm mute-75 font-weight-bold letter-spacing-sm">
            {title}
          </div>
          <div className={`text-sm ${textColor}`}>
            {text}
          </div>
        </div>
        <div className="h4 font-weight-bold">
          {number}
        </div>
      </div>
    </div>
  )
}

function WithTrending () {
  const items = [
    {
      title: 'Revenue',
      text: '-4,75%',
      number: '$405,091.00',
      textColor: 'color-red',
      boxBorder: 'border border-r-@md border-b-none@md border-b@lg border-color-black-alpha-1 radius-t-md radius-tr-none@md radius-bl-md@lg',
    },
    {
      title: 'Overdue invoices',
      text: '+54.02%',
      number: '$12,787.00',
      textColor: 'color-green',
      boxBorder: 'border-r border-l border-l-none@md border-t@md border-b@lg border-color-black-alpha-1 radius-tr-md@md radius-tr-none@lg',
    },
    {
      title: 'Outstanding invoices',
      text: '-1.39%%',
      number: '$245,988.00',
      textColor: 'color-red',
      boxBorder: 'border-r border-l border-t border-b@md border-l-none@lg border-color-black-alpha-1 radius-bl-md@md radius-bl-none@lg',
    },
    {
      title: 'Expenses',
      text: '+10,75%',
      number: '$30,156.000',
      textColor: 'color-green',
      boxBorder: 'border border-l-none@md border-color-black-alpha-1 radius-b-md radius-bl-none@md radius-tr-md@lg',
    },
  ]
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row">
          {items.map((item) => (
            <BoxText
              title={item.title}
              text={item.text}
              number={item.number}
              boxBorder={item.boxBorder}
              textColor={item.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default WithTrending;
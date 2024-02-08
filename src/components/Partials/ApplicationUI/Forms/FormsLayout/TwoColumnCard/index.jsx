import React from 'react';

import 'App.css';

import Button from 'components/Core/Button/index.jsx';
import Input from 'components/Core/Input/index.jsx';
import PhotoUpload from 'components/Core/PhotoUpload/index.jsx';
import Radio from 'components/Core/Radio/index.jsx';
import CheckBox from 'components/Core/CheckBox/index.jsx';

function TwoColumnCard () {
  return (
    <section className="m-y-xl">
      <div className="wrap">
        <form>
            <fieldset>
              <div className="row row-gap-lg">
                <div className="col-12 col-4@md p-r-lg">
                  <legend className="m-bw-y-sm">
                    <div className="h6">
                      Profile
                    </div>
                    <div className="text-sm color-black-alpha-3">
                      This information will be displayed publicly so be careful what you share.
                    </div>
                  </legend>
                </div>
                <div className="col-12 col-8@md">
                  <div className="row row-gap-lg p-xl bg-color-white-alpha-1 border border-color-gray-alpha-1 radius-xl hidden@sm visible@md">
                    <div className="col-12 col-6@md">
                      <label for="username" className="input-col-label">
                        Username
                      </label>
                      <Input
                        name="username"
                        placeholder="https://www.example.com/..."
                        id="username"
                      />
                    </div>
                    <div className="col-12">
                      <label for="about" className="input-col-label">
                        About
                      </label>
                      <textarea name="message" id="about" className="input input-line-5"></textarea>
                      <div className="input-helper">
                        Write a few sentences about yourself.
                      </div>
                    </div>
                    <div className="col-12">
                      <label for="photo" className="input-col-label">
                        Photo
                      </label>
                      <input type="file" name="cover-photo" id="photo" className="hidden" />
                      <label for="photo" className="stack-x-l m-bw-x-md">
                        <span className="stack-x-c p-md text-xl color-white bg-color-gray radius-full">
                          <i className="iconoir-user"></i>
                        </span>
                        <span className="button button-size-xs button-style-line">
                          Change
                        </span>
                      </label>
                    </div>
                    <div className="col-12">
                      <label for="cover-photo" className="input-col-label">
                        Cover Photo
                      </label>
                      <PhotoUpload />
                    </div>
                    <div className="col-12">
                      <hr className="m-y-xl" />
                    </div>
                    <div className="col-12 stack-x-r">
                      <button type="reset" className="button button-style-plain">
                        Cancel
                      </button>
                      <Button
                        href='#'
                        label='Submit'
                      />
                    </div>
                  </div>
                  <div className="row row-gap-lg hidden@xl hidden@lg hidden@md">
                    <div className="col-12 col-6@md">
                      <label for="username" className="input-col-label">
                        Username
                      </label>
                      <Input
                        name="username"
                        placeholder="https://www.example.com/..."
                        id="username"
                      />
                    </div>
                    <div className="col-12">
                      <label for="about" className="input-col-label">
                        About
                      </label>
                      <textarea name="message" id="about" className="input input-line-5"></textarea>
                      <div className="input-helper">
                        Write a few sentences about yourself.
                      </div>
                    </div>
                    <div className="col-12">
                      <label for="photo" className="input-col-label">
                        Photo
                      </label>
                      <input type="file" name="cover-photo" id="photo" className="hidden" />
                      <label for="photo" className="stack-x-l m-bw-x-md">
                        <span className="stack-x-c p-md text-xl color-white bg-color-gray radius-full">
                          <i className="iconoir-user"></i>
                        </span>
                        <span className="button button-size-xs button-style-line">
                          Change
                        </span>
                      </label>
                    </div>
                    <div className="col-12">
                      <label for="cover-photo" className="input-col-label">
                        Cover Photo
                      </label>
                      <PhotoUpload />
                    </div>
                    <div className="col-12">
                      <hr className="m-y-xl" />
                    </div>
                    <div className="col-12 stack-x-r">
                      <button type="reset" className="button button-style-plain">
                        Cancel
                      </button>
                      <Button
                        href='#'
                        label='Submit'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="space-xl"></div>
            <hr className="m-y-xl" />
            <fieldset>
              <div className="row row-gap-lg">
                <div className="col-12 col-4@md p-r-lg">
                  <legend className="m-bw-y-sm">
                    <div className="h6">
                    Personal Information
                    </div>
                    <div className="text-sm color-black-alpha-3">
                    Use a permanent address where you can receive mail.
                    </div>
                  </legend>
                </div>
                <div className="col-12 col-8@md">
                  <div className="row row-gap-lg p-xl bg-color-white-alpha-1 border border-color-gray-alpha-1 radius-xl hidden@sm visible@md">
                    <div className="col-12 col-6@md">
                        <label for="firstname" className="input-col-label">
                        First name
                        </label>
                        <Input
                          name="firstname"
                          id="firstname"
                        />
                    </div>
                    <div className="col-12 col-6@md">
                      <label for="lastname" className="input-col-label">
                        Last name
                      </label>
                      <Input
                      name="lastname"
                      id="lastname"
                      />
                    </div>
                    <div className="col-12 col-8@md">
                      <label for="emailaddress" className="input-col-label">
                        Email address
                      </label>
                      <Input
                      name="emailaddress"
                      id="emailaddress"
                      />
                    </div>
                    <div className="col-12 col-6@md">
                      <label for="contry" className="input-col-label">
                        Contry
                      </label>
                      <select name="options" class="input">
                        <option value="">Turkey</option>
                        <option value="1">Kuba</option>
                        <option value="2">Canada</option>
                        <option value="3">israel</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="streetaddress" className="input-col-label">
                        Street address
                      </label>
                      <Input
                        name="streetaddress"
                        id="streetaddress"
                      />
                    </div>
                    <div className="col-12 col-4@md">
                      <label for="city" className="input-col-label">
                        City
                      </label>
                      <Input
                        name="city"
                        id="city"
                      />
                    </div>
                    <div className="col-12 col-4@md">
                      <label for="state" className="input-col-label">
                        State / Province
                      </label>
                      <Input
                        name="state"
                        id="state"
                      />
                    </div>
                    <div className="col-12 col-4@md">
                      <label for="zip" className="input-col-label">
                        Zip / Postal code
                      </label>
                      <Input
                        name="zip"
                        id="zip"
                      />
                    </div>
                    <div className="col-12">
                      <hr className="m-y-xl" />
                    </div>
                    <div className="col-12 stack-x-r">
                      <button type="reset" className="button button-style-plain">
                        Cancel
                      </button>
                      <Button
                        href='#'
                        label='Submit'
                      />
                    </div>
                  </div>
                  <div className="row row-gap-lg hidden@xl hidden@lg hidden@md">
                    <div className="col-12 col-6@md">
                        <label for="firstname" className="input-col-label">
                        First name
                        </label>
                        <Input
                          name="firstname"
                          id="firstname"
                        />
                    </div>
                    <div className="col-12 col-6@md">
                      <label for="lastname" className="input-col-label">
                        Last name
                      </label>
                      <Input
                      name="lastname"
                      id="lastname"
                      />
                    </div>
                    <div className="col-12 col-8@md">
                      <label for="emailaddress" className="input-col-label">
                        Email address
                      </label>
                      <Input
                      name="emailaddress"
                      id="emailaddress"
                      />
                    </div>
                    <div className="col-12 col-6@md">
                      <label for="contry" className="input-col-label">
                        Contry
                      </label>
                      <select name="options" class="input">
                        <option value="">Turkey</option>
                        <option value="1">Kuba</option>
                        <option value="2">Canada</option>
                        <option value="3">israel</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="streetaddress" className="input-col-label">
                        Street address
                      </label>
                      <Input
                        name="streetaddress"
                        id="streetaddress"
                      />
                    </div>
                    <div className="col-12 col-4@md">
                      <label for="city" className="input-col-label">
                        City
                      </label>
                      <Input
                        name="city"
                        id="city"
                      />
                    </div>
                    <div className="col-12 col-4@md">
                      <label for="state" className="input-col-label">
                        State / Province
                      </label>
                      <Input
                        name="state"
                        id="state"
                      />
                    </div>
                    <div className="col-12 col-4@md">
                      <label for="zip" className="input-col-label">
                        Zip / Postal code
                      </label>
                      <Input
                        name="zip"
                        id="zip"
                      />
                    </div>
                    <div className="col-12">
                      <hr className="m-y-xl" />
                    </div>
                    <div className="col-12 stack-x-r">
                      <button type="reset" className="button button-style-plain">
                        Cancel
                      </button>
                      <Button
                        href='#'
                        label='Submit'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-xl"></div>
            </fieldset>
            <hr className="m-y-xl" />
            <fieldset className='m-b-lg'>
              <div className="row row-gap-lg">
                <div className="col-12 col-4@md p-r-lg">
                  <legend className="m-bw-y-sm">
                    <div className="h6">
                      Notifications
                    </div>
                    <div className="text-sm color-black-alpha-3">
                      We'll always let you know about important changes, but you pick what else you want to hear about.
                    </div>
                  </legend>
                </div>
                <div className="col-12 col-8@md">
                  <div className='row row-gap-lg p-xl bg-color-white-alpha-1 border border-color-gray-alpha-1 radius-xl hidden@sm visible@md'>
                    <div className="col-12">
                      <div className="text-lg font-weight-medium">
                        By Email
                      </div>
                    </div>
                    <div className="col-12">
                      <CheckBox />
                    </div>
                    <div className="col-12">
                      <div className="text-lg font-weight-medium">
                      Push Notifications
                      </div>
                      <div className='text-sm color-black-alpha-3'>
                      These are delivered via SMS to your mobile phone.
                      </div>
                    </div>
                    <div className="col-12">
                     <Radio />
                    </div>
                    <div className="col-12">
                      <hr className="m-y-xl" />
                    </div>
                    <div className="col-12">
                      <div className="stack-x-r">
                        <button type="reset" className="button button-style-plain">
                          Cancel
                        </button>
                        <Button
                          href='#'
                          label='Submit'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row row-gap-lg hidden@xl hidden@lg hidden@md'>
                    <div className="col-12">
                    <div className="text-lg font-weight-medium">
                      By Email
                    </div>
                    </div>
                    <div className="col-12">
                    <CheckBox />
                    </div>
                    <div className="col-12">
                      <div className="text-lg font-weight-medium">
                      Push Notifications
                      </div>
                      <div className='text-sm color-black-alpha-3'>
                      These are delivered via SMS to your mobile phone.
                      </div>
                    </div>
                    <div className="col-12">
                     <Radio />
                    </div>
                    <div className="col-12">
                      <hr className="m-y-xl" />
                    </div>
                    <div className="col-12">
                      <div className="stack-x-r">
                        <button type="reset" className="button button-style-plain">
                          Cancel
                        </button>
                        <Button
                          href='#'
                          label='Submit'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
        </form>
      </div>
    </section>
  );
}

export default TwoColumnCard ;
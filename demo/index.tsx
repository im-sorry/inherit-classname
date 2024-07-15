import React from 'react';

export default function (props) {
  return (
    <div inherit-class="feedback" {...props}>
      <div inherit-class="head">
        <div inherit-class="title red">
          <div inherit-class="child"></div>
        </div>
        <div inherit-class="avatar"></div>
      </div>
      <div inherit-class="body">
        <div inherit-class="charts">
          <div inherit-class="line" className={'line1'}></div>
          <div inherit-class="pie"></div>
        </div>
        <div inherit-class="table">
          <div inherit-class="thead"></div>
          <div inherit-class="tbody"></div>
        </div>
        <div inherit-class="" />
      </div>
      {[1, 2, 3].map((i) => (
        <div inherit-class="map"></div>
      ))}
    </div>
  );
}

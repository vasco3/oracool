/**
 * Created by cuadraman on 12/3/16.
 */
import React from 'react';

export default () => {
  return (
    <div
      style={{
        backgroundColor: 'hsl(57, 100%, 94%)',
        borderRadius: 3,
        boxSizing: 'border-box',
        color: 'hsl(57, 100%, 35%)',
        height: 300,
        margin: '20px auto 10px',
        maxWidth: 600,
        overflow: 'scroll',
        padding: '20px 30px',
        width: '90%',
      }}
    >
      <h2>Guessing game</h2>
      <h3>Description</h3>
      <p>
        The purpose of this micro-app is to prank people. It was inspired by a
        1990's Unix/DOS game.
      </p>
      <p>
        Prank your friends by letting them believe that this web app will guess
        correctly any question that they already know the answer for.
      </p>
      <h3>Example on how to use</h3>
      <ol style={{ textAlign: 'left' }}>
        <li style={{ lineHeight: 1.3 }}>
          {'Type the following in the input field: ' +
            'Oracool,.john.me which is my name'}
        </li>
        <li style={{ lineHeight: 1.3 }}>
          {'It will look like: ' + 'Oracool, tell me which is my name'}
        </li>
        <li style={{ lineHeight: 1.3 }}>{'Press ENTER'}</li>
        <li style={{ lineHeight: 1.3 }}>
          {'You will see the answer:' + ' JOHN'}
        </li>
      </ol>
    </div>
  );
};

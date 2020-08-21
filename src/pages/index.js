/**
 * Created by Jorge Cuadra on 12/3/16.
 */

import * as Utils from '../utils';
import { make as Eye } from '../components/Eye.bs';
import Head from 'next/head';
import Instructions from '../components/Instructions';
import KeyCodes from '../constants/key-codes';
import Modes from '../constants/modes';
import React from 'react';

function initState() {
  return {
    answer: '',
    input: '',
    isShiftOn: false,
    mode: Modes.PHRASE,
    phrase: 'Oracool, tell me',
    phraseIndex: 0,
    showHelp: false,
  };
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onToggleHelp = this.onToggleHelp.bind(this);
    this.state = initState();
  }

  onClick() {
    this.setState(initState());
  }

  onKeyUp(keyCode) {
    const state = { ...this.state };

    switch (keyCode) {
      case KeyCodes.ENTER:
        // show answer
        this.setState({ ...state, mode: Modes.ANSWER });
        return;

      case KeyCodes.DOT: {
        this.setState(Utils.toggleSecretMode({ ...state }));
        return;
      }

      case KeyCodes.SHIFT:
        this.setState({ ...state, isShiftOn: true });
        return;

      default:
        switch (state.mode) {
          case Modes.PHRASE:
            if (keyCode === KeyCodes.BACKSPACE) {
              this.setState(Utils.toggleSecretMode(state));
            }
            this.setState(Utils.advancePhrase(state));
            return;

          case Modes.SECRET: {
            if (keyCode === KeyCodes.BACKSPACE) {
              this.setState(Utils.toggleSecretMode(state));
            }
            const answer = state.answer + String.fromCharCode(keyCode);
            this.setState(Utils.advancePhrase({ ...state, answer }));
            return;
          }

          case Modes.FREE_STYLE:
            switch (keyCode) {
              case KeyCodes.COMMA: {
                const input = state.input + ',';
                this.setState({ ...state, input });
                return;
              }

              case KeyCodes.FORWARD_SLASH: {
                const input = state.input + '?';
                this.setState({ ...state, input });
                return;
              }

              case KeyCodes.SPACE: {
                const input = state.input + ' ';
                this.setState({ ...state, input });
                return;
              }

              case state.isShiftOn: {
                const input = state.input + String.fromCharCode(keyCode);
                this.setState({ ...state, input });
                return;
              }

              case KeyCodes.BACKSPACE:
                if (state.mode === Modes.PHRASE) {
                  if (state.phraseIndex) {
                    const newState = {
                      input: state.input.slice(0, -1),
                      phraseIndex: state.phraseIndex - 1,
                    };
                    this.setState({ ...state, newState });
                  }
                  return;
                }
                const input = state.input.slice(0, -1);
                this.setState({ ...state, input });
                return;

              default: {
                const input =
                  state.input + String.fromCharCode(keyCode).toLowerCase();
                this.setState({ ...state, input });
                return;
              }
            }
        }

        this.setState({ ...state, isShiftOn: false });
    }
  }

  onToggleHelp() {
    this.setState({ showHelp: !this.state.showHelp });
  }

  render() {
    const { answer, input, mode, phrase, showHelp } = this.state;

    const styles = Utils.compileStyles(mode);

    const ghostValue = input.length > phrase.length ? '' : phrase;

    return (
      <div style={styles.div}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <title>Oracool - Question Game</title>
          <meta
            name="description"
            content="A game about questions and answers."
          />
          <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,300,500"
            rel="stylesheet"
            type="text/css"
          />
        </Head>

        <div className=" w-48 mb-12 mx-auto">
          <Eye turn={mode === Modes.SECRET} />
        </div>

        <div style={styles.form}>
          <input
            type="text"
            onKeyDown={(event) => this.onKeyUp(event.keyCode || event.which)}
            style={styles.input}
            title="Have a question?"
            value={input}
          />
          <input
            autoComplete="off"
            autoCapitalize="off"
            value={ghostValue}
            style={styles.typeAhead}
          />
        </div>

        <div
          className="answer"
          style={Object.assign(
            {
              margin: 0,
              opacity: 0,
              transition: 'all 1s linear .3s',
            },
            styles.answer,
          )}
        >
          <h1>{answer}</h1>

          <button
            onClick={this.onClick}
            style={Object.assign(styles.answer, {
              color: '#2FA79D',
            })}
          >
            Ask again
          </button>
        </div>

        <p
          style={{
            bottom: 20,
            color: '#ccc',
            cursor: 'pointer',
            fontSize: '12px',
            left: 'calc(50% - 20px)',
            position: 'fixed',
            textDecoration: 'underline',
          }}
          onClick={this.onToggleHelp}
        >
          {showHelp ? 'Hide Help' : 'Show Help'}
        </p>
        {showHelp ? <Instructions /> : null}
      </div>
    );
  }
}

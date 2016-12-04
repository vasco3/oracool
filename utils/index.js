/**
 * Created by cuadraman on 12/3/16.
 */

import Modes from '../constants/modes'

export function advancePhrase (state) {
  if (state.phraseIndex < state.phrase.length) {
    const newState = {
      input: state.input + state.phrase[state.phraseIndex],
      phraseIndex: state.phraseIndex + 1
    }
    return Object.assign({}, state, newState)
  }
  return Object.assign({}, state, {mode: Modes.FREE_STYLE})
}

export const compileStyles = (mode) => {
  const { bg, font } = getColors();
  return {
    div: {
      backgroundColor: `hsl(0, 0%, ${bg}%)`,
      boxSizing: 'border-box',
      fontFamily: `'Roboto', sans-serif`,
      paddingTop: '10%',
      position: 'fixed',
      top: 0, right: 0, bottom: 0, left: 0,
      textAlign: 'center',
    },
    form: {
      backgroundColor: 'white',
      border: `1px solid hsl(0, 0%, ${font}%)`,
      borderRadius: 3,
      boxSizing: 'border-box',
      display: (mode === Modes.ANSWER) ? 'none' : 'block',
      height: 36,
      margin: 'auto',
      maxWidth: '600px',
      minWidth: '30%',
      position: 'relative',
      width: '90%',
    },
    input: {
      backgroundColor: 'transparent',
      border: 'none',
      bottom: 0,
      boxSizing: 'border-box',
      fontSize: '18px',
      left: 0,
      lineHeight: '36px',
      padding: 0,
      position: 'absolute',
      right: 0,
      textIndent: 5,
      top: 0,
      width: '100%',
      zIndex: 1,
    },
    typeAhead: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'silver',
      fontSize: '18px',
      height: 'auto',
      lineHeight: '36px',
      margin: 0,
      padding: 0,
      position: 'absolute',
      textIndent: 5,
      top: 0, right: 0, bottom: 0, left: 0,
      width: '100%',
      zIndex: 0,
    },
    answer: {
      color: 'hsl(0, 0%, '.concat(font, '%)'),
      opacity: (mode === Modes.ANSWER) ? 1 : 0,
      position: (mode === Modes.ANSWER) ? 'static' : 'absolute',
    }
  };
}

const getColors = () => {
  const bg = Math.random() * 10 + 10;
  return {
    bg: String(bg),
    font: String(100 - bg)
  }
}

export function toggleSecretMode (state) {
  const mode =
    (state.mode === Modes.SECRET) ?
      Modes.FREE_STYLE :
      Modes.SECRET

  return advancePhrase({...state, mode})
}


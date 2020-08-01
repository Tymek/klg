/**
 * Poprawki łamania linii w języku polskim
 */

import React, { Children } from 'react'

const nbsp = String.fromCharCode(160)
const number = '[\\dπ]'
const letter = '[\\wĄĆĘŁŃÓŚŹŻąćęłńóśźż]'
const conjunctive = 'lub|ale|czy|nad|pod|bez|nie|tak|albo|więc|lecz|przez|niech|tylko'

export const sierotki = (input: string): string => {
	let output = input

	output = output.replace(new RegExp(` (${letter}) `, 'gi'), ` $1${nbsp}`)
	output = output.replace(new RegExp(` (${letter}{2}) `, 'gi'), ` $1${nbsp}`)
	output = output.replace(new RegExp(` (${number}{1,2}) `, 'gi'), ` $1${nbsp}`)
	output = output.replace(new RegExp(` (${conjunctive}) `, 'gi'), ` $1${nbsp}`)

	output = output.replace(new RegExp(` (${letter})([,.!?]?\r?(?:\n|$))`, 'gi'), `${nbsp}$1$2`)
	output = output.replace(new RegExp(` (${letter}{2})([,.!?]?\r?(?:\n|$))`, 'gi'), `${nbsp}$1$2`)
	output = output.replace(new RegExp(` (${conjunctive})([,.!?]?\r?(?:\n|$))`, 'gi'), `${nbsp}$1$2`)

	output = output.replace(new RegExp(`([^,:]) (${letter}),`, 'gi'), `$1${nbsp}$2,`)
	output = output.replace(new RegExp(`([^,:]) (${letter}{2}),`, 'gi'), `$1${nbsp}$2,`)
	output = output.replace(new RegExp(`([^,:]) (${conjunctive}),`, 'gi'), `$1${nbsp}$2,`)

	return output
}

export const wdowy = (input: string): string =>
	input.replace(new RegExp(` (${letter}+)([.?!]?\r?\n?$)`, 'i'), `${nbsp}$1$2`)

type TypoType = (component: React.ComponentType<any>) => React.ComponentType<any>

const Typo: TypoType = Component => ({ children, ...props }) => (
  children ? (
    <>
      {Children.map(children, child => (
        <Component {...props}>{wdowy(sierotki(child as string))}</Component>
      ))}
    </>
  ) : null
)

const intrinsic = (t: Parameters<typeof React.createElement>[0]) =>
  Typo(({ children, ...props }) => React.createElement(t, props, children))

export const P = intrinsic('p')
export const Span = intrinsic('span')

export default Typo

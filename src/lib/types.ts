import React from 'react'

type ValueOf<T> = T[keyof T]
type nullable<T> = T | null | undefined
type AnyObject = {
	[x: string | number | symbol]: unknown
}
type OptionalOfUndefined<T, D, U> = T extends undefined ? U : D

type ArrowFunction<P extends Array<unknown> = [], R = unknown> = (...args: P) => R

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U

type XORs<T extends unknown[]> = T extends [infer P1, infer P2]
	? XOR<P1, P2>
	: T extends [infer Only, ...infer Rest]
	? XOR<Only, XORs<Rest>>
	: never

type MergeXOR<T, P> = Without<T, P> & P

type As = React.ElementType<any>

type ReactPropsOf<T extends As> = React.ComponentPropsWithoutRef<T>
type MergeWithHTMLProps<T extends As, P = {}> = Omit<ReactPropsOf<T>, keyof P> & P

type ReactChildren = React.ReactNode | React.ReactNode[] | undefined | null | string
type ChildrenRender<P> = ArrowFunction<[P], ReactChildren>

type Layout = React.FC<Readonly<ChildrenProp>>
type Provider<P = {}> = React.FC<
	P & {
		children: ReactChildren
	}
>

type ChildrenProp = {
	children: ReactChildren
}
type StyleProps = Partial<{
	className: string
	style: React.CSSProperties
}>

type DefaultComponentProps = StyleProps & ChildrenProp

export type {
	As,
	XOR,
	XORs,
	Layout,
	ValueOf,
	Without,
	nullable,
	Provider,
	MergeXOR,
	AnyObject,
	StyleProps,
	ChildrenProp,
	ReactPropsOf,
	ReactChildren,
	ChildrenRender,
	MergeWithHTMLProps,
	OptionalOfUndefined,
	DefaultComponentProps,
}

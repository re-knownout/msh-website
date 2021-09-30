import { Dropdown } from "./dropdown";

/** Пространство имен для компонента `Dropdown` */
export namespace Dropdown {
	export interface IProps {
		children: JSX.Element[] | JSX.Element;
		/**
		 * Индекс изначально выбранного элемента, если не установлен, заголовком будет
		 * назначен текст из модуля транслитерации `Dropdown.translation`
		 */
		select?: number;

		/**
		 * Если `true`, то выпадающий список не будет закрываться после
		 * выбора элемента из списка
		 */
		stayOpen?: boolean;

		/**
		 * Если атрибут задан как `true`, то дочерние объекты не будут обрабатываться
		 * внутренней функциональностью компонента, а будут выводится в том виде,
		 * в котором их передал родитель
		 *
		 * _Внимание! Если этот атрибут установлен, события onChange и onItemClick вызываться не будут._
		 *
		 * Для обновления заголовка и состояния выпадающего списка следует использовать контекст `DropdownContext`
		 * и функции `setDropdownState` и `updateTitle` соответственно.
		 *
		 * _Функции контекста описаны в типе `IDropdownContext`_
		 */
		rawContent?: boolean;

		/**
		 * Обработчик события клика на элемент выпадающего списка
		 *
		 * _Внимание! Вызывается при каждом клике на элемент, даже если тот выбран/выключен
		 * или у него установлен атрибут `readonly`_
		 *
		 * @param key индекс элемента в списке
		 * @param name текст элемента
		 */
		onItemClick?: (key: number, name: string) => void;

		/**
		 * Обработчик события изменения значения выпадающего списка
		 *
		 * _В отличии от `onItemClick`, вызывается только в случае изменения значения
		 * заголовка компонента_
		 *
		 * @param key индекс выбранного элемента в списке
		 * @param value новое значение заголовка компонента
		 */
		onChange?: (key: number, value: string) => void;
	}

	export interface IState {
		/** Состояние выпадающего списка компонента */
		dropdownOpen: boolean;

		/** Индекс текущего выбранного элемента */
		selected: number;

		/** Таймаут автоматического сокрытия выпадающего списка */
		timeOut?: TTimeOutFunctionMethods;

		/** Если не `null`, значение заголовка компонента будет
		 * принудительно заменено на значение переменной */
		overrideTitleText: string | null;
	}

	export interface IItemProps {
		children: string;
		readonly?: boolean;

		className?: string;
	}

	export type TTimeOutFunctionMethods = { set: () => void; clear: () => void };
	export type TTimeOutFunction = (time: number, callback: () => void) => TTimeOutFunctionMethods;

	export interface IDropdownContext {
		setDropdownState: (dropdownOpen: boolean) => void;
		updateTitle: (title: string) => void;
	}
}

export default Dropdown;

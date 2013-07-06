/************************************************************************/
/* Define Dojo widgets                                                  */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

declare module Dijit
{
	// dijit/_WidgetBase

	class _WidgetBase extends _Widget
	{
		// _Widget
		"get"(name: "baseClass"): string;
		"get"(name: "class"): string;
		"get"(name: "containerNode"): HTMLElement;
		"get"(name: "dir"): string;
		"get"(name: "domNode"): HTMLElement;
		"get"(name: "focused"): boolean;
		"get"(name: "id"): string;
		"get"(name: "lang"): string;
		"get"(name: "ownerDocument"): HTMLDocument;
		"get"(name: "postMixInProperties"): string;
		"get"(name: "srcNodeRef"): HTMLElement;
		"get"(name: "style"): Dojo.StylesMap;
		"get"(name: "title"): string;
		"get"(name: "tooltip"): string;
		"get"(name: string): any;

		"set"(name: "baseClass", value: string): void;
		"set"(name: "class", value: string): void;
		"set"(name: "containerNode", value: HTMLElement): void;
		"set"(name: "dir", value: string): void;
		"set"(name: "domNode", value: HTMLElement): void;
		"set"(name: "focused", value: boolean): void;
		"set"(name: "id", value: string): void;
		"set"(name: "lang", value: string): void;
		"set"(name: "ownerDocument", value: HTMLDocument): void;
		"set"(name: "postMixInProperties", value: string): void;
		"set"(name: "srcNodeRef", value: HTMLElement): void;
		"set"(name: "style", value: Dojo.StylesMap): void;
		"set"(name: "title", value: string): void;
		"set"(name: "tooltip", value: string): void;
		"set"(name: string, value: any): void;
		"set"(values: Dojo.PropertiesMap): void;

		watch(prop: "baseClass", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "class", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "containerNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "dir", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "domNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "focused", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "id", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "lang", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "ownerDocument", callback: Dojo.WatchCallback<HTMLDocument>): Dojo.WatchHandle;
		watch(prop: "postMixInProperties", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "srcNodeRef", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "style", callback: Dojo.WatchCallback<Dojo.StylesMap>): Dojo.WatchHandle;
		watch(prop: "title", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "tooltip", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;


		buildRendering(): void;

		/* Deprecated
				connect(obj: Object, event: string, method: string): Dojo.Handle;
				connect(obj: Object, event: Dojo.ExtensionEvent, method: string): Dojo.Handle;
				connect(obj: Object, event: string, method: EventListener): Dojo.Handle;
				connect(obj: Object, event: Dojo.ExtensionEvent, method: EventListener): Dojo.Handle;

				disconnect(handle: Dojo.Handle): void;
		*/

		defer(fcn: Dojo.Action, delay: number): Dojo.RemovableHandle;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom?: boolean): void;
		destroyRecursive(preserveDom?: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		emit(type: string, eventObj: Object, callbackArgs?: any[]): void;

		getChildren(): _WidgetBase[];
		getParent(): _WidgetBase;
		isFocusable(): boolean;
		isLeftToRight(): boolean;
		isValid(): boolean;

		on(type: "abort", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "afterprint", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "beforeprint", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): Dojo.RemovableHandle;
		on(type: "blur", listener: (ev: FocusEvent) => boolean): Dojo.RemovableHandle;
		on(type: "canplay", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "canplaythrough", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "change", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "click", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "contextmenu", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dblclick", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "drag", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragend", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragenter", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragleave", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragover", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragstart", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "drop", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "durationchange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "emptied", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "ended", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "focus", listener: (ev: FocusEvent) => boolean): Dojo.RemovableHandle;
		on(type: "hashchange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "input", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "keydown", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "keypress", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "keyup", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "load", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadeddata", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadedmetadata", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadstart", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "message", listener: (ev: MessageEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousedown", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousemove", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseout", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseover", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseup", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): Dojo.RemovableHandle;
		on(type: "offline", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "online", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "pause", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "play", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "playing", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "progress", listener: (ev: any) => boolean): Dojo.RemovableHandle;
		on(type: "ratechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "readystatechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "reset", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "resize", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "scroll", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "seeked", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "seeking", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "select", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "stalled", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "storage", listener: (ev: StorageEvent) => boolean): Dojo.RemovableHandle;
		on(type: "submit", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "suspend", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "timeupdate", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "unload", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "volumechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "waiting", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
		on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;

		own(handle: Dojo.RemovableHandle): Dojo.RemovableHandle[];

		placeAt(referenceId: string, position: string): _WidgetBase;
		placeAt(referenceNode: HTMLElement, position: string): _WidgetBase;
		placeAt(referenceWidget: _WidgetBase, position: string): _WidgetBase;
		placeAt(referenceId: string, position: number): _WidgetBase;
		placeAt(referenceNode: HTMLElement, position: number): _WidgetBase;
		placeAt(referenceWidget: _WidgetBase, position: number): _WidgetBase;

		postCreate(): void;
		startup(): void;
		toString(): string;

		/* Deprecated
				subscribe(topic: string, callback: Dojo.Action): Dojo.Handle;
				uninitialize(): boolean;
				unsubscribe(handle: Dojo.Handle): void;
		*/
	}

	// dijit/Widget

	class Widget extends _WidgetBase implements _FocusMixin
	{
		// _WidgetBase
		"get"(name: "baseClass"): string;
		"get"(name: "class"): string;
		"get"(name: "containerNode"): HTMLElement;
		"get"(name: "dir"): string;
		"get"(name: "domNode"): HTMLElement;
		"get"(name: "focused"): boolean;
		"get"(name: "id"): string;
		"get"(name: "lang"): string;
		"get"(name: "ownerDocument"): HTMLDocument;
		"get"(name: "postMixInProperties"): string;
		"get"(name: "srcNodeRef"): HTMLElement;
		"get"(name: "style"): Dojo.StylesMap;
		"get"(name: "title"): string;
		"get"(name: "tooltip"): string;
		"get"(name: string): any;

		"set"(name: "baseClass", value: string): void;
		"set"(name: "class", value: string): void;
		"set"(name: "containerNode", value: HTMLElement): void;
		"set"(name: "dir", value: string): void;
		"set"(name: "domNode", value: HTMLElement): void;
		"set"(name: "focused", value: boolean): void;
		"set"(name: "id", value: string): void;
		"set"(name: "lang", value: string): void;
		"set"(name: "ownerDocument", value: HTMLDocument): void;
		"set"(name: "postMixInProperties", value: string): void;
		"set"(name: "srcNodeRef", value: HTMLElement): void;
		"set"(name: "style", value: Dojo.StylesMap): void;
		"set"(name: "title", value: string): void;
		"set"(name: "tooltip", value: string): void;
		"set"(name: string, value: any): void;
		"set"(values: Dojo.PropertiesMap): void;

		watch(prop: "baseClass", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "class", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "containerNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "dir", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "domNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "focused", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "id", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "lang", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "ownerDocument", callback: Dojo.WatchCallback<HTMLDocument>): Dojo.WatchHandle;
		watch(prop: "postMixInProperties", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "srcNodeRef", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "style", callback: Dojo.WatchCallback<Dojo.StylesMap>): Dojo.WatchHandle;
		watch(prop: "title", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "tooltip", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;


		onClick(event: MouseEvent): void;
		onDblClick(event: MouseEvent): void;
		onHide(): void;
		onKeyDown(event: KeyboardEvent): void;
		onKeyPress(event: KeyboardEvent): void;
		onKeyUp(event: KeyboardEvent): void;
		onMouseDown(event: MouseEvent): void;
		onMouseEnter(event: MouseEvent): void;
		onMouseLeave(event: MouseEvent): void;
		onMouseMove(event: MouseEvent): void;
		onMouseOut(event: MouseEvent): void;
		onMouseOver(event: MouseEvent): void;
		onMouseUp(event: MouseEvent): void;
		onShow(): void;

		// dijit/__FocusMixin
		onBlur(): void;
		onFocus(): void;
	}

	// Common widget mixin's

	interface _FocusMixin
	{
		onBlur(): void;
		onFocus(): void;
	}

	interface _Container
	{
		addChild(widget: _WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: _WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: _WidgetBase): void;
		removeChild(widget: number): void;
	}

	interface _Contained
	{
		getIndexInParent(): number;
		getNextSibling(): _WidgetBase;
		getPreviousSibling(): _WidgetBase;
	}

	interface _AttachMixin
	{
		//attachScope: Object;
		//searchContainerNode: boolean;

		"get"(name: "attachScope"): Object;
		"get"(name: "searchContainerNode"): boolean;
		"get"(name: string): any;

		"set"(name: "attachScope", value: Object): void;
		"set"(name: "searchContainerNode", value: boolean): void;
		"set"(name: string, value: any): void;

		watch(prop: "attachScope", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "searchContainerNode", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	interface _TemplatedMixin extends _AttachMixin
	{
		//templatePath: string;
		//templateString: string;

		"get"(name: "templatePath"): string;
		"get"(name: "templateString"): string;
		"get"(name: string): any;

		"set"(name: "templatePath", value: string): void;
		"set"(name: "templateString", value: string): void;
		"set"(name: string, value: any): void;

		watch(prop: "templatePath", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "templateString", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

		getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;
	}

	interface _KeyNavMixin extends _FocusMixin
	{
		//childSelector: Object;
		//focusedChild: Object;
		//multiCharSearchDuration: number;
		//tabIndex: string;

		"get"(name: "childSelector"): Object;
		"get"(name: "focusedChild"): Object;
		"get"(name: "multiCharSearchDuration"): number;
		"get"(name: "tabIndex"): string;
		"get"(name: string): any;

		"set"(name: "childSelector", value: Object): void;
		"set"(name: "focusedChild", value: Object): void;
		"set"(name: "multiCharSearchDuration", value: number): void;
		"set"(name: "tabIndex", value: string): void;
		"set"(name: string, value: any): void;

		watch(prop: "childSelector", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "focusedChild", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "multiCharSearchDuration", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: "tabIndex", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

		focus(): void;
		focusChild(widget: _WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;

		onKeyboardSearch(item: _WidgetBase, event: Event, searchString: string, numMatches: number): void;
	}

	interface _KeyNavContainer extends _Container, _KeyNavMixin
	{
	}

	interface _CssStateMixin
	{
		//active: boolean;
		//cssStateNodes: { [attachPoint: string]: string; };
		//hovering: boolean;

		"get"(name: "active"): boolean;
		"get"(name: "cssStateNodes"): { [attachPoint: string]: string; };
		"get"(name: "hovering"): boolean;
		"get"(name: string): any;

		"set"(name: "active", value: boolean): void;
		"set"(name: "cssStateNodes", value: { [attachPoint: string]: string; }): void;
		"set"(name: "hovering", value: boolean): void;
		"set"(name: string, value: any): void;

		watch(prop: "active", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "cssStateNodes", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "hovering", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}
}

// dijit module definitions

declare module "dijit/_Widget"
{
	var _Widget: Dijit._Widget;
	export = _Widget;
}
declare module "dijit/_WidgetBase" 
{
	var _WidgetBase: Dijit._WidgetBase;
	export = _WidgetBase;
}
declare module "dijit/Widget"
{
	var Widget: Dijit.Widget;
	export = Widget;
}
declare module "dijit/_FocusMixin"
{
	var _FocusMixin: Dijit._FocusMixin;
	export = _FocusMixin;
}
declare module "dijit/_Container" 
{
	var _Container: Dijit._Container;
	export = _Container;
}
declare module "dijit/_Contained"
{
	var _Contained: Dijit._Contained;
	export = _Contained;
}
declare module "dijit/_AttachMixin" 
{
	var _AttachMixin: Dijit._AttachMixin;
	export = _AttachMixin;
}
declare module "dijit/_TemplatedMixin"
{
	var _TemplatedMixin: Dijit._TemplatedMixin;
	export = _TemplatedMixin;
}
declare module "dijit/_KeyNavMixin" 
{
	var _KeyNavMixin: Dijit._KeyNavMixin;
	export = _KeyNavMixin;
}
declare module "dijit/_KeyNavContainer"
{
	var _KeyNavContainer: Dijit._KeyNavContainer;
	export = _KeyNavContainer;
}
declare module "dijit/_CssStateMixin" 
{
	var _CssStateMixin: Dijit._CssStateMixin;
	export = _CssStateMixin;
}

// dijit/registry

declare module Dijit
{
	interface Registry extends Array<_WidgetBase>
	{
		byId(id: string): _WidgetBase;
		byNode(node: HTMLElement): _WidgetBase;
		findWidgets(root: HTMLElement, skipNode?: HTMLElement): _WidgetBase[];
		getEnclosingWidget(node: HTMLElement): _WidgetBase;
		getUniqueId(widgetType: string): string;
		add(widget: _WidgetBase): void;
		remove(id: string): void;
		toArray(): _WidgetBase[];
	}
}

declare module "dijit/registry" 
{
	var registry: Dijit.Registry;
	export = registry;
}

// dijit/place

declare module "dijit/place"
{
	interface _ReturnValues extends Dojo.Rectangle
	{
		corner: string;
		aroundCorner: string;
		overflow: number;
		spaceAvailable: Dojo.Size;
	}

	function around(node: HTMLElement, anchor: HTMLElement, positions?: string[], leftToRight?: boolean, layoutNode?: (node: HTMLElement, aroundNodeCorner: string, nodeCorner: string, size: Dojo.Size) => number): _ReturnValues;
	function around(node: HTMLElement, anchor: Dojo.Rectangle, positions?: string[], leftToRight?: boolean, layoutNode?: (node, aroundNodeCorner: string, nodeCorner: string, size: Dojo.Size) => number): _ReturnValues;

	function at(node: HTMLElement, pos: Dojo.Point, corners?: string[], layoutNode?: (node: HTMLElement, aroundNodeCorner: string, nodeCorner: string, size: Dojo.Size) => number): void;
}

// dijit/form

declare module Dijit
{
	module Form
	{
		interface _FormMixin
		{
			//state: string;

			"get"(name: "state"): string;
			"get"(name: string): any;

			"set"(name: "state", value: string): void;
			"set"(name: string, value: any): void;

			watch(prop: "state", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

			connectChildren(inStartup: boolean): void;
			reset(): void;
			validate(): void;
		}
	}
}

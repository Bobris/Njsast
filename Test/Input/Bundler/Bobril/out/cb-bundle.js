(function(undefined) {
    "use strict";
    var __export_isArray, emptyComponent, __export_assign, inSvg, inNotFocusable, updateCall, updateInstance, setValueCallback, vendors, testingDivStyle, mapping, isUnitlessNumber, focusableTag, tabindexStr, focusRootStack, focusRootTop, roots, hasNativeRaf, nativeRaf, __export_now, startTime, lastTickTime, ctxInvalidated, ctxDeepness, fullRecreateRequested, scheduled, initializing, uptimeMs, frameCounter, regEvents, listeningEventDeepness, emptyBeforeRenderCallback, beforeRenderCallback, beforeFrameCallback, reallyBeforeFrameCallback, afterFrameCallback, deferSyncUpdateRequested, RootComponent, nextIgnoreShouldChange, ignoringShouldChange, __export_invalidate, lastRootId, beforeInit, media, breaks, events, i, viewport, isAndroid, __export_asap, bValue, bSelectionStart, bSelectionEnd, tValue, prevSetValueCallback, mouseEvents, MoveOverIsNotTap, TapShouldBeShorterThanMs, MaxBustDelay, MaxBustDelayForIE, BustDistance, ownerCtx, onClickText, onDoubleClickText, pointersEventNames, name, j, pointersDown, toBust, firstPointerDown, firstPointerDownTime, firstPointerDownX, firstPointerDownY, tapCanceled, prevMousePath, clickingSpreeStart, clickingSpreeCount, bustingEventNames, bustingEventHandlers, mouseHandlerNames, wheelSupport, __export_ignoreClick, currentActiveElement, currentFocusedNode, nodeStack, callbacks, lastDndId, dnds, systemDnd, rootId, shimmedStyle, shimedStyleKeys, userSelectPropName, DndCtx, DndComp, DndRootComp, dndProto, pointer2Dnd, effectAllowedTable, __export_getDnds, waitingForPopHashChange, allStyles, dynamicSprites, imageCache, injectedCss, rebuildStyles, htmlStyle, isIE9, chainedBeforeFrame, cssSubRuleDelimiter, firstStyles, uppercasePattern, msPattern, rgbaRegex, currentCtx, registryEvents, rootIds, weirdPortrait, bodyCursorBackup, userSelectBackup;
    (function() {
        function BobrilCtx(data, me) {
            this.data = data;
            this.me = me;
            this.cfg = undefined;
            this.refs = undefined;
            this.disposables = undefined;
            this.$bobxCtx = undefined;
        }
        return BobrilCtx;
    })();
    __export_isArray = Array.isArray;
    emptyComponent = {};
    function createTextNode(content) {
        return document.createTextNode(content);
    }
    function createEl(name) {
        return document.createElement(name);
    }
    function null2undefined(value) {
        return value === null ? undefined : value;
    }
    function isNumber(val) {
        return typeof val == "number";
    }
    function isString(val) {
        return typeof val == "string";
    }
    function isFunction(val) {
        return typeof val == "function";
    }
    function isObject(val) {
        return typeof val === "object";
    }
    if (Object.assign == null) {
        Object.assign = function assign(target) {
            var _sources = [], _i, totalArgs, i_1, source, keys, totalKeys, j_1, key;
            for (_i = 1; _i < arguments.length; _i++) {
                _sources[_i - 1] = arguments[_i];
            }
            if (target == null) throw new TypeError("Target in assign cannot be undefined or null");
            totalArgs = arguments.length;
            for (i_1 = 1; i_1 < totalArgs; i_1++) {
                source = arguments[i_1];
                if (source == null) continue;
                keys = Object.keys(source);
                totalKeys = keys.length;
                for (j_1 = 0; j_1 < totalKeys; j_1++) {
                    key = keys[j_1];
                    target[key] = source[key];
                }
            }
            return target;
        };
    }
    __export_assign = Object.assign;
    inSvg = !1;
    inNotFocusable = !1;
    updateCall = [];
    updateInstance = [];
    setValueCallback = function(el, _node, newValue, oldValue) {
        if (newValue !== oldValue) el[tValue] = newValue;
    };
    function setSetValue(callback) {
        var prev = setValueCallback;
        setValueCallback = callback;
        return prev;
    }
    function newHashObj() {
        return Object.create(null);
    }
    vendors = [ "Webkit", "Moz", "ms", "O" ];
    testingDivStyle = document.createElement("div").style;
    function testPropExistence(name) {
        return isString(testingDivStyle[name]);
    }
    mapping = newHashObj();
    isUnitlessNumber = {
        boxFlex: !0,
        boxFlexGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexNegative: !0,
        flexPositive: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        strokeDashoffset: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    };
    function renamer(newName) {
        return function(style, value, oldName) {
            style[newName] = value;
            style[oldName] = undefined;
        };
    }
    function renamerPx(newName) {
        return function(style, value, oldName) {
            if (isNumber(value)) {
                style[newName] = value + "px";
            } else {
                style[newName] = value;
            }
            style[oldName] = undefined;
        };
    }
    function pxAdder(style, value, name) {
        if (isNumber(value)) style[name] = value + "px";
    }
    function ieVersion() {
        return document.documentMode;
    }
    function shimStyle(newValue) {
        var k, i, l, ki, mi, vi, titleCaseKi, j;
        k = Object.keys(newValue);
        for (i = 0, l = k.length; i < l; i++) {
            ki = k[i];
            mi = mapping[ki];
            vi = newValue[ki];
            if (vi === undefined) continue;
            if (mi === undefined) {
                if (testPropExistence(ki)) {
                    mi = isUnitlessNumber[ki] === !0 ? null : pxAdder;
                } else {
                    titleCaseKi = ki.replace(/^\w/, function(match) {
                        return match.toUpperCase();
                    });
                    for (j = 0; j < vendors.length; j++) {
                        if (testPropExistence(vendors[j] + titleCaseKi)) {
                            mi = (isUnitlessNumber[ki] === !0 ? renamer : renamerPx)(vendors[j] + titleCaseKi);
                            break;
                        }
                    }
                    if (mi === undefined) {
                        mi = isUnitlessNumber[ki] === !0 ? null : pxAdder;
                    }
                }
                mapping[ki] = mi;
            }
            if (mi !== null) mi(newValue, vi, ki);
        }
    }
    function removeProperty(s, name) {
        s[name] = "";
    }
    function setStyleProperty(s, name, value) {
        var len;
        if (isString(value)) {
            len = value.length;
            if (len > 11 && value.substr(len - 11, 11) === " !important") {
                s.setProperty(name, value.substr(0, len - 11), "important");
                return;
            }
        }
        s[name] = value;
    }
    function updateStyle(el, newStyle, oldStyle) {
        var s, rule, v;
        s = el.style;
        if (isObject(newStyle)) {
            shimStyle(newStyle);
            if (isObject(oldStyle)) {
                for (rule in oldStyle) {
                    if (!(rule in newStyle)) removeProperty(s, rule);
                }
                for (rule in newStyle) {
                    v = newStyle[rule];
                    if (v !== undefined) {
                        if (oldStyle[rule] !== v) setStyleProperty(s, rule, v);
                    } else {
                        removeProperty(s, rule);
                    }
                }
            } else {
                if (oldStyle) s.cssText = "";
                for (rule in newStyle) {
                    v = newStyle[rule];
                    if (v !== undefined) setStyleProperty(s, rule, v);
                }
            }
        } else if (newStyle) {
            s.cssText = newStyle;
        } else {
            if (isObject(oldStyle)) {
                for (rule in oldStyle) {
                    removeProperty(s, rule);
                }
            } else if (oldStyle) {
                s.cssText = "";
            }
        }
    }
    function setClassName(el, className) {
        if (inSvg) el.setAttribute("class", className); else el.className = className;
    }
    focusableTag = /^input$|^select$|^textarea$|^button$/;
    tabindexStr = "tabindex";
    function updateElement(n, el, newAttrs, oldAttrs, notFocusable) {
        var wasTabindex = !1, attrName, newAttr, oldAttr, valueOldAttr, valueNewAttr;
        if (newAttrs != null) for (attrName in newAttrs) {
            newAttr = newAttrs[attrName];
            oldAttr = oldAttrs[attrName];
            if (notFocusable && attrName === tabindexStr) {
                newAttr = -1;
                wasTabindex = !0;
            } else if (attrName === tValue && !inSvg) {
                if (isFunction(newAttr)) {
                    oldAttrs[bValue] = newAttr;
                    newAttr = newAttr();
                }
                valueOldAttr = oldAttr;
                valueNewAttr = newAttr;
                oldAttrs[attrName] = newAttr;
                continue;
            }
            if (oldAttr !== newAttr) {
                oldAttrs[attrName] = newAttr;
                if (inSvg) {
                    if (attrName === "href") el.setAttributeNS("http://www.w3.org/1999/xlink", "href", newAttr); else el.setAttribute(attrName, newAttr);
                } else if (attrName in el && !(attrName === "list" || attrName === "form")) {
                    el[attrName] = newAttr;
                } else el.setAttribute(attrName, newAttr);
            }
        }
        if (notFocusable && !wasTabindex && n.tag && focusableTag.test(n.tag)) {
            el.setAttribute(tabindexStr, "-1");
            oldAttrs[tabindexStr] = -1;
        }
        if (newAttrs == null) {
            for (attrName in oldAttrs) {
                if (oldAttrs[attrName] !== undefined) {
                    if (notFocusable && attrName === tabindexStr) continue;
                    if (attrName === bValue) continue;
                    oldAttrs[attrName] = undefined;
                    el.removeAttribute(attrName);
                }
            }
        } else {
            for (attrName in oldAttrs) {
                if (oldAttrs[attrName] !== undefined && !(attrName in newAttrs)) {
                    if (notFocusable && attrName === tabindexStr) continue;
                    if (attrName === bValue) continue;
                    oldAttrs[attrName] = undefined;
                    el.removeAttribute(attrName);
                }
            }
        }
        if (valueNewAttr !== undefined) {
            setValueCallback(el, n, valueNewAttr, valueOldAttr);
        }
        return oldAttrs;
    }
    function pushInitCallback(c) {
        var cc, fn;
        cc = c.component;
        if (cc) {
            fn = cc.postInitDom;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
        }
    }
    function pushUpdateCallback(c) {
        var cc, fn;
        cc = c.component;
        if (cc) {
            fn = cc.postUpdateDom;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
            fn = cc.postUpdateDomEverytime;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
        }
    }
    function pushUpdateEverytimeCallback(c) {
        var cc, fn;
        cc = c.component;
        if (cc) {
            fn = cc.postUpdateDomEverytime;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
        }
    }
    function findCfg(parent) {
        var cfg;
        while (parent) {
            cfg = parent.cfg;
            if (cfg !== undefined) break;
            if (parent.ctx) {
                cfg = parent.ctx.cfg;
                break;
            }
            parent = parent.parent;
        }
        return cfg;
    }
    function setRef(ref, value) {
        var ctx, refs;
        if (ref == null) return;
        if (isFunction(ref)) {
            ref(value);
            return;
        }
        ctx = ref[0];
        refs = ctx.refs;
        if (refs == null) {
            refs = newHashObj();
            ctx.refs = refs;
        }
        refs[ref[1]] = value;
    }
    focusRootStack = [];
    focusRootTop = null;
    function createNode(n, parentNode, createInto, createBefore) {
        var c, backupInSvg, backupInNotFocusable, component, ctx, tag, children, inSvgForeignObject, el, htmlText, before, elPrev, removeEl, parent, newElements, className;
        c = {
            tag: n.tag,
            key: n.key,
            ref: n.ref,
            className: n.className,
            style: n.style,
            attrs: n.attrs,
            children: n.children,
            component: n.component,
            data: n.data,
            cfg: undefined,
            parent: parentNode,
            element: undefined,
            ctx: undefined,
            orig: n
        };
        backupInSvg = inSvg;
        backupInNotFocusable = inNotFocusable;
        component = c.component;
        setRef(c.ref, c);
        if (component) {
            if (component.ctxClass) {
                ctx = new component.ctxClass(c.data || {}, c);
                if (ctx.data === undefined) ctx.data = c.data || {};
                if (ctx.me === undefined) ctx.me = c;
            } else {
                ctx = {
                    data: c.data || {},
                    me: c,
                    cfg: undefined
                };
            }
            ctx.cfg = n.cfg === undefined ? findCfg(parentNode) : n.cfg;
            c.ctx = ctx;
            currentCtx = ctx;
            if (component.init) {
                component.init(ctx, c);
            }
            if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(n, 0);
            if (component.render) {
                component.render(ctx, c);
            }
            currentCtx = undefined;
        } else {}
        tag = c.tag;
        if (tag === "-") {
            c.tag = undefined;
            c.children = undefined;
            return c;
        }
        children = c.children;
        inSvgForeignObject = !1;
        if (isNumber(children)) {
            children = "" + children;
            c.children = children;
        }
        if (tag === undefined) {
            if (isString(children)) {
                el = createTextNode(children);
                c.element = el;
                createInto.insertBefore(el, createBefore);
            } else {
                createChildren(c, createInto, createBefore);
            }
            if (component) {
                if (component.postRender) {
                    component.postRender(c.ctx, c);
                }
                pushInitCallback(c);
            }
            return c;
        }
        if (tag === "/") {
            htmlText = children;
            if (htmlText === "") {} else if (createBefore == null) {
                before = createInto.lastChild;
                createInto.insertAdjacentHTML("beforeend", htmlText);
                c.element = [];
                if (before) {
                    before = before.nextSibling;
                } else {
                    before = createInto.firstChild;
                }
                while (before) {
                    c.element.push(before);
                    before = before.nextSibling;
                }
            } else {
                el = createBefore;
                elPrev = createBefore.previousSibling;
                removeEl = !1;
                parent = createInto;
                if (!el.insertAdjacentHTML) {
                    el = parent.insertBefore(createEl("i"), el);
                    removeEl = !0;
                }
                el.insertAdjacentHTML("beforebegin", htmlText);
                if (elPrev) {
                    elPrev = elPrev.nextSibling;
                } else {
                    elPrev = parent.firstChild;
                }
                newElements = [];
                while (elPrev !== el) {
                    newElements.push(elPrev);
                    elPrev = elPrev.nextSibling;
                }
                c.element = newElements;
                if (removeEl) {
                    parent.removeChild(el);
                }
            }
            if (component) {
                if (component.postRender) {
                    component.postRender(c.ctx, c);
                }
                pushInitCallback(c);
            }
            return c;
        }
        if (inSvg || tag === "svg") {
            el = document.createElementNS("http://www.w3.org/2000/svg", tag);
            inSvgForeignObject = tag === "foreignObject";
            inSvg = !inSvgForeignObject;
        } else {
            el = createEl(tag);
        }
        createInto.insertBefore(el, createBefore);
        c.element = el;
        createChildren(c, el, null);
        if (component) {
            if (component.postRender) {
                component.postRender(c.ctx, c);
            }
        }
        if (inNotFocusable && focusRootTop === c) inNotFocusable = !1;
        if (inSvgForeignObject) inSvg = !0;
        if (c.attrs || inNotFocusable) c.attrs = updateElement(c, el, c.attrs, {}, inNotFocusable);
        if (c.style) updateStyle(el, c.style, undefined);
        className = c.className;
        if (className) setClassName(el, className);
        inSvg = backupInSvg;
        inNotFocusable = backupInNotFocusable;
        pushInitCallback(c);
        return c;
    }
    function normalizeNode(n) {
        if (n === !1 || n === !0 || n === null) return undefined;
        if (isString(n)) {
            return {
                children: n
            };
        }
        if (isNumber(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function createChildren(c, createInto, createBefore) {
        var ch, i, l, item;
        ch = c.children;
        if (!ch) return;
        if (!__export_isArray(ch)) {
            if (isString(ch)) {
                createInto.textContent = ch;
                return;
            }
            ch = [ ch ];
        }
        ch = ch.slice(0);
        i = 0;
        l = ch.length;
        while (i < l) {
            item = ch[i];
            if (__export_isArray(item)) {
                ch.splice.apply(ch, [ i, 1 ].concat(item));
                l = ch.length;
                continue;
            }
            item = normalizeNode(item);
            if (item == null) {
                ch.splice(i, 1);
                l--;
                continue;
            }
            ch[i] = createNode(item, c, createInto, createBefore);
            i++;
        }
        c.children = ch;
    }
    function destroyNode(c) {
        var ch, i_3, l, component, ctx, disposables, i_4, d;
        setRef(c.ref, null);
        ch = c.children;
        if (__export_isArray(ch)) {
            for (i_3 = 0, l = ch.length; i_3 < l; i_3++) {
                destroyNode(ch[i_3]);
            }
        }
        component = c.component;
        if (component) {
            ctx = c.ctx;
            currentCtx = ctx;
            if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(c, 3);
            if (component.destroy) component.destroy(ctx, c, c.element);
            disposables = ctx.disposables;
            if (__export_isArray(disposables)) {
                for (i_4 = disposables.length; i_4-- > 0; ) {
                    d = disposables[i_4];
                    if (isFunction(d)) d(ctx); else d.dispose();
                }
            }
        }
    }
    function removeNodeRecursive(c) {
        var el, pa, i_5, p, ch, i, l;
        el = c.element;
        if (__export_isArray(el)) {
            pa = el[0].parentNode;
            if (pa) {
                for (i_5 = 0; i_5 < el.length; i_5++) {
                    pa.removeChild(el[i_5]);
                }
            }
        } else if (el != null) {
            p = el.parentNode;
            if (p) p.removeChild(el);
        } else {
            ch = c.children;
            if (__export_isArray(ch)) {
                for (i = 0, l = ch.length; i < l; i++) {
                    removeNodeRecursive(ch[i]);
                }
            }
        }
    }
    function removeNode(c) {
        destroyNode(c);
        removeNodeRecursive(c);
    }
    roots = newHashObj();
    function nodeContainsNode(c, n, resIndex, res) {
        var el, ch, ii, i, result;
        el = c.element;
        ch = c.children;
        if (__export_isArray(el)) {
            for (ii = 0; ii < el.length; ii++) {
                if (el[ii] === n) {
                    res.push(c);
                    if (__export_isArray(ch)) {
                        return ch;
                    }
                    return null;
                }
            }
        } else if (el == null) {
            if (__export_isArray(ch)) {
                for (i = 0; i < ch.length; i++) {
                    result = nodeContainsNode(ch[i], n, resIndex, res);
                    if (result !== undefined) {
                        res.splice(resIndex, 0, c);
                        return result;
                    }
                }
            }
        } else if (el === n) {
            res.push(c);
            if (__export_isArray(ch)) {
                return ch;
            }
            return null;
        }
        return undefined;
    }
    function vdomPath(n) {
        var res = [], rootIds, rootElements, nodeStack, j, currentCacheArray, currentNode, rn, findResult, i, l, bn;
        if (n == null) return res;
        rootIds = Object.keys(roots);
        rootElements = rootIds.map(function(i) {
            return roots[i].e || document.body;
        });
        nodeStack = [];
        rootFound: while (n) {
            for (j = 0; j < rootElements.length; j++) {
                if (n === rootElements[j]) break rootFound;
            }
            nodeStack.push(n);
            n = n.parentNode;
        }
        if (!n || nodeStack.length === 0) return res;
        currentCacheArray = null;
        currentNode = nodeStack.pop();
        for (j = 0; j < rootElements.length; j++) {
            if (n === rootElements[j]) {
                rn = roots[rootIds[j]].n;
                if (rn === undefined) continue;
                findResult = nodeContainsNode(rn, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    break;
                }
            }
        }
        subtreeSearch: while (nodeStack.length) {
            currentNode = nodeStack.pop();
            if (currentCacheArray && currentCacheArray.length) for (i = 0, l = currentCacheArray.length; i < l; i++) {
                bn = currentCacheArray[i];
                findResult = nodeContainsNode(bn, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    continue subtreeSearch;
                }
            }
            res.push(null);
            break;
        }
        return res;
    }
    function deref(n) {
        var p, currentNode;
        p = vdomPath(n);
        currentNode = null;
        while (currentNode === null) {
            currentNode = p.pop();
        }
        return currentNode;
    }
    function finishUpdateNode(n, c, component) {
        if (component) {
            if (component.postRender) {
                currentCtx = c.ctx;
                component.postRender(currentCtx, n, c);
                currentCtx = undefined;
            }
        }
        c.data = n.data;
        pushUpdateCallback(c);
    }
    function finishUpdateNodeWithoutChange(c, createInto, createBefore) {
        var backupInSvg, backupInNotFocusable;
        currentCtx = undefined;
        if (__export_isArray(c.children)) {
            backupInSvg = inSvg;
            backupInNotFocusable = inNotFocusable;
            if (c.tag === "svg") {
                inSvg = !0;
            } else if (inSvg && c.tag === "foreignObject") inSvg = !1;
            if (inNotFocusable && focusRootTop === c) inNotFocusable = !1;
            selectedUpdate(c.children, c.element || createInto, c.element != null ? null : createBefore);
            inSvg = backupInSvg;
            inNotFocusable = backupInNotFocusable;
        }
        pushUpdateEverytimeCallback(c);
    }
    function updateNode(n, c, createInto, createBefore, deepness, inSelectedUpdate) {
        var component, bigChange = !1, ctx, locallyInvalidated, newChildren, cachedChildren, tag, backupInSvg, backupInNotFocusable, el, inSvgForeignObject, className, parEl, r;
        component = n.component;
        ctx = c.ctx;
        if (component != null && ctx != null) {
            locallyInvalidated = !1;
            if (ctx[ctxInvalidated] === frameCounter) {
                deepness = Math.max(deepness, ctx[ctxDeepness]);
                locallyInvalidated = !0;
            }
            if (component.id !== c.component.id) {
                bigChange = !0;
            } else {
                currentCtx = ctx;
                if (n.cfg !== undefined) ctx.cfg = n.cfg; else ctx.cfg = findCfg(c.parent);
                if (component.shouldChange) if (!component.shouldChange(ctx, n, c) && !ignoringShouldChange && !locallyInvalidated) {
                    finishUpdateNodeWithoutChange(c, createInto, createBefore);
                    return c;
                }
                ctx.data = n.data || {};
                c.component = component;
                if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(n, inSelectedUpdate ? 2 : 1);
                if (component.render) {
                    c.orig = n;
                    n = __export_assign({}, n);
                    c.cfg = undefined;
                    if (n.cfg !== undefined) n.cfg = undefined;
                    component.render(ctx, n, c);
                    if (n.cfg !== undefined) {
                        if (c.cfg === undefined) c.cfg = n.cfg; else __export_assign(c.cfg, n.cfg);
                    }
                }
                currentCtx = undefined;
            }
        } else {
            if (c.orig === n) {
                return c;
            }
            c.orig = n;
        }
        newChildren = n.children;
        cachedChildren = c.children;
        tag = n.tag;
        if (tag === "-") {
            finishUpdateNodeWithoutChange(c, createInto, createBefore);
            return c;
        }
        backupInSvg = inSvg;
        backupInNotFocusable = inNotFocusable;
        if (isNumber(newChildren)) {
            newChildren = "" + newChildren;
        }
        if (bigChange || component != null && ctx == null || component == null && ctx != null && ctx.me.component !== emptyComponent) {} else if (tag === "/") {
            if (c.tag === "/" && cachedChildren === newChildren) {
                finishUpdateNode(n, c, component);
                return c;
            }
        } else if (tag === c.tag) {
            if (tag === undefined) {
                if (isString(newChildren) && isString(cachedChildren)) {
                    if (newChildren !== cachedChildren) {
                        el = c.element;
                        el.textContent = newChildren;
                        c.children = newChildren;
                    }
                } else {
                    if (inNotFocusable && focusRootTop === c) inNotFocusable = !1;
                    if (deepness <= 0) {
                        if (__export_isArray(cachedChildren)) selectedUpdate(c.children, createInto, createBefore);
                    } else {
                        c.children = updateChildren(createInto, newChildren, cachedChildren, c, createBefore, deepness - 1);
                    }
                    inSvg = backupInSvg;
                    inNotFocusable = backupInNotFocusable;
                }
                finishUpdateNode(n, c, component);
                return c;
            } else {
                inSvgForeignObject = !1;
                if (tag === "svg") {
                    inSvg = !0;
                } else if (inSvg && tag === "foreignObject") {
                    inSvgForeignObject = !0;
                    inSvg = !1;
                }
                if (inNotFocusable && focusRootTop === c) inNotFocusable = !1;
                el = c.element;
                if (isString(newChildren) && !__export_isArray(cachedChildren)) {
                    if (newChildren !== cachedChildren) {
                        el.textContent = newChildren;
                        cachedChildren = newChildren;
                    }
                } else {
                    if (deepness <= 0) {
                        if (__export_isArray(cachedChildren)) selectedUpdate(c.children, el, createBefore);
                    } else {
                        cachedChildren = updateChildren(el, newChildren, cachedChildren, c, null, deepness - 1);
                    }
                }
                c.children = cachedChildren;
                if (inSvgForeignObject) inSvg = !0;
                finishUpdateNode(n, c, component);
                if (c.attrs || n.attrs || inNotFocusable) c.attrs = updateElement(c, el, n.attrs, c.attrs || {}, inNotFocusable);
                updateStyle(el, n.style, c.style);
                c.style = n.style;
                className = n.className;
                if (className !== c.className) {
                    setClassName(el, className || "");
                    c.className = className;
                }
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
                return c;
            }
        }
        parEl = c.element;
        if (__export_isArray(parEl)) parEl = parEl[0];
        if (parEl == null) parEl = createInto; else parEl = parEl.parentNode;
        r = createNode(n, c.parent, parEl, getDomNode(c));
        removeNode(c);
        return r;
    }
    function getDomNode(c) {
        var el, ch, i;
        if (c === undefined) return null;
        el = c.element;
        if (el != null) {
            if (__export_isArray(el)) return el[0];
            return el;
        }
        ch = c.children;
        if (!__export_isArray(ch)) return null;
        for (i = 0; i < ch.length; i++) {
            el = getDomNode(ch[i]);
            if (el) return el;
        }
        return null;
    }
    function findNextNode(a, i, len, def) {
        var ai, n;
        while (++i < len) {
            ai = a[i];
            if (ai == null) continue;
            n = getDomNode(ai);
            if (n != null) return n;
        }
        return def;
    }
    function callPostCallbacks() {
        var count, i, n;
        count = updateInstance.length;
        for (i = 0; i < count; i++) {
            n = updateInstance[i];
            currentCtx = n.ctx;
            updateCall[i].call(n.component, currentCtx, n, n.element);
        }
        currentCtx = undefined;
        updateCall = [];
        updateInstance = [];
    }
    function updateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
        cachedChildren[cachedIndex] = updateNode(newNode, cachedChildren[cachedIndex], element, findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore), deepness);
    }
    function reorderInUpdateChildrenRec(c, element, before) {
        var el, i, ch;
        el = c.element;
        if (el != null) {
            if (__export_isArray(el)) {
                for (i = 0; i < el.length; i++) {
                    element.insertBefore(el[i], before);
                }
            } else element.insertBefore(el, before);
            return;
        }
        ch = c.children;
        if (!__export_isArray(ch)) return;
        for (i = 0; i < ch.length; i++) {
            reorderInUpdateChildrenRec(ch[i], element, before);
        }
    }
    function reorderInUpdateChildren(cachedChildren, cachedIndex, cachedLength, createBefore, element) {
        var before, cur, what;
        before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
        cur = cachedChildren[cachedIndex];
        what = getDomNode(cur);
        if (what != null && what !== before) {
            reorderInUpdateChildrenRec(cur, element, before);
        }
    }
    function reorderAndUpdateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
        var before, cur, what;
        before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
        cur = cachedChildren[cachedIndex];
        what = getDomNode(cur);
        if (what != null && what !== before) {
            reorderInUpdateChildrenRec(cur, element, before);
        }
        cachedChildren[cachedIndex] = updateNode(newNode, cur, element, before, deepness);
    }
    function updateChildren(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
        var newCh, newLength, newIndex, item;
        if (newChildren == null) newChildren = [];
        if (!__export_isArray(newChildren)) {
            newChildren = [ newChildren ];
        }
        if (cachedChildren == null) cachedChildren = [];
        if (!__export_isArray(cachedChildren)) {
            if (element.firstChild) element.removeChild(element.firstChild);
            cachedChildren = [];
        }
        newCh = newChildren;
        newCh = newCh.slice(0);
        newLength = newCh.length;
        for (newIndex = 0; newIndex < newLength; ) {
            item = newCh[newIndex];
            if (__export_isArray(item)) {
                newCh.splice.apply(newCh, [ newIndex, 1 ].concat(item));
                newLength = newCh.length;
                continue;
            }
            item = normalizeNode(item);
            if (item == null) {
                newCh.splice(newIndex, 1);
                newLength--;
                continue;
            }
            newCh[newIndex] = item;
            newIndex++;
        }
        return updateChildrenCore(element, newCh, cachedChildren, parentNode, createBefore, deepness);
    }
    function updateChildrenCore(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
        var newEnd, cachedLength, cachedEnd, newIndex = 0, cachedIndex = 0, cachedKeys, newKeys, backupNewIndex, backupCachedIndex, deltaKeyless, node, key, keyLess, delta, cachedKey, akPos;
        newEnd = newChildren.length;
        cachedLength = cachedChildren.length;
        cachedEnd = cachedLength;
        while (newIndex < newEnd && cachedIndex < cachedEnd) {
            if (newChildren[newIndex].key === cachedChildren[cachedIndex].key) {
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
                continue;
            }
            while (!0) {
                if (newChildren[newEnd - 1].key === cachedChildren[cachedEnd - 1].key) {
                    newEnd--;
                    cachedEnd--;
                    updateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                    if (newIndex < newEnd && cachedIndex < cachedEnd) continue;
                }
                break;
            }
            if (newIndex < newEnd && cachedIndex < cachedEnd) {
                if (newChildren[newIndex].key === cachedChildren[cachedEnd - 1].key) {
                    cachedChildren.splice(cachedIndex, 0, cachedChildren[cachedEnd - 1]);
                    cachedChildren.splice(cachedEnd, 1);
                    reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                    newIndex++;
                    cachedIndex++;
                    continue;
                }
                if (newChildren[newEnd - 1].key === cachedChildren[cachedIndex].key) {
                    cachedChildren.splice(cachedEnd, 0, cachedChildren[cachedIndex]);
                    cachedChildren.splice(cachedIndex, 1);
                    cachedEnd--;
                    newEnd--;
                    reorderAndUpdateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                    continue;
                }
            }
            break;
        }
        if (cachedIndex === cachedEnd) {
            if (newIndex === newEnd) {
                return cachedChildren;
            }
            while (newIndex < newEnd) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                newIndex++;
            }
            return cachedChildren;
        }
        if (newIndex === newEnd) {
            while (cachedIndex < cachedEnd) {
                cachedEnd--;
                removeNode(cachedChildren[cachedEnd]);
                cachedChildren.splice(cachedEnd, 1);
            }
            return cachedChildren;
        }
        cachedKeys = newHashObj();
        newKeys = newHashObj();
        backupNewIndex = newIndex;
        backupCachedIndex = cachedIndex;
        deltaKeyless = 0;
        for (;cachedIndex < cachedEnd; cachedIndex++) {
            node = cachedChildren[cachedIndex];
            key = node.key;
            if (key != null) {
                cachedKeys[key] = cachedIndex;
            } else deltaKeyless--;
        }
        keyLess = -deltaKeyless - deltaKeyless;
        for (;newIndex < newEnd; newIndex++) {
            node = newChildren[newIndex];
            key = node.key;
            if (key != null) {
                newKeys[key] = newIndex;
            } else deltaKeyless++;
        }
        keyLess += deltaKeyless;
        delta = 0;
        newIndex = backupNewIndex;
        cachedIndex = backupCachedIndex;
        while (cachedIndex < cachedEnd && newIndex < newEnd) {
            if (cachedChildren[cachedIndex] === null) {
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                delta--;
                continue;
            }
            cachedKey = cachedChildren[cachedIndex].key;
            if (cachedKey == null) {
                cachedIndex++;
                continue;
            }
            key = newChildren[newIndex].key;
            if (key == null) {
                newIndex++;
                while (newIndex < newEnd) {
                    key = newChildren[newIndex].key;
                    if (key != null) break;
                    newIndex++;
                }
                if (key == null) break;
            }
            akPos = cachedKeys[key];
            if (akPos === undefined) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                delta++;
                newIndex++;
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                continue;
            }
            if (!(cachedKey in newKeys)) {
                removeNode(cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                delta--;
                cachedEnd--;
                cachedLength--;
                continue;
            }
            if (cachedIndex === akPos + delta) {
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
            } else {
                cachedChildren.splice(cachedIndex, 0, cachedChildren[akPos + delta]);
                delta++;
                cachedChildren[akPos + delta] = null;
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                newIndex++;
            }
        }
        while (cachedIndex < cachedEnd) {
            if (cachedChildren[cachedIndex] === null) {
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                continue;
            }
            if (cachedChildren[cachedIndex].key != null) {
                removeNode(cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                continue;
            }
            cachedIndex++;
        }
        while (newIndex < newEnd) {
            key = newChildren[newIndex].key;
            if (key != null) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                cachedEnd++;
                cachedLength++;
                delta++;
                cachedIndex++;
            }
            newIndex++;
        }
        if (!keyLess) return cachedChildren;
        keyLess = keyLess - Math.abs(deltaKeyless) >> 1;
        newIndex = backupNewIndex;
        cachedIndex = backupCachedIndex;
        while (newIndex < newEnd) {
            if (cachedIndex < cachedEnd) {
                cachedKey = cachedChildren[cachedIndex].key;
                if (cachedKey != null) {
                    cachedIndex++;
                    continue;
                }
            }
            key = newChildren[newIndex].key;
            if (newIndex < cachedEnd && key === cachedChildren[newIndex].key) {
                if (key != null) {
                    newIndex++;
                    continue;
                }
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
                keyLess--;
                newIndex++;
                cachedIndex = newIndex;
                continue;
            }
            if (key != null) {
                if (keyLess === 0 && deltaKeyless < 0) {
                    while (!0) {
                        removeNode(cachedChildren[cachedIndex]);
                        cachedChildren.splice(cachedIndex, 1);
                        cachedEnd--;
                        cachedLength--;
                        deltaKeyless++;
                        if (cachedChildren[cachedIndex].key != null) break;
                    }
                    continue;
                }
                while (cachedChildren[cachedIndex].key == null) cachedIndex++;
                cachedChildren[cachedIndex].key;
                cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex + 1, 1);
                reorderInUpdateChildren(cachedChildren, newIndex, cachedLength, createBefore, element);
                newIndex++;
                cachedIndex = newIndex;
                continue;
            }
            if (cachedIndex < cachedEnd) {
                cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex + 1, 1);
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
                keyLess--;
                newIndex++;
                cachedIndex++;
            } else {
                cachedChildren.splice(newIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, newIndex - 1, cachedLength, createBefore)));
                cachedEnd++;
                cachedLength++;
                newIndex++;
                cachedIndex++;
            }
        }
        while (cachedEnd > newIndex) {
            cachedEnd--;
            removeNode(cachedChildren[cachedEnd]);
            cachedChildren.splice(cachedEnd, 1);
        }
        return cachedChildren;
    }
    hasNativeRaf = !1;
    nativeRaf = window.requestAnimationFrame;
    if (nativeRaf) {
        nativeRaf(function(param) {
            if (param === +param) hasNativeRaf = !0;
        });
    }
    __export_now = Date.now || function() {
        return new Date().getTime();
    };
    startTime = __export_now();
    lastTickTime = 0;
    function requestAnimationFrame(callback) {
        var delay;
        if (hasNativeRaf) {
            nativeRaf(callback);
        } else {
            delay = 50 / 3 + lastTickTime - __export_now();
            if (delay < 0) delay = 0;
            window.setTimeout(function() {
                lastTickTime = __export_now();
                callback(lastTickTime - startTime);
            }, delay);
        }
    }
    ctxInvalidated = "$invalidated";
    ctxDeepness = "$deepness";
    fullRecreateRequested = !0;
    scheduled = !1;
    initializing = !0;
    uptimeMs = 0;
    frameCounter = 0;
    regEvents = {};
    function addEvent(name, priority, callback) {
        var list;
        if (registryEvents == null) registryEvents = {};
        list = registryEvents[name] || [];
        list.push({
            priority: priority,
            callback: callback
        });
        registryEvents[name] = list;
    }
    function emitEvent(name, ev, target, node) {
        var events, i;
        events = regEvents[name];
        if (events) for (i = 0; i < events.length; i++) {
            if (events[i](ev, target, node)) return !0;
        }
        return !1;
    }
    listeningEventDeepness = 0;
    function addListener(el, name) {
        var capture, eventName;
        if (name[0] == "!") return;
        capture = name[0] == "^";
        eventName = name;
        if (name[0] == "@") {
            eventName = name.slice(1);
            el = document;
        }
        if (capture) {
            eventName = name.slice(1);
        }
        function enhanceEvent(ev) {
            var t, n;
            ev = ev || window.event;
            t = ev.target || ev.srcElement || el;
            n = deref(t);
            listeningEventDeepness++;
            emitEvent(name, ev, t, n);
            listeningEventDeepness--;
            if (listeningEventDeepness == 0 && deferSyncUpdateRequested) syncUpdate();
        }
        if ("on" + eventName in window) el = window;
        el.addEventListener(eventName, enhanceEvent, capture);
    }
    function initEvents() {
        var eventNames, j, eventName, arr, body, i;
        if (registryEvents === undefined) return;
        eventNames = Object.keys(registryEvents);
        for (j = 0; j < eventNames.length; j++) {
            eventName = eventNames[j];
            arr = registryEvents[eventName];
            arr = arr.sort(function(a, b) {
                return a.priority - b.priority;
            });
            regEvents[eventName] = arr.map(function(v) {
                return v.callback;
            });
        }
        registryEvents = undefined;
        body = document.body;
        for (i = 0; i < eventNames.length; i++) {
            addListener(body, eventNames[i]);
        }
    }
    function selectedUpdate(cache, element, createBefore) {
        var len, i, node, ctx, backupInSvg, backupInNotFocusable;
        len = cache.length;
        for (i = 0; i < len; i++) {
            node = cache[i];
            ctx = node.ctx;
            if (ctx != null && ctx[ctxInvalidated] === frameCounter) {
                cache[i] = updateNode(node.orig, node, element, createBefore, ctx[ctxDeepness], !0);
            } else if (__export_isArray(node.children)) {
                backupInSvg = inSvg;
                backupInNotFocusable = inNotFocusable;
                if (inNotFocusable && focusRootTop === node) inNotFocusable = !1;
                if (node.tag === "svg") inSvg = !0; else if (inSvg && node.tag === "foreignObject") inSvg = !1;
                selectedUpdate(node.children, node.element || element, findNextNode(cache, i, len, createBefore));
                pushUpdateEverytimeCallback(node);
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
            }
        }
    }
    emptyBeforeRenderCallback = function() {};
    beforeRenderCallback = emptyBeforeRenderCallback;
    beforeFrameCallback = function() {};
    reallyBeforeFrameCallback = function() {};
    afterFrameCallback = function() {};
    function setBeforeFrame(callback) {
        var res = beforeFrameCallback;
        beforeFrameCallback = callback;
        return res;
    }
    function setAfterFrame(callback) {
        var res = afterFrameCallback;
        afterFrameCallback = callback;
        return res;
    }
    function isLogicalParent(parent, child, rootIds) {
        var p, i, r;
        while (child != null) {
            if (parent === child) return !0;
            p = child.parent;
            if (p == null) {
                for (i = 0; i < rootIds.length; i++) {
                    r = roots[rootIds[i]];
                    if (!r) continue;
                    if (r.n === child) {
                        p = r.p;
                        break;
                    }
                }
            }
            child = p;
        }
        return !1;
    }
    deferSyncUpdateRequested = !1;
    function syncUpdate() {
        deferSyncUpdateRequested = !1;
        internalUpdate(__export_now() - startTime);
    }
    function update(time) {
        scheduled = !1;
        internalUpdate(time);
    }
    RootComponent = createVirtualComponent({
        render: function(ctx, me) {
            var r, c;
            r = ctx.data;
            c = r.f(r);
            if (c === undefined) {
                me.tag = "-";
            } else {
                me.children = c;
            }
        }
    });
    function internalUpdate(time) {
        var fullRefresh, i, r, rc, insertBefore, j, rafter, node, r0;
        __export_now();
        initEvents();
        reallyBeforeFrameCallback();
        frameCounter++;
        ignoringShouldChange = nextIgnoreShouldChange;
        nextIgnoreShouldChange = !1;
        uptimeMs = time;
        beforeFrameCallback();
        focusRootTop = focusRootStack.length === 0 ? null : focusRootStack[focusRootStack.length - 1];
        inNotFocusable = !1;
        fullRefresh = !1;
        if (fullRecreateRequested) {
            fullRecreateRequested = !1;
            fullRefresh = !0;
        }
        rootIds = Object.keys(roots);
        for (i = 0; i < rootIds.length; i++) {
            r = roots[rootIds[i]];
            if (!r) continue;
            rc = r.n;
            insertBefore = null;
            for (j = i + 1; j < rootIds.length; j++) {
                rafter = roots[rootIds[j]];
                if (rafter === undefined) continue;
                insertBefore = getDomNode(rafter.n);
                if (insertBefore != null) break;
            }
            if (focusRootTop) inNotFocusable = !isLogicalParent(focusRootTop, r.p, rootIds);
            if (r.e === undefined) r.e = document.body;
            if (rc) {
                if (fullRefresh || rc.ctx[ctxInvalidated] === frameCounter) {
                    node = RootComponent(r);
                    updateNode(node, rc, r.e, insertBefore, fullRefresh ? 1000000 : rc.ctx[ctxDeepness]);
                } else {
                    if (__export_isArray(r.c)) selectedUpdate(r.c, r.e, insertBefore);
                }
            } else {
                node = RootComponent(r);
                rc = createNode(node, undefined, r.e, insertBefore);
                r.n = rc;
            }
            r.c = rc.children;
        }
        rootIds = undefined;
        callPostCallbacks();
        r0 = roots["0"];
        afterFrameCallback(r0 ? r0.c : null);
        __export_now();
    }
    nextIgnoreShouldChange = !1;
    ignoringShouldChange = !1;
    function ignoreShouldChange() {
        nextIgnoreShouldChange = !0;
        __export_invalidate();
    }
    function setInvalidate(inv) {
        var prev = __export_invalidate;
        __export_invalidate = inv;
        return prev;
    }
    __export_invalidate = function(ctx, deepness) {
        if (ctx != null) {
            if (deepness == undefined) deepness = 1000000;
            if (ctx[ctxInvalidated] !== frameCounter + 1) {
                ctx[ctxInvalidated] = frameCounter + 1;
                ctx[ctxDeepness] = deepness;
            } else {
                if (deepness > ctx[ctxDeepness]) ctx[ctxDeepness] = deepness;
            }
        } else {
            fullRecreateRequested = !0;
        }
        if (scheduled || initializing) return;
        scheduled = !0;
        requestAnimationFrame(update);
    };
    lastRootId = 0;
    function addRoot(factory, element, parent) {
        var rootId;
        lastRootId++;
        rootId = "" + lastRootId;
        roots[rootId] = {
            f: factory,
            e: element,
            c: [],
            p: parent,
            n: undefined
        };
        if (rootIds != null) {
            rootIds.push(rootId);
        } else {
            firstInvalidate();
        }
        return rootId;
    }
    function removeRoot(id) {
        var root = roots[id];
        if (!root) return;
        if (root.n) removeNode(root.n);
        delete roots[id];
    }
    function getRoots() {
        return roots;
    }
    function finishInitialize() {
        initializing = !1;
        __export_invalidate();
    }
    beforeInit = finishInitialize;
    function firstInvalidate() {
        initializing = !0;
        beforeInit();
        beforeInit = finishInitialize;
    }
    function init(factory, element) {
        removeRoot("0");
        roots["0"] = {
            f: factory,
            e: element,
            c: [],
            p: undefined,
            n: undefined
        };
        firstInvalidate();
    }
    function setBeforeInit(callback) {
        var prevBeforeInit = beforeInit;
        beforeInit = function() {
            callback(prevBeforeInit);
        };
    }
    function bubble(node, name, param) {
        var c, ctx, m;
        while (node) {
            c = node.component;
            if (c) {
                ctx = node.ctx;
                m = c[name];
                if (m) {
                    if (m.call(c, ctx, param)) return ctx;
                }
                m = c.shouldStopBubble;
                if (m) {
                    if (m.call(c, ctx, name, param)) break;
                }
            }
            node = node.parent;
        }
        return undefined;
    }
    function broadcastEventToNode(node, name, param) {
        var c, ctx, m, ch, i, res;
        if (!node) return undefined;
        c = node.component;
        if (c) {
            ctx = node.ctx;
            m = c[name];
            if (m) {
                if (m.call(c, ctx, param)) return ctx;
            }
            m = c.shouldStopBroadcast;
            if (m) {
                if (m.call(c, ctx, name, param)) return undefined;
            }
        }
        ch = node.children;
        if (__export_isArray(ch)) {
            for (i = 0; i < ch.length; i++) {
                res = broadcastEventToNode(ch[i], name, param);
                if (res != null) return res;
            }
        }
        return undefined;
    }
    function broadcast(name, param) {
        var k, i, ch, res;
        k = Object.keys(roots);
        for (i = 0; i < k.length; i++) {
            ch = roots[k[i]].n;
            if (ch != null) {
                res = broadcastEventToNode(ch, name, param);
                if (res != null) return res;
            }
        }
        return undefined;
    }
    function preventDefault(event) {
        var pd = event.preventDefault;
        if (pd) pd.call(event); else event.returnValue = !1;
    }
    function cloneNodeArray(a) {
        var i, n;
        a = a.slice(0);
        for (i = 0; i < a.length; i++) {
            n = a[i];
            if (__export_isArray(n)) {
                a[i] = cloneNodeArray(n);
            } else if (isObject(n)) {
                a[i] = cloneNode(n);
            }
        }
        return a;
    }
    function cloneNode(node) {
        var r, ch;
        r = __export_assign({}, node);
        if (r.attrs) {
            r.attrs = __export_assign({}, r.attrs);
        }
        if (isObject(r.style)) {
            r.style = __export_assign({}, r.style);
        }
        ch = r.children;
        if (ch) {
            if (__export_isArray(ch)) {
                r.children = cloneNodeArray(ch);
            } else if (isObject(ch)) {
                r.children = cloneNode(ch);
            }
        }
        return r;
    }
    function setStyleShim(name, action) {
        mapping[name] = action;
    }
    media = null;
    breaks = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function emitOnMediaChange() {
        media = null;
        __export_invalidate();
        return !1;
    }
    events = [ "resize", "orientationchange" ];
    for (i = 0; i < events.length; i++) addEvent(events[i], 10, emitOnMediaChange);
    viewport = window.document.documentElement;
    isAndroid = /Android/i.test(navigator.userAgent);
    function getMedia() {
        var w, h, o, p, op, device;
        if (media == null) {
            w = viewport.clientWidth;
            h = viewport.clientHeight;
            o = window.orientation;
            p = h >= w;
            if (o == null) o = p ? 0 : 90;
            if (isAndroid) {
                op = Math.abs(o) % 180 === 90;
                if (weirdPortrait == null) {
                    weirdPortrait = op === p;
                } else {
                    p = op === weirdPortrait;
                }
            }
            device = 0;
            while (w > breaks[+!p][device]) device++;
            media = {
                width: w,
                height: h,
                orientation: o,
                deviceCategory: device,
                portrait: p
            };
        }
        return media;
    }
    __export_asap = function() {
        var callbacks = [], onreadystatechange = "onreadystatechange", hiddenDiv, MESSAGE_PREFIX, hasPostMessage, onGlobalMessage, timeoutFn, scriptEl, timeout;
        function executeCallbacks() {
            var cbList, i, len;
            cbList = callbacks;
            callbacks = [];
            for (i = 0, len = cbList.length; i < len; i++) {
                cbList[i]();
            }
        }
        if (window.MutationObserver) {
            hiddenDiv = document.createElement("div");
            new MutationObserver(executeCallbacks).observe(hiddenDiv, {
                attributes: !0
            });
            return function(callback) {
                if (!callbacks.length) {
                    hiddenDiv.setAttribute("yes", "no");
                }
                callbacks.push(callback);
            };
        } else if (!window.setImmediate && window.postMessage && window.addEventListener) {
            MESSAGE_PREFIX = "basap" + Math.random();
            hasPostMessage = !1;
            onGlobalMessage = function(event) {
                if (event.source === window && event.data === MESSAGE_PREFIX) {
                    hasPostMessage = !1;
                    executeCallbacks();
                }
            };
            window.addEventListener("message", onGlobalMessage, !1);
            return function(fn) {
                callbacks.push(fn);
                if (!hasPostMessage) {
                    hasPostMessage = !0;
                    window.postMessage(MESSAGE_PREFIX, "*");
                }
            };
        } else if (!window.setImmediate && onreadystatechange in document.createElement("script")) {
            return function(callback) {
                callbacks.push(callback);
                if (!scriptEl) {
                    scriptEl = document.createElement("script");
                    scriptEl[onreadystatechange] = function() {
                        scriptEl[onreadystatechange] = null;
                        scriptEl.parentNode.removeChild(scriptEl);
                        scriptEl = null;
                        executeCallbacks();
                    };
                    document.body.appendChild(scriptEl);
                }
            };
        } else {
            timeoutFn = window.setImmediate || setTimeout;
            return function(callback) {
                callbacks.push(callback);
                if (!timeout) {
                    timeout = timeoutFn(function() {
                        timeout = undefined;
                        executeCallbacks();
                    }, 0);
                }
            };
        }
    }();
    if (!window.Promise) {
        (function() {
            function bind(fn, thisArg) {
                return function() {
                    fn.apply(thisArg, arguments);
                };
            }
            function handle(deferred) {
                var _this = this;
                if (this.s === null) {
                    this.d.push(deferred);
                    return;
                }
                __export_asap(function() {
                    var cb, ret;
                    cb = _this.s ? deferred[0] : deferred[1];
                    if (cb == null) {
                        (_this.s ? deferred[2] : deferred[3])(_this.v);
                        return;
                    }
                    try {
                        ret = cb(_this.v);
                    } catch (e) {
                        deferred[3](e);
                        return;
                    }
                    deferred[2](ret);
                });
            }
            function finale() {
                var i, len;
                for (i = 0, len = this.d.length; i < len; i++) {
                    handle.call(this, this.d[i]);
                }
                this.d = null;
            }
            function reject(newValue) {
                this.s = !1;
                this.v = newValue;
                finale.call(this);
            }
            function doResolve(fn, onFulfilled, onRejected) {
                var done = !1;
                try {
                    fn(function(value) {
                        if (done) return;
                        done = !0;
                        onFulfilled(value);
                    }, function(reason) {
                        if (done) return;
                        done = !0;
                        onRejected(reason);
                    });
                } catch (ex) {
                    if (done) return;
                    done = !0;
                    onRejected(ex);
                }
            }
            function resolve(newValue) {
                var then;
                try {
                    if (newValue === this) throw new TypeError("Promise self resolve");
                    if (Object(newValue) === newValue) {
                        then = newValue.then;
                        if (typeof then === "function") {
                            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                            return;
                        }
                    }
                    this.s = !0;
                    this.v = newValue;
                    finale.call(this);
                } catch (e) {
                    reject.call(this, e);
                }
            }
            function Promise(fn) {
                this.s = null;
                this.v = null;
                this.d = [];
                doResolve(fn, bind(resolve, this), bind(reject, this));
            }
            Promise.prototype.then = function(onFulfilled, onRejected) {
                var me = this;
                return new Promise(function(resolve, reject) {
                    handle.call(me, [ onFulfilled, onRejected, resolve, reject ]);
                });
            };
            Promise.prototype["catch"] = function(onRejected) {
                return this.then(undefined, onRejected);
            };
            Promise.all = function() {
                var args = [].slice.call(arguments.length === 1 && __export_isArray(arguments[0]) ? arguments[0] : arguments);
                return new Promise(function(resolve, reject) {
                    var remaining, i;
                    if (args.length === 0) {
                        resolve(args);
                        return;
                    }
                    remaining = args.length;
                    function res(i, val) {
                        var then;
                        try {
                            if (val && (typeof val === "object" || typeof val === "function")) {
                                then = val.then;
                                if (typeof then === "function") {
                                    then.call(val, function(val) {
                                        res(i, val);
                                    }, reject);
                                    return;
                                }
                            }
                            args[i] = val;
                            if (--remaining === 0) {
                                resolve(args);
                            }
                        } catch (ex) {
                            reject(ex);
                        }
                    }
                    for (i = 0; i < args.length; i++) {
                        res(i, args[i]);
                    }
                });
            };
            Promise.resolve = function(value) {
                if (value && typeof value === "object" && value.constructor === Promise) {
                    return value;
                }
                return new Promise(function(resolve) {
                    resolve(value);
                });
            };
            Promise.reject = function(value) {
                return new Promise(function(_resolve, reject) {
                    reject(value);
                });
            };
            Promise.race = function(values) {
                return new Promise(function(resolve, reject) {
                    var i, len;
                    for (i = 0, len = values.length; i < len; i++) {
                        values[i].then(resolve, reject);
                    }
                });
            };
            window["Promise"] = Promise;
        })();
    }
    if (ieVersion() === 9) {
        (function() {
            var simpleLinearGradient = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
            function addFilter(s, v) {
                var f;
                if (s.zoom == null) s.zoom = "1";
                f = s.filter;
                s.filter = f == null ? v : f + " " + v;
            }
            setStyleShim("background", function(s, v, oldName) {
                var match, dir, color1, color2, tmp;
                match = simpleLinearGradient.exec(v);
                if (match == null) return;
                dir = match[1];
                color1 = match[2];
                color2 = match[3];
                switch (dir) {
                  case "top":
                    dir = "0";
                    tmp = color1;
                    color1 = color2;
                    color2 = tmp;
                    break;

                  case "bottom":
                    dir = "0";
                    break;

                  case "left":
                    dir = "1";
                    tmp = color1;
                    color1 = color2;
                    color2 = tmp;
                    break;

                  case "right":
                    dir = "1";
                    break;

                  default:
                    return;
                }
                s[oldName] = "none";
                addFilter(s, 'progid:DXImageTransform.Microsoft.gradient(startColorstr=\'' + color1 + '\',endColorstr=\'' + color2 + '\', gradientType=\'' + dir + '\')');
            });
        })();
    } else {
        (function() {
            var testStyle = document.createElement("div").style;
            testStyle.cssText = "background:-webkit-linear-gradient(top,red,red)";
            if (testStyle.background.length > 0) {
                (function() {
                    var startsWithGradient = /^(?:repeating\-)?(?:linear|radial)\-gradient/gi, revDirs = {
                        top: "bottom",
                        bottom: "top",
                        left: "right",
                        right: "left"
                    };
                    function gradientWebkitConvertor(style, value, name) {
                        var pos, posEnd, dir;
                        if (startsWithGradient.test(value)) {
                            pos = value.indexOf("(to ");
                            if (pos > 0) {
                                pos += 4;
                                posEnd = value.indexOf(",", pos);
                                dir = value.slice(pos, posEnd);
                                dir = dir.split(" ").map(function(v) {
                                    return revDirs[v] || v;
                                }).join(" ");
                                value = value.slice(0, pos - 3) + dir + value.slice(posEnd);
                            }
                            value = "-webkit-" + value;
                        }
                        style[name] = value;
                    }
                    setStyleShim("background", gradientWebkitConvertor);
                })();
            }
        })();
    }
    bValue = "b$value";
    bSelectionStart = "b$selStart";
    bSelectionEnd = "b$selEnd";
    tValue = "value";
    function isCheckboxLike(el) {
        var t = el.type;
        return t === "checkbox" || t === "radio";
    }
    function stringArrayEqual(a1, a2) {
        var l, j;
        l = a1.length;
        if (l !== a2.length) return !1;
        for (j = 0; j < l; j++) {
            if (a1[j] !== a2[j]) return !1;
        }
        return !0;
    }
    function stringArrayContains(a, v) {
        var j;
        for (j = 0; j < a.length; j++) {
            if (a[j] === v) return !0;
        }
        return !1;
    }
    function selectedArray(options) {
        var res = [], j;
        for (j = 0; j < options.length; j++) {
            if (options[j].selected) res.push(options[j].value);
        }
        return res;
    }
    prevSetValueCallback = setSetValue(function(el, node, newValue, oldValue) {
        var tagName, isSelect, isInput, isMultiSelect, emitDiff, options, currentMulti, j, currentChecked, isCombobox, currentValue;
        tagName = el.tagName;
        isSelect = tagName === "SELECT";
        isInput = tagName === "INPUT" || tagName === "TEXTAREA";
        if (!isInput && !isSelect) {
            prevSetValueCallback(el, node, newValue, oldValue);
            return;
        }
        if (node.ctx === undefined) {
            node.ctx = {
                me: node
            };
            node.component = emptyComponent;
        }
        if (oldValue === undefined) {
            node.ctx[bValue] = newValue;
        }
        isMultiSelect = isSelect && el.multiple;
        emitDiff = !1;
        if (isMultiSelect) {
            options = el.options;
            currentMulti = selectedArray(options);
            if (!stringArrayEqual(newValue, currentMulti)) {
                if (oldValue === undefined || stringArrayEqual(currentMulti, oldValue) || !stringArrayEqual(newValue, node.ctx[bValue])) {
                    for (j = 0; j < options.length; j++) {
                        options[j].selected = stringArrayContains(newValue, options[j].value);
                    }
                    currentMulti = selectedArray(options);
                    if (stringArrayEqual(currentMulti, newValue)) {
                        emitDiff = !0;
                    }
                } else {
                    emitDiff = !0;
                }
            }
        } else if (isInput || isSelect) {
            if (isInput && isCheckboxLike(el)) {
                currentChecked = el.checked;
                if (newValue !== currentChecked) {
                    if (oldValue === undefined || currentChecked === oldValue || newValue !== node.ctx[bValue]) {
                        el.checked = newValue;
                    } else {
                        emitDiff = !0;
                    }
                }
            } else {
                isCombobox = isSelect && el.size < 2;
                currentValue = el[tValue];
                if (newValue !== currentValue) {
                    if (oldValue === undefined || currentValue === oldValue || newValue !== node.ctx[bValue]) {
                        if (isSelect) {
                            if (newValue === "") {
                                el.selectedIndex = isCombobox ? 0 : -1;
                            } else {
                                el[tValue] = newValue;
                            }
                            if (newValue !== "" || isCombobox) {
                                currentValue = el[tValue];
                                if (newValue !== currentValue) {
                                    emitDiff = !0;
                                }
                            }
                        } else {
                            el[tValue] = newValue;
                        }
                    } else {
                        emitDiff = !0;
                    }
                }
            }
        }
        if (emitDiff) {
            emitOnChange(undefined, el, node);
        } else {
            node.ctx[bValue] = newValue;
        }
    });
    function emitOnChange(ev, target, node) {
        var c, hasProp, hasOnChange, hasPropOrOnChange, hasOnSelectionChange, ctx, tagName, isSelect, isMultiSelect, vs, radios, j, radio, radioNode, rbHasProp, radioComponent, rbHasOnChange, radioCtx, vrb, vb, v, sStart, sEnd, sDir, swap, oStart, s;
        if (target && target.nodeName === "OPTION") {
            target = document.activeElement;
            node = deref(target);
        }
        if (!node) {
            return !1;
        }
        c = node.component;
        hasProp = node.attrs && node.attrs[bValue];
        hasOnChange = c && c.onChange != null;
        hasPropOrOnChange = hasProp || hasOnChange;
        hasOnSelectionChange = c && c.onSelectionChange != null;
        if (!hasPropOrOnChange && !hasOnSelectionChange) return !1;
        ctx = node.ctx;
        tagName = target.tagName;
        isSelect = tagName === "SELECT";
        isMultiSelect = isSelect && target.multiple;
        if (hasPropOrOnChange && isMultiSelect) {
            vs = selectedArray(target.options);
            if (!stringArrayEqual(ctx[bValue], vs)) {
                ctx[bValue] = vs;
                if (hasProp) hasProp(vs);
                if (hasOnChange) c.onChange(ctx, vs);
            }
        } else if (hasPropOrOnChange && isCheckboxLike(target)) {
            if (ev && ev.type === "change") {
                setTimeout(function() {
                    emitOnChange(undefined, target, node);
                }, 10);
                return !1;
            }
            if (target.type === "radio") {
                radios = document.getElementsByName(target.name);
                for (j = 0; j < radios.length; j++) {
                    radio = radios[j];
                    radioNode = deref(radio);
                    if (!radioNode) continue;
                    rbHasProp = node.attrs[bValue];
                    radioComponent = radioNode.component;
                    rbHasOnChange = radioComponent && radioComponent.onChange != null;
                    if (!rbHasProp && !rbHasOnChange) continue;
                    radioCtx = radioNode.ctx;
                    vrb = radio.checked;
                    if (radioCtx[bValue] !== vrb) {
                        radioCtx[bValue] = vrb;
                        if (rbHasProp) rbHasProp(vrb);
                        if (rbHasOnChange) radioComponent.onChange(radioCtx, vrb);
                    }
                }
            } else {
                vb = target.checked;
                if (ctx[bValue] !== vb) {
                    ctx[bValue] = vb;
                    if (hasProp) hasProp(vb);
                    if (hasOnChange) c.onChange(ctx, vb);
                }
            }
        } else {
            if (hasPropOrOnChange) {
                v = target.value;
                if (ctx[bValue] !== v) {
                    ctx[bValue] = v;
                    if (hasProp) hasProp(v);
                    if (hasOnChange) c.onChange(ctx, v);
                }
            }
            if (hasOnSelectionChange) {
                sStart = target.selectionStart;
                sEnd = target.selectionEnd;
                sDir = target.selectionDirection;
                swap = !1;
                oStart = ctx[bSelectionStart];
                if (sDir == null) {
                    if (sEnd === oStart) swap = !0;
                } else if (sDir === "backward") {
                    swap = !0;
                }
                if (swap) {
                    s = sStart;
                    sStart = sEnd;
                    sEnd = s;
                }
                emitOnSelectionChange(node, sStart, sEnd);
            }
        }
        return !1;
    }
    function emitOnSelectionChange(node, start, end) {
        var c, ctx;
        c = node.component;
        ctx = node.ctx;
        if (c && (ctx[bSelectionStart] !== start || ctx[bSelectionEnd] !== end)) {
            ctx[bSelectionStart] = start;
            ctx[bSelectionEnd] = end;
            if (c.onSelectionChange) c.onSelectionChange(ctx, {
                startPosition: start,
                endPosition: end
            });
        }
    }
    function emitOnMouseChange(ev, _target, _node) {
        var f = focused();
        if (f) emitOnChange(ev, f.element, f);
        return !1;
    }
    events = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (i = 0; i < events.length; i++) addEvent(events[i], 10, emitOnChange);
    mouseEvents = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (i = 0; i < mouseEvents.length; i++) addEvent(mouseEvents[i], 2, emitOnMouseChange);
    function buildParam(ev) {
        return {
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || !1,
            which: ev.which || ev.keyCode
        };
    }
    function emitOnKeyDown(ev, _target, node) {
        var param;
        if (!node) return !1;
        param = buildParam(ev);
        if (bubble(node, "onKeyDown", param)) {
            preventDefault(ev);
            return !0;
        }
        return !1;
    }
    function emitOnKeyUp(ev, _target, node) {
        var param;
        if (!node) return !1;
        param = buildParam(ev);
        if (bubble(node, "onKeyUp", param)) {
            preventDefault(ev);
            return !0;
        }
        return !1;
    }
    function emitOnKeyPress(ev, _target, node) {
        var param;
        if (!node) return !1;
        if (ev.which === 0) return !1;
        param = {
            charCode: ev.which || ev.keyCode
        };
        if (bubble(node, "onKeyPress", param)) {
            preventDefault(ev);
            return !0;
        }
        return !1;
    }
    addEvent("keydown", 50, emitOnKeyDown);
    addEvent("keyup", 50, emitOnKeyUp);
    addEvent("keypress", 50, emitOnKeyPress);
    MoveOverIsNotTap = 13;
    TapShouldBeShorterThanMs = 750;
    MaxBustDelay = 500;
    MaxBustDelayForIE = 800;
    BustDistance = 50;
    ownerCtx = null;
    onClickText = "onClick";
    onDoubleClickText = "onDoubleClick";
    function invokeMouseOwner(handlerName, param) {
        var handler, stop;
        if (ownerCtx == null) {
            return !1;
        }
        handler = ownerCtx.me.component[handlerName];
        if (!handler) {
            return !1;
        }
        stop = handler(ownerCtx, param);
        return stop;
    }
    function hasPointerEventsNoneB(node) {
        var s, e;
        while (node) {
            s = node.style;
            if (s) {
                e = s.pointerEvents;
                if (e !== undefined) {
                    if (e === "none") return !0;
                    return !1;
                }
            }
            node = node.parent;
        }
        return !1;
    }
    function hasPointerEventsNone(target) {
        var bNode = deref(target);
        return hasPointerEventsNoneB(bNode);
    }
    function revertVisibilityChanges(hiddenEls) {
        var i;
        if (hiddenEls.length) {
            for (i = hiddenEls.length - 1; i >= 0; --i) {
                hiddenEls[i].t.style.visibility = hiddenEls[i].p;
            }
            return !0;
        }
        return !1;
    }
    function pushAndHide(hiddenEls, t) {
        hiddenEls.push({
            t: t,
            p: t.style.visibility
        });
        t.style.visibility = "hidden";
    }
    function pointerThroughIE(ev, target, _node) {
        var hiddenEls = [], t;
        t = target;
        while (hasPointerEventsNone(t)) {
            pushAndHide(hiddenEls, t);
            t = document.elementFromPoint(ev.x, ev.y);
        }
        if (revertVisibilityChanges(hiddenEls)) {
            try {
                t.dispatchEvent(ev);
            } catch (e) {
                return !1;
            }
            preventDefault(ev);
            return !0;
        }
        return !1;
    }
    function addEvent5(name, callback) {
        addEvent(name, 5, callback);
    }
    pointersEventNames = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    if (ieVersion() && ieVersion() < 11) {
        mouseEvents = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (i = 0; i < mouseEvents.length; ++i) {
            addEvent(mouseEvents[i], 1, pointerThroughIE);
        }
    }
    function type2Bobril(t) {
        if (t === "mouse" || t === 4) return 0;
        if (t === "pen" || t === 3) return 2;
        return 1;
    }
    function pointerEventsNoneFix(x, y, target, node) {
        var hiddenEls = [], t;
        t = target;
        while (hasPointerEventsNoneB(node)) {
            pushAndHide(hiddenEls, t);
            t = document.elementFromPoint(x, y);
            node = deref(t);
        }
        revertVisibilityChanges(hiddenEls);
        return [ t, node ];
    }
    function buildHandlerPointer(name) {
        return function handlePointerDown(ev, target, node) {
            var fixed, button, type, buttons, param;
            if (hasPointerEventsNoneB(node)) {
                fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                target = fixed[0];
                node = fixed[1];
            }
            button = ev.button + 1;
            type = type2Bobril(ev.pointerType);
            buttons = ev.buttons;
            if (button === 0 && type === 0 && buttons) {
                button = 1;
                while (!(buttons & 1)) {
                    buttons = buttons >> 1;
                    button++;
                }
            }
            param = {
                id: ev.pointerId,
                type: type,
                x: ev.clientX,
                y: ev.clientY,
                button: button,
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || !1,
                count: ev.detail
            };
            if (emitEvent("!" + name, param, target, node)) {
                preventDefault(ev);
                return !0;
            }
            return !1;
        };
    }
    function buildHandlerTouch(name) {
        return function handlePointerDown(ev, target, node) {
            var preventDef = !1, i, t, param;
            for (i = 0; i < ev.changedTouches.length; i++) {
                t = ev.changedTouches[i];
                target = document.elementFromPoint(t.clientX, t.clientY);
                node = deref(target);
                param = {
                    id: t.identifier + 2,
                    type: 1,
                    x: t.clientX,
                    y: t.clientY,
                    button: 1,
                    shift: ev.shiftKey,
                    ctrl: ev.ctrlKey,
                    alt: ev.altKey,
                    meta: ev.metaKey || !1,
                    count: ev.detail
                };
                if (emitEvent("!" + name, param, target, node)) preventDef = !0;
            }
            if (preventDef) {
                preventDefault(ev);
                return !0;
            }
            return !1;
        };
    }
    function buildHandlerMouse(name) {
        return function handlePointer(ev, target, node) {
            var fixed, param;
            target = document.elementFromPoint(ev.clientX, ev.clientY);
            node = deref(target);
            if (hasPointerEventsNoneB(node)) {
                fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                target = fixed[0];
                node = fixed[1];
            }
            param = {
                id: 1,
                type: 0,
                x: ev.clientX,
                y: ev.clientY,
                button: decodeButton(ev),
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || !1,
                count: ev.detail
            };
            if (emitEvent("!" + name, param, target, node)) {
                preventDefault(ev);
                return !0;
            }
            return !1;
        };
    }
    function listenMouse() {
        addEvent5("mousedown", buildHandlerMouse(pointersEventNames[0]));
        addEvent5("mousemove", buildHandlerMouse(pointersEventNames[1]));
        addEvent5("mouseup", buildHandlerMouse(pointersEventNames[2]));
    }
    if (window.ontouchstart !== undefined) {
        addEvent5("touchstart", buildHandlerTouch(pointersEventNames[0]));
        addEvent5("touchmove", buildHandlerTouch(pointersEventNames[1]));
        addEvent5("touchend", buildHandlerTouch(pointersEventNames[2]));
        addEvent5("touchcancel", buildHandlerTouch(pointersEventNames[3]));
        listenMouse();
    } else if (window.onpointerdown !== undefined) {
        for (i = 0; i < 4; i++) {
            name = pointersEventNames[i];
            addEvent5(name.toLowerCase(), buildHandlerPointer(name));
        }
    } else if (window.onmspointerdown !== undefined) {
        for (i = 0; i < 4; i++) {
            name = pointersEventNames[i];
            addEvent5("@MS" + name, buildHandlerPointer(name));
        }
    } else {
        listenMouse();
    }
    for (j = 0; j < 4; j++) {
        (function(name) {
            var onName = "on" + name;
            addEvent("!" + name, 50, function(ev, _target, node) {
                return invokeMouseOwner(onName, ev) || bubble(node, onName, ev) != null;
            });
        })(pointersEventNames[j]);
    }
    pointersDown = newHashObj();
    toBust = [];
    firstPointerDown = -1;
    firstPointerDownTime = 0;
    firstPointerDownX = 0;
    firstPointerDownY = 0;
    tapCanceled = !1;
    function diffLess(n1, n2, diff) {
        return Math.abs(n1 - n2) < diff;
    }
    prevMousePath = [];
    function mouseEnterAndLeave(ev) {
        var t, toPath, node, fixed, common, i, n, c;
        t = document.elementFromPoint(ev.x, ev.y);
        toPath = vdomPath(t);
        node = toPath.length == 0 ? undefined : toPath[toPath.length - 1];
        if (hasPointerEventsNoneB(node)) {
            fixed = pointerEventsNoneFix(ev.x, ev.y, t, node == null ? undefined : node);
            t = fixed[0];
            toPath = vdomPath(t);
        }
        bubble(node, "onMouseOver", ev);
        common = 0;
        while (common < prevMousePath.length && common < toPath.length && prevMousePath[common] === toPath[common]) common++;
        i = prevMousePath.length;
        if (i > 0) {
            n = prevMousePath[i - 1];
            if (n) {
                c = n.component;
                if (c && c.onMouseOut) c.onMouseOut(n.ctx, ev);
            }
        }
        while (i > common) {
            i--;
            n = prevMousePath[i];
            if (n) {
                c = n.component;
                if (c && c.onMouseLeave) c.onMouseLeave(n.ctx, ev);
            }
        }
        while (i < toPath.length) {
            n = toPath[i];
            if (n) {
                c = n.component;
                if (c && c.onMouseEnter) c.onMouseEnter(n.ctx, ev);
            }
            i++;
        }
        prevMousePath = toPath;
        if (i > 0) {
            n = prevMousePath[i - 1];
            if (n) {
                c = n.component;
                if (c && c.onMouseIn) c.onMouseIn(n.ctx, ev);
            }
        }
        return !1;
    }
    function noPointersDown() {
        return Object.keys(pointersDown).length === 0;
    }
    function bustingPointerDown(ev, _target, _node) {
        if (firstPointerDown === -1 && noPointersDown()) {
            firstPointerDown = ev.id;
            firstPointerDownTime = __export_now();
            firstPointerDownX = ev.x;
            firstPointerDownY = ev.y;
            tapCanceled = !1;
            mouseEnterAndLeave(ev);
        }
        pointersDown[ev.id] = ev.type;
        if (firstPointerDown !== ev.id) {
            tapCanceled = !0;
        }
        return !1;
    }
    function bustingPointerMove(ev, target, node) {
        if (ev.type === 0 && ev.button === 0 && pointersDown[ev.id] != null) {
            ev.button = 1;
            emitEvent("!PointerUp", ev, target, node);
            ev.button = 0;
        }
        if (firstPointerDown === ev.id) {
            mouseEnterAndLeave(ev);
            if (!diffLess(firstPointerDownX, ev.x, MoveOverIsNotTap) || !diffLess(firstPointerDownY, ev.y, MoveOverIsNotTap)) tapCanceled = !0;
        } else if (noPointersDown()) {
            mouseEnterAndLeave(ev);
        }
        return !1;
    }
    clickingSpreeStart = 0;
    clickingSpreeCount = 0;
    function shouldPreventClickingSpree(clickCount) {
        var n;
        if (clickingSpreeCount == 0) return !1;
        n = __export_now();
        if (n < clickingSpreeStart + 1000 && clickCount >= clickingSpreeCount) {
            clickingSpreeStart = n;
            clickingSpreeCount = clickCount;
            return !0;
        }
        clickingSpreeCount = 0;
        return !1;
    }
    function bustingPointerUp(ev, target, node) {
        var handled, delay;
        delete pointersDown[ev.id];
        if (firstPointerDown == ev.id) {
            mouseEnterAndLeave(ev);
            firstPointerDown = -1;
            if (ev.type == 1 && !tapCanceled) {
                if (__export_now() - firstPointerDownTime < TapShouldBeShorterThanMs) {
                    emitEvent("!PointerCancel", ev, target, node);
                    shouldPreventClickingSpree(1);
                    handled = invokeMouseOwner(onClickText, ev) || bubble(node, onClickText, ev) != null;
                    delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
                    toBust.push([ ev.x, ev.y, __export_now() + delay, handled ? 1 : 0 ]);
                    return handled;
                }
            }
        }
        return !1;
    }
    function bustingPointerCancel(ev, _target, _node) {
        delete pointersDown[ev.id];
        if (firstPointerDown == ev.id) {
            firstPointerDown = -1;
        }
        return !1;
    }
    function bustingClick(ev, _target, _node) {
        var n, i, j;
        n = __export_now();
        for (i = 0; i < toBust.length; i++) {
            j = toBust[i];
            if (j[2] < n) {
                toBust.splice(i, 1);
                i--;
                continue;
            }
            if (diffLess(j[0], ev.clientX, BustDistance) && diffLess(j[1], ev.clientY, BustDistance)) {
                toBust.splice(i, 1);
                if (j[3]) preventDefault(ev);
                return !0;
            }
        }
        return !1;
    }
    bustingEventNames = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    bustingEventHandlers = [ bustingPointerDown, bustingPointerMove, bustingPointerUp, bustingPointerCancel, bustingClick ];
    for (i = 0; i < 5; i++) {
        addEvent(bustingEventNames[i], 3, bustingEventHandlers[i]);
    }
    function createHandlerMouse(handlerName) {
        return function(ev, _target, node) {
            if (firstPointerDown != ev.id && !noPointersDown()) return !1;
            if (invokeMouseOwner(handlerName, ev) || bubble(node, handlerName, ev)) {
                return !0;
            }
            return !1;
        };
    }
    mouseHandlerNames = [ "Down", "Move", "Up", "Up" ];
    for (i = 0; i < 4; i++) {
        addEvent(bustingEventNames[i], 80, createHandlerMouse("onMouse" + mouseHandlerNames[i]));
    }
    function decodeButton(ev) {
        return ev.which || ev.button;
    }
    function createHandler(handlerName, allButtons) {
        return function(ev, target, node) {
            var fixed, button, param;
            if (listeningEventDeepness == 1 && (target.nodeName != "INPUT" || ev.clientX != 0 || ev.clientY != 0)) {
                target = document.elementFromPoint(ev.clientX, ev.clientY);
                node = deref(target);
                if (hasPointerEventsNoneB(node)) {
                    fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                    target = fixed[0];
                    node = fixed[1];
                }
            }
            button = decodeButton(ev) || 1;
            if (!allButtons && button !== 1) return !1;
            param = {
                x: ev.clientX,
                y: ev.clientY,
                button: button,
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || !1,
                count: ev.detail || 1
            };
            if (handlerName == onDoubleClickText) param.count = 2;
            if (shouldPreventClickingSpree(param.count) || invokeMouseOwner(handlerName, param) || bubble(node, handlerName, param)) {
                preventDefault(ev);
                return !0;
            }
            return !1;
        };
    }
    function nodeOnPoint(x, y) {
        var target, node, fixed;
        target = document.elementFromPoint(x, y);
        node = deref(target);
        if (hasPointerEventsNoneB(node)) {
            fixed = pointerEventsNoneFix(x, y, target, node);
            node = fixed[1];
        }
        return node;
    }
    function handleSelectStart(ev, _target, node) {
        var s, us;
        while (node) {
            s = node.style;
            if (s) {
                us = s.userSelect;
                if (us === "none") {
                    preventDefault(ev);
                    return !0;
                }
                if (us) {
                    break;
                }
            }
            node = node.parent;
        }
        return !1;
    }
    addEvent5("selectstart", handleSelectStart);
    addEvent5("^click", createHandler(onClickText));
    addEvent5("^dblclick", createHandler(onDoubleClickText));
    addEvent5("contextmenu", createHandler("onContextMenu", !0));
    wheelSupport = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function handleMouseWheel(ev, target, node) {
        var fixed, button, buttons, dx, dy, param;
        if (hasPointerEventsNoneB(node)) {
            fixed = pointerEventsNoneFix(ev.x, ev.y, target, node);
            target = fixed[0];
            node = fixed[1];
        }
        button = ev.button + 1;
        buttons = ev.buttons;
        if (button === 0 && buttons) {
            button = 1;
            while (!(buttons & 1)) {
                buttons = buttons >> 1;
                button++;
            }
        }
        dx = 0;
        if (wheelSupport == "mousewheel") {
            dy = -1 / 40 * ev.wheelDelta;
            ev.wheelDeltaX && (dx = -1 / 40 * ev.wheelDeltaX);
        } else {
            dx = ev.deltaX;
            dy = ev.deltaY;
        }
        param = {
            dx: dx,
            dy: dy,
            x: ev.clientX,
            y: ev.clientY,
            button: button,
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || !1,
            count: ev.detail
        };
        if (invokeMouseOwner("onMouseWheel", param) || bubble(node, "onMouseWheel", param)) {
            preventDefault(ev);
            return !0;
        }
        return !1;
    }
    addEvent5(wheelSupport, handleMouseWheel);
    __export_ignoreClick = function(x, y) {
        var delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
        toBust.push([ x, y, __export_now() + delay, 1 ]);
    };
    currentActiveElement = undefined;
    currentFocusedNode = undefined;
    nodeStack = [];
    function emitOnFocusChange(inFocus) {
        var newActiveElement, newStack, common, i, n, c;
        newActiveElement = document.hasFocus() || inFocus ? document.activeElement : undefined;
        if (newActiveElement !== currentActiveElement) {
            currentActiveElement = newActiveElement;
            newStack = vdomPath(currentActiveElement);
            common = 0;
            while (common < nodeStack.length && common < newStack.length && nodeStack[common] === newStack[common]) common++;
            i = nodeStack.length - 1;
            if (i >= common) {
                n = nodeStack[i];
                if (n) {
                    c = n.component;
                    if (c && c.onBlur) c.onBlur(n.ctx);
                }
                i--;
            }
            while (i >= common) {
                n = nodeStack[i];
                if (n) {
                    c = n.component;
                    if (c && c.onFocusOut) c.onFocusOut(n.ctx);
                }
                i--;
            }
            i = common;
            while (i + 1 < newStack.length) {
                n = newStack[i];
                if (n) {
                    c = n.component;
                    if (c && c.onFocusIn) c.onFocusIn(n.ctx);
                }
                i++;
            }
            if (i < newStack.length) {
                n = newStack[i];
                if (n) {
                    c = n.component;
                    if (c && c.onFocus) c.onFocus(n.ctx);
                }
                i++;
            }
            nodeStack = newStack;
            currentFocusedNode = nodeStack.length == 0 ? undefined : null2undefined(nodeStack[nodeStack.length - 1]);
        }
        return !1;
    }
    function emitOnFocusChangeDelayed() {
        setTimeout(function() {
            return emitOnFocusChange(!1);
        }, 10);
        return !1;
    }
    addEvent("^focus", 50, function() {
        return emitOnFocusChange(!0);
    });
    addEvent("^blur", 50, emitOnFocusChangeDelayed);
    function focused() {
        return currentFocusedNode;
    }
    callbacks = [];
    function emitOnScroll(_ev, _target, node) {
        var info, i;
        info = {
            node: node
        };
        for (i = 0; i < callbacks.length; i++) {
            callbacks[i](info);
        }
        return !1;
    }
    addEvent("^scroll", 10, emitOnScroll);
    (function() {
        function CSSMatrix(data) {
            this.data = data;
        }
        CSSMatrix.fromString = function(s) {
            var c = s.match(/matrix3?d?\(([^\)]+)\)/i)[1].split(",");
            if (c.length === 6) {
                c = [ c[0], c[1], "0", "0", c[2], c[3], "0", "0", "0", "0", "1", "0", c[4], c[5], "0", "1" ];
            }
            return new CSSMatrix([ parseFloat(c[0]), parseFloat(c[4]), parseFloat(c[8]), parseFloat(c[12]), parseFloat(c[1]), parseFloat(c[5]), parseFloat(c[9]), parseFloat(c[13]), parseFloat(c[2]), parseFloat(c[6]), parseFloat(c[10]), parseFloat(c[14]), parseFloat(c[3]), parseFloat(c[7]), parseFloat(c[11]), parseFloat(c[15]) ]);
        };
        CSSMatrix.identity = function() {
            return new CSSMatrix([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
        };
        CSSMatrix.prototype.multiply = function(m) {
            var a = this.data, b;
            b = m.data;
            return new CSSMatrix([ a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12], a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13], a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14], a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15], a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12], a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13], a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14], a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15], a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12], a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13], a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14], a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15], a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12], a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13], a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14], a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15] ]);
        };
        CSSMatrix.prototype.translate = function(tx, ty, tz) {
            var z = new CSSMatrix([ 1, 0, 0, tx, 0, 1, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1 ]);
            return this.multiply(z);
        };
        CSSMatrix.prototype.inverse = function() {
            var m = this.data, a = m[0], b = m[1], c = m[2], d = m[4], e = m[5], f = m[6], g = m[8], h = m[9], k = m[10], A = e * k - f * h, B = f * g - d * k, C = d * h - e * g, D = c * h - b * k, E = a * k - c * g, F = b * g - a * h, G = b * f - c * e, H = c * d - a * f, K = a * e - b * d, det = a * A + b * B + c * C, X, Y;
            X = new CSSMatrix([ A / det, D / det, G / det, 0, B / det, E / det, H / det, 0, C / det, F / det, K / det, 0, 0, 0, 0, 1 ]);
            Y = new CSSMatrix([ 1, 0, 0, -m[3], 0, 1, 0, -m[7], 0, 0, 1, -m[11], 0, 0, 0, 1 ]);
            return X.multiply(Y);
        };
        CSSMatrix.prototype.transformPoint = function(x, y) {
            var m = this.data;
            return [ m[0] * x + m[1] * y + m[3], m[4] * x + m[5] * y + m[7] ];
        };
        return CSSMatrix;
    })();
    lastDndId = 0;
    dnds = [];
    systemDnd = null;
    rootId = null;
    shimmedStyle = {
        userSelect: ""
    };
    shimStyle(shimmedStyle);
    shimedStyleKeys = Object.keys(shimmedStyle);
    userSelectPropName = shimedStyleKeys[shimedStyleKeys.length - 1];
    DndCtx = function(pointerId) {
        this.id = ++lastDndId;
        this.pointerid = pointerId;
        this.enabledOperations = 7;
        this.operation = 0;
        this.started = !1;
        this.beforeDrag = !0;
        this.local = !0;
        this.system = !1;
        this.ended = !1;
        this.cursor = null;
        this.overNode = undefined;
        this.targetCtx = null;
        this.dragView = undefined;
        this.startX = 0;
        this.startY = 0;
        this.distanceToStart = 10;
        this.x = 0;
        this.y = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.totalX = 0;
        this.totalY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.shift = !1;
        this.ctrl = !1;
        this.alt = !1;
        this.meta = !1;
        this.data = newHashObj();
        if (pointerId >= 0) pointer2Dnd[pointerId] = this;
        dnds.push(this);
    };
    function lazyCreateRoot() {
        var dbs;
        if (rootId == null) {
            dbs = document.body.style;
            bodyCursorBackup = dbs.cursor;
            userSelectBackup = dbs[userSelectPropName];
            dbs[userSelectPropName] = "none";
            rootId = addRoot(dndRootFactory);
        }
    }
    DndComp = {
        render: function(ctx, me) {
            var dnd = ctx.data;
            me.tag = "div";
            me.style = {
                position: "absolute",
                left: dnd.x,
                top: dnd.y
            };
            me.children = dnd.dragView(dnd);
        }
    };
    function currentCursor() {
        var cursor = "no-drop", dnd;
        if (dnds.length !== 0) {
            dnd = dnds[0];
            if (dnd.beforeDrag) return "";
            if (dnd.cursor != null) return dnd.cursor;
            if (dnd.system) return "";
            switch (dnd.operation) {
              case 3:
                cursor = "move";
                break;

              case 1:
                cursor = "alias";
                break;

              case 2:
                cursor = "copy";
            }
        }
        return cursor;
    }
    DndRootComp = {
        render: function(_ctx, me) {
            var res = [], i, dnd, dbs, cur;
            for (i = 0; i < dnds.length; i++) {
                dnd = dnds[i];
                if (dnd.beforeDrag) continue;
                if (dnd.dragView != null && (dnd.x != 0 || dnd.y != 0)) {
                    res.push({
                        key: "" + dnd.id,
                        data: dnd,
                        component: DndComp
                    });
                }
            }
            me.tag = "div";
            me.style = {
                position: "fixed",
                pointerEvents: "none",
                userSelect: "none",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            dbs = document.body.style;
            cur = currentCursor();
            if (cur && dbs.cursor !== cur) dbs.cursor = cur;
            me.children = res;
        },
        onDrag: function(ctx) {
            __export_invalidate(ctx);
            return !1;
        }
    };
    function dndRootFactory() {
        return {
            component: DndRootComp
        };
    }
    dndProto = DndCtx.prototype;
    dndProto.setOperation = function(operation) {
        this.operation = operation;
    };
    dndProto.setDragNodeView = function(view) {
        this.dragView = view;
    };
    dndProto.addData = function(type, data) {
        this.data[type] = data;
        return !0;
    };
    dndProto.listData = function() {
        return Object.keys(this.data);
    };
    dndProto.hasData = function(type) {
        return this.data[type] !== undefined;
    };
    dndProto.getData = function(type) {
        return this.data[type];
    };
    dndProto.setEnabledOps = function(ops) {
        this.enabledOperations = ops;
    };
    dndProto.cancelDnd = function() {
        dndMoved(undefined, this);
        this.destroy();
    };
    dndProto.destroy = function() {
        var i, dbs;
        this.ended = !0;
        if (this.started) broadcast("onDragEnd", this);
        delete pointer2Dnd[this.pointerid];
        for (i = 0; i < dnds.length; i++) {
            if (dnds[i] === this) {
                dnds.splice(i, 1);
                break;
            }
        }
        if (systemDnd === this) {
            systemDnd = null;
        }
        if (dnds.length === 0 && rootId != null) {
            removeRoot(rootId);
            rootId = null;
            dbs = document.body.style;
            dbs.cursor = bodyCursorBackup;
            dbs[userSelectPropName] = userSelectBackup;
        }
    };
    pointer2Dnd = newHashObj();
    function handlePointerDown(ev, _target, node) {
        var dnd, sourceCtx, htmlNode, boundFn, rect;
        dnd = pointer2Dnd[ev.id];
        if (dnd) {
            dnd.cancelDnd();
        }
        if (ev.button <= 1) {
            dnd = new DndCtx(ev.id);
            dnd.startX = ev.x;
            dnd.startY = ev.y;
            dnd.lastX = ev.x;
            dnd.lastY = ev.y;
            dnd.overNode = node;
            updateDndFromPointerEvent(dnd, ev);
            sourceCtx = bubble(node, "onDragStart", dnd);
            if (sourceCtx) {
                htmlNode = getDomNode(sourceCtx.me);
                if (htmlNode == null) {
                    dnd.destroy();
                    return !1;
                }
                dnd.started = !0;
                boundFn = htmlNode.getBoundingClientRect;
                if (boundFn) {
                    rect = boundFn.call(htmlNode);
                    dnd.deltaX = rect.left - ev.x;
                    dnd.deltaY = rect.top - ev.y;
                }
                if (dnd.distanceToStart <= 0) {
                    dnd.beforeDrag = !1;
                    dndMoved(node, dnd);
                }
                lazyCreateRoot();
            } else {
                dnd.destroy();
            }
        }
        return !1;
    }
    function dndMoved(node, dnd) {
        dnd.overNode = node;
        dnd.targetCtx = bubble(node, "onDragOver", dnd);
        if (dnd.targetCtx == null) {
            dnd.operation = 0;
        }
        broadcast("onDrag", dnd);
    }
    function updateDndFromPointerEvent(dnd, ev) {
        dnd.shift = ev.shift;
        dnd.ctrl = ev.ctrl;
        dnd.alt = ev.alt;
        dnd.meta = ev.meta;
        dnd.x = ev.x;
        dnd.y = ev.y;
    }
    function handlePointerMove(ev, _target, node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return !1;
        dnd.totalX += Math.abs(ev.x - dnd.lastX);
        dnd.totalY += Math.abs(ev.y - dnd.lastY);
        if (dnd.beforeDrag) {
            if (dnd.totalX + dnd.totalY <= dnd.distanceToStart) {
                dnd.lastX = ev.x;
                dnd.lastY = ev.y;
                return !1;
            }
            dnd.beforeDrag = !1;
        }
        updateDndFromPointerEvent(dnd, ev);
        dndMoved(node, dnd);
        dnd.lastX = ev.x;
        dnd.lastY = ev.y;
        return !0;
    }
    function handlePointerUp(ev, _target, node) {
        var dnd, t;
        dnd = pointer2Dnd[ev.id];
        if (!dnd) return !1;
        if (!dnd.beforeDrag) {
            updateDndFromPointerEvent(dnd, ev);
            dndMoved(node, dnd);
            t = dnd.targetCtx;
            if (t && bubble(t.me, "onDrop", dnd)) {
                dnd.destroy();
            } else {
                dnd.cancelDnd();
            }
            __export_ignoreClick(ev.x, ev.y);
            return !0;
        }
        dnd.destroy();
        return !1;
    }
    function handlePointerCancel(ev, _target, _node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return !1;
        if (dnd.system) return !1;
        if (!dnd.beforeDrag) {
            dnd.cancelDnd();
        } else {
            dnd.destroy();
        }
        return !1;
    }
    function updateFromNative(dnd, ev) {
        var node;
        dnd.shift = ev.shiftKey;
        dnd.ctrl = ev.ctrlKey;
        dnd.alt = ev.altKey;
        dnd.meta = ev.metaKey;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        dnd.totalX += Math.abs(dnd.x - dnd.lastX);
        dnd.totalY += Math.abs(dnd.y - dnd.lastY);
        node = nodeOnPoint(dnd.x, dnd.y);
        dndMoved(node, dnd);
        dnd.lastX = dnd.x;
        dnd.lastY = dnd.y;
    }
    effectAllowedTable = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function handleDragStart(ev, _target, node) {
        var dnd, activePointerIds, startX, startY, sourceCtx, htmlNode, boundFn, rect, eff, dt, div, style, opacityBackup, widthBackup, heightBackup, paddingBackup, data, dataKeys, i, k, d;
        dnd = systemDnd;
        if (dnd != null) {
            dnd.destroy();
        }
        activePointerIds = Object.keys(pointer2Dnd);
        if (activePointerIds.length > 0) {
            dnd = pointer2Dnd[activePointerIds[0]];
            dnd.system = !0;
            systemDnd = dnd;
        } else {
            startX = ev.clientX;
            startY = ev.clientY;
            dnd = new DndCtx(-1);
            dnd.system = !0;
            systemDnd = dnd;
            dnd.x = startX;
            dnd.y = startY;
            dnd.lastX = startX;
            dnd.lastY = startY;
            dnd.startX = startX;
            dnd.startY = startY;
            sourceCtx = bubble(node, "onDragStart", dnd);
            if (sourceCtx) {
                htmlNode = getDomNode(sourceCtx.me);
                if (htmlNode == null) {
                    dnd.destroy();
                    return !1;
                }
                dnd.started = !0;
                boundFn = htmlNode.getBoundingClientRect;
                if (boundFn) {
                    rect = boundFn.call(htmlNode);
                    dnd.deltaX = rect.left - startX;
                    dnd.deltaY = rect.top - startY;
                }
                lazyCreateRoot();
            } else {
                dnd.destroy();
                return !1;
            }
        }
        dnd.beforeDrag = !1;
        eff = effectAllowedTable[dnd.enabledOperations];
        dt = ev.dataTransfer;
        dt.effectAllowed = eff;
        if (dt.setDragImage) {
            div = document.createElement("div");
            div.style.pointerEvents = "none";
            dt.setDragImage(div, 0, 0);
        } else {
            style = ev.target.style;
            opacityBackup = style.opacity;
            widthBackup = style.width;
            heightBackup = style.height;
            paddingBackup = style.padding;
            style.opacity = "0";
            style.width = "0";
            style.height = "0";
            style.padding = "0";
            window.setTimeout(function() {
                style.opacity = opacityBackup;
                style.width = widthBackup;
                style.height = heightBackup;
                style.padding = paddingBackup;
            }, 0);
        }
        data = dnd.data;
        dataKeys = Object.keys(data);
        for (i = 0; i < dataKeys.length; i++) {
            try {
                k = dataKeys[i];
                d = data[k];
                if (!isString(d)) d = JSON.stringify(d);
                ev.dataTransfer.setData(k, d);
            } catch (e) {}
        }
        updateFromNative(dnd, ev);
        return !1;
    }
    function setDropEffect(ev, op) {
        ev.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][op];
    }
    function handleDragOver(ev, _target, _node) {
        var dnd, dt, eff, effectAllowed, dtTypes, i, tt;
        dnd = systemDnd;
        if (dnd == null) {
            dnd = new DndCtx(-1);
            dnd.system = !0;
            systemDnd = dnd;
            dnd.x = ev.clientX;
            dnd.y = ev.clientY;
            dnd.startX = dnd.x;
            dnd.startY = dnd.y;
            dnd.local = !1;
            dt = ev.dataTransfer;
            eff = 0;
            effectAllowed = undefined;
            try {
                effectAllowed = dt.effectAllowed;
            } catch (e) {}
            for (;eff < 7; eff++) {
                if (effectAllowedTable[eff] === effectAllowed) break;
            }
            dnd.enabledOperations = eff;
            dtTypes = dt.types;
            if (dtTypes) {
                for (i = 0; i < dtTypes.length; i++) {
                    tt = dtTypes[i];
                    if (tt === "text/plain") tt = "Text"; else if (tt === "text/uri-list") tt = "Url";
                    dnd.data[tt] = null;
                }
            } else {
                if (dt.getData("Text") !== undefined) dnd.data["Text"] = null;
            }
        }
        updateFromNative(dnd, ev);
        setDropEffect(ev, dnd.operation);
        if (dnd.operation != 0) {
            preventDefault(ev);
            return !0;
        }
        return !1;
    }
    function handleDrag(ev, _target, _node) {
        var x, y, m;
        x = ev.clientX;
        y = ev.clientY;
        m = getMedia();
        if (systemDnd != null && (x === 0 && y === 0 || x < 0 || y < 0 || x >= m.width || y >= m.height)) {
            systemDnd.x = 0;
            systemDnd.y = 0;
            systemDnd.operation = 0;
            broadcast("onDrag", systemDnd);
        }
        return !1;
    }
    function handleDragEnd(_ev, _target, _node) {
        if (systemDnd != null) {
            systemDnd.destroy();
        }
        return !1;
    }
    function handleDrop(ev, _target, _node) {
        var dnd, dataKeys, dt, i_7, k, d, t;
        dnd = systemDnd;
        if (dnd == null) return !1;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        if (!dnd.local) {
            dataKeys = Object.keys(dnd.data);
            dt = ev.dataTransfer;
            for (i_7 = 0; i_7 < dataKeys.length; i_7++) {
                k = dataKeys[i_7];
                if (k === "Files") {
                    d = [].slice.call(dt.files, 0);
                } else {
                    d = dt.getData(k);
                }
                dnd.data[k] = d;
            }
        }
        updateFromNative(dnd, ev);
        t = dnd.targetCtx;
        if (t && bubble(t.me, "onDrop", dnd)) {
            setDropEffect(ev, dnd.operation);
            dnd.destroy();
            preventDefault(ev);
        } else {
            dnd.cancelDnd();
        }
        return !0;
    }
    function justPreventDefault(ev, _target, _node) {
        preventDefault(ev);
        return !0;
    }
    function handleDndSelectStart(ev, _target, _node) {
        if (dnds.length === 0) return !1;
        preventDefault(ev);
        return !0;
    }
    addEvent("!PointerDown", 4, handlePointerDown);
    addEvent("!PointerMove", 4, handlePointerMove);
    addEvent("!PointerUp", 4, handlePointerUp);
    addEvent("!PointerCancel", 4, handlePointerCancel);
    addEvent("selectstart", 4, handleDndSelectStart);
    addEvent("dragstart", 5, handleDragStart);
    addEvent("dragover", 5, handleDragOver);
    addEvent("dragend", 5, handleDragEnd);
    addEvent("drag", 5, handleDrag);
    addEvent("drop", 5, handleDrop);
    addEvent("dragenter", 5, justPreventDefault);
    addEvent("dragleave", 5, justPreventDefault);
    __export_getDnds = function() {
        return dnds;
    };
    waitingForPopHashChange = -1;
    function emitOnHashChange() {
        if (waitingForPopHashChange >= 0) clearTimeout(waitingForPopHashChange);
        waitingForPopHashChange = -1;
        __export_invalidate();
        return !1;
    }
    addEvent("hashchange", 10, emitOnHashChange);
    newHashObj();
    allStyles = newHashObj();
    newHashObj();
    newHashObj();
    dynamicSprites = [];
    imageCache = newHashObj();
    injectedCss = "";
    rebuildStyles = !1;
    htmlStyle = null;
    isIE9 = ieVersion() === 9;
    chainedBeforeFrame = setBeforeFrame(beforeFrame);
    cssSubRuleDelimiter = /\:|\ |\>/;
    function buildCssSubRule(parent) {
        var matchSplit, posSplit;
        matchSplit = cssSubRuleDelimiter.exec(parent);
        if (!matchSplit) return allStyles[parent].name;
        posSplit = matchSplit.index;
        return allStyles[parent.substring(0, posSplit)].name + parent.substring(posSplit);
    }
    function buildCssRule(parent, name) {
        var result = "", i_9;
        if (parent) {
            if (__export_isArray(parent)) {
                for (i_9 = 0; i_9 < parent.length; i_9++) {
                    if (i_9 > 0) {
                        result += ",";
                    }
                    result += "." + buildCssSubRule(parent[i_9]) + "." + name;
                }
            } else {
                result = "." + buildCssSubRule(parent) + "." + name;
            }
        } else {
            result = "." + name;
        }
        return result;
    }
    function flattenStyle(cur, curPseudo, style, stylePseudo) {
        var externalStyle, i_10, val, curPseudoVal, key, pseudoKey;
        if (isString(style)) {
            externalStyle = allStyles[style];
            if (externalStyle === undefined) {
                throw new Error("Unknown style " + style);
            }
            flattenStyle(cur, curPseudo, externalStyle.style, externalStyle.pseudo);
        } else if (isFunction(style)) {
            style(cur, curPseudo);
        } else if (__export_isArray(style)) {
            for (i_10 = 0; i_10 < style.length; i_10++) {
                flattenStyle(cur, curPseudo, style[i_10], undefined);
            }
        } else if (typeof style === "object") {
            for (key in style) {
                if (!Object.prototype.hasOwnProperty.call(style, key)) continue;
                val = style[key];
                if (isFunction(val)) {
                    val = val(cur, key);
                }
                cur[key] = val;
            }
        }
        if (stylePseudo != null && curPseudo != null) {
            for (pseudoKey in stylePseudo) {
                curPseudoVal = curPseudo[pseudoKey];
                if (curPseudoVal === undefined) {
                    curPseudoVal = newHashObj();
                    curPseudo[pseudoKey] = curPseudoVal;
                }
                flattenStyle(curPseudoVal, undefined, stylePseudo[pseudoKey], undefined);
            }
        }
    }
    firstStyles = !1;
    function beforeFrame() {
        var dbs, i_11, dynSprite, image, colorStr, lastUrl, stDef, styleStr, ss, parent_1, name_1, ssPseudo, ssStyle, _a, style_1, flattenPseudo, extractedInlStyle, cssStyle, item, styleElement, head, key, key2;
        dbs = document.body.style;
        if (firstStyles && uptimeMs >= 150) {
            dbs.opacity = "1";
            firstStyles = !1;
        }
        if (rebuildStyles) {
            if (frameCounter === 1 && "webkitAnimation" in dbs) {
                firstStyles = !0;
                dbs.opacity = "0";
                setTimeout(__export_invalidate, 200);
            }
            for (i_11 = 0; i_11 < dynamicSprites.length; i_11++) {
                dynSprite = dynamicSprites[i_11];
                image = imageCache[dynSprite.url];
                if (image == null) continue;
                colorStr = dynSprite.color();
                if (colorStr !== dynSprite.lastColor) {
                    dynSprite.lastColor = colorStr;
                    if (dynSprite.width == null) dynSprite.width = image.width;
                    if (dynSprite.height == null) dynSprite.height = image.height;
                    lastUrl = recolorAndClip(image, colorStr, dynSprite.width, dynSprite.height, dynSprite.left, dynSprite.top);
                    stDef = allStyles[dynSprite.styleId];
                    stDef.style = {
                        backgroundImage: "url(" + lastUrl + ")",
                        width: dynSprite.width,
                        height: dynSprite.height,
                        backgroundPosition: 0
                    };
                }
            }
            styleStr = injectedCss;
            for (key in allStyles) {
                ss = allStyles[key];
                parent_1 = ss.parent;
                name_1 = ss.name;
                ssPseudo = ss.pseudo;
                ssStyle = ss.style;
                if (isFunction(ssStyle) && ssStyle.length === 0) {
                    _a = ssStyle(), ssStyle = _a[0], ssPseudo = _a[1];
                }
                if (isString(ssStyle) && ssPseudo == null) {
                    ss.realName = ssStyle;
                    continue;
                }
                ss.realName = name_1;
                style_1 = newHashObj();
                flattenPseudo = newHashObj();
                flattenStyle(undefined, flattenPseudo, undefined, ssPseudo);
                flattenStyle(style_1, flattenPseudo, ssStyle, undefined);
                extractedInlStyle = null;
                if (style_1["pointerEvents"]) {
                    extractedInlStyle = newHashObj();
                    extractedInlStyle["pointerEvents"] = style_1["pointerEvents"];
                }
                if (isIE9) {
                    if (style_1["userSelect"]) {
                        if (extractedInlStyle == null) extractedInlStyle = newHashObj();
                        extractedInlStyle["userSelect"] = style_1["userSelect"];
                        delete style_1["userSelect"];
                    }
                }
                ss.inlStyle = extractedInlStyle;
                shimStyle(style_1);
                cssStyle = inlineStyleToCssDeclaration(style_1);
                if (cssStyle.length > 0) styleStr += (name_1 == null ? parent_1 : buildCssRule(parent_1, name_1)) + " {" + cssStyle + "}\n";
                for (key2 in flattenPseudo) {
                    item = flattenPseudo[key2];
                    shimStyle(item);
                    styleStr += (name_1 == null ? parent_1 + ":" + key2 : buildCssRule(parent_1, name_1 + ":" + key2)) + " {" + inlineStyleToCssDeclaration(item) + "}\n";
                }
            }
            styleElement = document.createElement("style");
            styleElement.type = "text/css";
            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = styleStr;
            } else {
                styleElement.appendChild(document.createTextNode(styleStr));
            }
            head = document.head || document.getElementsByTagName("head")[0];
            if (htmlStyle != null) {
                head.replaceChild(styleElement, htmlStyle);
            } else {
                head.appendChild(styleElement);
            }
            htmlStyle = styleElement;
            rebuildStyles = !1;
        }
        chainedBeforeFrame();
    }
    uppercasePattern = /([A-Z])/g;
    msPattern = /^ms-/;
    function hyphenateStyle(s) {
        if (s === "cssFloat") return "float";
        return s.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
    }
    function inlineStyleToCssDeclaration(style) {
        var res = "", v, key;
        for (key in style) {
            v = style[key];
            if (v === undefined) continue;
            res += hyphenateStyle(key) + ":" + (v === "" ? "\"\"" : v) + ";";
        }
        res = res.slice(0, -1);
        return res;
    }
    function invalidateStyles() {
        rebuildStyles = !0;
        __export_invalidate();
    }
    rgbaRegex = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function recolorAndClip(image, colorStr, width, height, left, top) {
        var canvas, ctx, imgData, imgDataData, rgba, cRed, cGreen, cBlue, cAlpha, i, red, alpha;
        canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        ctx.drawImage(image, -left, -top);
        imgData = ctx.getImageData(0, 0, width, height);
        imgDataData = imgData.data;
        rgba = rgbaRegex.exec(colorStr);
        if (rgba) {
            cRed = parseInt(rgba[1], 10);
            cGreen = parseInt(rgba[2], 10);
            cBlue = parseInt(rgba[3], 10);
            cAlpha = Math.round(parseFloat(rgba[4]) * 255);
        } else {
            cRed = parseInt(colorStr.substr(1, 2), 16);
            cGreen = parseInt(colorStr.substr(3, 2), 16);
            cBlue = parseInt(colorStr.substr(5, 2), 16);
            cAlpha = parseInt(colorStr.substr(7, 2), 16) || 255;
        }
        if (cAlpha === 255) {
            for (i = 0; i < imgDataData.length; i += 4) {
                red = imgDataData[i];
                if (red === imgDataData[i + 1] && red === imgDataData[i + 2] && (red === 128 || imgDataData[i + 3] < 255 && red > 112)) {
                    imgDataData[i] = cRed;
                    imgDataData[i + 1] = cGreen;
                    imgDataData[i + 2] = cBlue;
                }
            }
        } else {
            for (i = 0; i < imgDataData.length; i += 4) {
                red = imgDataData[i];
                alpha = imgDataData[i + 3];
                if (red === imgDataData[i + 1] && red === imgDataData[i + 2] && (red === 128 || alpha < 255 && red > 112)) {
                    if (alpha === 255) {
                        imgDataData[i] = cRed;
                        imgDataData[i + 1] = cGreen;
                        imgDataData[i + 2] = cBlue;
                        imgDataData[i + 3] = cAlpha;
                    } else {
                        alpha = alpha * (1 / 255);
                        imgDataData[i] = Math.round(cRed * alpha);
                        imgDataData[i + 1] = Math.round(cGreen * alpha);
                        imgDataData[i + 2] = Math.round(cBlue * alpha);
                        imgDataData[i + 3] = Math.round(cAlpha * alpha);
                    }
                }
            }
        }
        ctx.putImageData(imgData, 0, 0);
        return canvas.toDataURL();
    }
    function createVirtualComponent(component) {
        return function(data, children) {
            if (children !== undefined) {
                if (data == null) data = {};
                data.children = children;
            }
            return {
                data: data,
                component: component
            };
        };
    }
    if (!window.b) window.b = {
        deref: deref,
        getRoots: getRoots,
        setInvalidate: setInvalidate,
        invalidateStyles: invalidateStyles,
        ignoreShouldChange: ignoreShouldChange,
        setAfterFrame: setAfterFrame,
        setBeforeFrame: setBeforeFrame,
        getDnds: __export_getDnds,
        setBeforeInit: setBeforeInit
    };
    init(function() {
        return "hello";
    });
})();


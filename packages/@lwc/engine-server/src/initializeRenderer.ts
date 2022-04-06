/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    setAssertInstanceOfHTMLElement,
    setAttachShadow,
    setCreateComment,
    setCreateElement,
    setCreateFragment,
    setCreateText,
    setDefineCustomElement,
    setDispatchEvent,
    setGetAttribute,
    setGetBoundingClientRect,
    setGetChildNodes,
    setGetChildren,
    setGetClassList,
    setGetCustomElement,
    setGetElementsByClassName,
    setGetElementsByTagName,
    setGetFirstChild,
    setGetFirstElementChild,
    setGetLastChild,
    setGetLastElementChild,
    setGetProperty,
    setHTMLElement,
    setInsert,
    setInsertGlobalStylesheet,
    setInsertStylesheet,
    setIsConnected,
    setIsHydrating,
    setIsNativeShadowDefined,
    setIsSyntheticShadowDefined,
    setNextSibling,
    setQuerySelector,
    setQuerySelectorAll,
    setRemove,
    setRemoveAttribute,
    setRemoveEventListener,
    setSetAttribute,
    setSetCSSStyleProperty,
    setSetProperty,
    setSetText,
    setSsr,
    setAddEventListener,
} from '@lwc/engine-core';

import {
    assertInstanceOfHTMLElement,
    attachShadow,
    createComment,
    createElement,
    createText,
    defineCustomElement,
    dispatchEvent,
    getAttribute,
    getBoundingClientRect,
    getChildNodes,
    getChildren,
    getClassList,
    getCustomElement,
    getElementsByClassName,
    getElementsByTagName,
    getFirstChild,
    getFirstElementChild,
    getLastChild,
    getLastElementChild,
    getProperty,
    HTMLElement,
    insert,
    insertGlobalStylesheet,
    insertStylesheet,
    isConnected,
    isHydrating,
    isNativeShadowDefined,
    isSyntheticShadowDefined,
    nextSibling,
    querySelector,
    querySelectorAll,
    remove,
    removeAttribute,
    removeEventListener,
    setAttribute,
    setCSSStyleProperty,
    setProperty,
    setText,
    ssr,
    addEventListener,
    createFragment,
} from './renderer';

setAssertInstanceOfHTMLElement(assertInstanceOfHTMLElement);
setAttachShadow(attachShadow);
setCreateComment(createComment);
setCreateElement(createElement);
setCreateText(createText);
setCreateFragment(createFragment);
setDefineCustomElement(defineCustomElement);
setDispatchEvent(dispatchEvent);
setGetAttribute(getAttribute);
setGetBoundingClientRect(getBoundingClientRect);
setGetChildNodes(getChildNodes);
setGetChildren(getChildren);
setGetClassList(getClassList);
setGetCustomElement(getCustomElement);
setGetElementsByClassName(getElementsByClassName);
setGetElementsByTagName(getElementsByTagName);
setGetFirstChild(getFirstChild);
setGetFirstElementChild(getFirstElementChild);
setGetLastChild(getLastChild);
setGetLastElementChild(getLastElementChild);
setGetProperty(getProperty);
setHTMLElement(HTMLElement);
setInsert(insert);
setInsertGlobalStylesheet(insertGlobalStylesheet);
setInsertStylesheet(insertStylesheet);
setIsConnected(isConnected);
setIsHydrating(isHydrating);
setIsNativeShadowDefined(isNativeShadowDefined);
setIsSyntheticShadowDefined(isSyntheticShadowDefined);
setNextSibling(nextSibling);
setQuerySelector(querySelector);
setQuerySelectorAll(querySelectorAll);
setRemove(remove);
setRemoveAttribute(removeAttribute);
setRemoveEventListener(removeEventListener);
setSetAttribute(setAttribute);
setSetCSSStyleProperty(setCSSStyleProperty);
setSetProperty(setProperty);
setSetText(setText);
setSsr(ssr);
setAddEventListener(addEventListener);

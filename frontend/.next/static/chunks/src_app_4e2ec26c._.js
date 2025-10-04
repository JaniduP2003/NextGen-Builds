(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/DecryptedText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecryptedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const styles = {
    wrapper: {
        display: 'inline-block',
        whiteSpace: 'pre-wrap'
    },
    srOnly: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        border: 0
    }
};
function DecryptedText(param) {
    let { text, speed = 50, maxIterations = 10, sequential = false, revealDirection = 'start', useOriginalCharsOnly = false, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+', className = '', parentClassName = '', encryptedClassName = '', animateOn = 'hover', ...props } = param;
    _s();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrambling, setIsScrambling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealedIndices, setRevealedIndices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedText.useEffect": ()=>{
            let interval;
            let currentIteration = 0;
            const getNextIndex = {
                "DecryptedText.useEffect.getNextIndex": (revealedSet)=>{
                    const textLength = text.length;
                    switch(revealDirection){
                        case 'start':
                            return revealedSet.size;
                        case 'end':
                            return textLength - 1 - revealedSet.size;
                        case 'center':
                            {
                                const middle = Math.floor(textLength / 2);
                                const offset = Math.floor(revealedSet.size / 2);
                                const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
                                if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                                    return nextIndex;
                                }
                                for(let i = 0; i < textLength; i++){
                                    if (!revealedSet.has(i)) return i;
                                }
                                return 0;
                            }
                        default:
                            return revealedSet.size;
                    }
                }
            }["DecryptedText.useEffect.getNextIndex"];
            const availableChars = useOriginalCharsOnly ? Array.from(new Set(text.split(''))).filter({
                "DecryptedText.useEffect": (char)=>char !== ' '
            }["DecryptedText.useEffect"]) : characters.split('');
            const shuffleText = {
                "DecryptedText.useEffect.shuffleText": (originalText, currentRevealed)=>{
                    if (useOriginalCharsOnly) {
                        const positions = originalText.split('').map({
                            "DecryptedText.useEffect.shuffleText.positions": (char, i)=>({
                                    char,
                                    isSpace: char === ' ',
                                    index: i,
                                    isRevealed: currentRevealed.has(i)
                                })
                        }["DecryptedText.useEffect.shuffleText.positions"]);
                        const nonSpaceChars = positions.filter({
                            "DecryptedText.useEffect.shuffleText.nonSpaceChars": (p)=>!p.isSpace && !p.isRevealed
                        }["DecryptedText.useEffect.shuffleText.nonSpaceChars"]).map({
                            "DecryptedText.useEffect.shuffleText.nonSpaceChars": (p)=>p.char
                        }["DecryptedText.useEffect.shuffleText.nonSpaceChars"]);
                        for(let i = nonSpaceChars.length - 1; i > 0; i--){
                            const j = Math.floor(Math.random() * (i + 1));
                            [nonSpaceChars[i], nonSpaceChars[j]] = [
                                nonSpaceChars[j],
                                nonSpaceChars[i]
                            ];
                        }
                        let charIndex = 0;
                        return positions.map({
                            "DecryptedText.useEffect.shuffleText": (p)=>{
                                if (p.isSpace) return ' ';
                                if (p.isRevealed) return originalText[p.index];
                                return nonSpaceChars[charIndex++];
                            }
                        }["DecryptedText.useEffect.shuffleText"]).join('');
                    } else {
                        return originalText.split('').map({
                            "DecryptedText.useEffect.shuffleText": (char, i)=>{
                                if (char === ' ') return ' ';
                                if (currentRevealed.has(i)) return originalText[i];
                                return availableChars[Math.floor(Math.random() * availableChars.length)];
                            }
                        }["DecryptedText.useEffect.shuffleText"]).join('');
                    }
                }
            }["DecryptedText.useEffect.shuffleText"];
            if (isHovering) {
                setIsScrambling(true);
                interval = setInterval({
                    "DecryptedText.useEffect": ()=>{
                        setRevealedIndices({
                            "DecryptedText.useEffect": (prevRevealed)=>{
                                if (sequential) {
                                    if (prevRevealed.size < text.length) {
                                        const nextIndex = getNextIndex(prevRevealed);
                                        const newRevealed = new Set(prevRevealed);
                                        newRevealed.add(nextIndex);
                                        setDisplayText(shuffleText(text, newRevealed));
                                        return newRevealed;
                                    } else {
                                        clearInterval(interval);
                                        setIsScrambling(false);
                                        return prevRevealed;
                                    }
                                } else {
                                    setDisplayText(shuffleText(text, prevRevealed));
                                    currentIteration++;
                                    if (currentIteration >= maxIterations) {
                                        clearInterval(interval);
                                        setIsScrambling(false);
                                        setDisplayText(text);
                                    }
                                    return prevRevealed;
                                }
                            }
                        }["DecryptedText.useEffect"]);
                    }
                }["DecryptedText.useEffect"], speed);
            } else {
                setDisplayText(text);
                setRevealedIndices(new Set());
                setIsScrambling(false);
            }
            return ({
                "DecryptedText.useEffect": ()=>{
                    if (interval) clearInterval(interval);
                }
            })["DecryptedText.useEffect"];
        }
    }["DecryptedText.useEffect"], [
        isHovering,
        text,
        speed,
        maxIterations,
        sequential,
        revealDirection,
        characters,
        useOriginalCharsOnly
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedText.useEffect": ()=>{
            if (animateOn !== 'view' && animateOn !== 'both') return;
            const observerCallback = {
                "DecryptedText.useEffect.observerCallback": (entries)=>{
                    entries.forEach({
                        "DecryptedText.useEffect.observerCallback": (entry)=>{
                            if (entry.isIntersecting && !hasAnimated) {
                                setIsHovering(true);
                                setHasAnimated(true);
                            }
                        }
                    }["DecryptedText.useEffect.observerCallback"]);
                }
            }["DecryptedText.useEffect.observerCallback"];
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            const currentRef = containerRef.current;
            if (currentRef) {
                observer.observe(currentRef);
            }
            return ({
                "DecryptedText.useEffect": ()=>{
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                }
            })["DecryptedText.useEffect"];
        }
    }["DecryptedText.useEffect"], [
        animateOn,
        hasAnimated
    ]);
    const hoverProps = animateOn === 'hover' || animateOn === 'both' ? {
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false)
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        className: parentClassName,
        ref: containerRef,
        style: styles.wrapper,
        ...hoverProps,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: styles.srOnly,
                children: displayText
            }, void 0, false, {
                fileName: "[project]/src/app/components/DecryptedText.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: displayText.split('').map((char, index)=>{
                    const isRevealedOrDone = revealedIndices.has(index) || !isScrambling || !isHovering;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isRevealedOrDone ? className : encryptedClassName,
                        children: char
                    }, index, false, {
                        fileName: "[project]/src/app/components/DecryptedText.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/DecryptedText.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/DecryptedText.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_s(DecryptedText, "UFcqfhAkhgDU+3/1kWjReX6Oj5w=");
_c = DecryptedText;
var _c;
__turbopack_context__.k.register(_c, "DecryptedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DecryptedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/DecryptedText.tsx [app-client] (ecmascript)");
;
'use client';
;
;
;
;
// Dynamically import SplineWrapper to avoid SSR issues
const SplineWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/components/SplineWrapper.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/SplineWrapper.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = SplineWrapper;
function LandingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            background: 'rgb(128, 128, 128)',
            overflow: 'hidden',
            border: '2px solid red'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplineWrapper, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: 'absolute',
                    top: '50%',
                    left: '80%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DecryptedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "NextGen Builds",
                    speed: 80,
                    maxIterations: 20,
                    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%",
                    className: "revealed",
                    encryptedClassName: "encrypted",
                    animateOn: "view",
                    revealDirection: "center"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c1 = LandingPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SplineWrapper");
__turbopack_context__.k.register(_c1, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_4e2ec26c._.js.map
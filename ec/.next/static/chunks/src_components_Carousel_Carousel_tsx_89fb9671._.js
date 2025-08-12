(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Carousel/Carousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Carousel": ()=>Carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function renderImgs(imgsInfo) {
    return imgsInfo.map((imgInfo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: String(imgInfo[0]),
            alt: imgInfo[1],
            className: "cursor-pointer"
        }, i, false, {
            fileName: "[project]/src/components/Carousel/Carousel.tsx",
            lineNumber: 10,
            columnNumber: 55
        }, this));
}
function Carousel(props) {
    _s();
    const [imgs, setImgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentTween = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            const imgsInfo = [];
            props.elements.forEach({
                "Carousel.useEffect": (el)=>imgsInfo.push([
                        el.img,
                        el.imgAlt
                    ])
            }["Carousel.useEffect"]);
            setImgs(renderImgs(imgsInfo));
        }
    }["Carousel.useEffect"], [
        props.elements
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            const dotsDiv = document.querySelector(".carousel-dots-container");
            console.log("1: ", dotsDiv);
            if (dotsDiv) {
                console.log(imgs.length);
                const dots = [
                    ...dotsDiv.children
                ];
                dots.forEach({
                    "Carousel.useEffect": (dot)=>{
                        dotsDiv.removeChild(dot);
                    }
                }["Carousel.useEffect"]);
                for(let i = 0; i < imgs.length; i++){
                    const newDot = document.createElement("div");
                    newDot.classList.add("carousel-dot");
                    console.log(newDot);
                    dotsDiv.appendChild(newDot);
                }
            }
        }
    }["Carousel.useEffect"], [
        imgs
    ]);
    // This function Shows the image with the index equal to the state variable
    function selectActiveImage() {
        const images = document.querySelectorAll(".carousel img");
        if (images && images.length > 0) {
            const img = images[index];
            img.classList.add("active");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(img, {
                opacity: 1,
                duration: 0.5
            });
        }
    }
    // This functon hide the previously active image and call 'selectActiveImage' right after. Also changes the selected dot at the bottom of the carousel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            // Image selection
            const activeImg = document.querySelector(".carousel img.active");
            if (activeImg) {
                if (currentTween.current) {
                    currentTween.current.render(0);
                    currentTween.current.kill();
                    currentTween.current = null;
                }
                currentTween.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(activeImg, {
                    opacity: 0,
                    duration: 0.5
                });
                currentTween.current.then({
                    "Carousel.useEffect": ()=>{
                        activeImg.classList.toggle("active");
                        selectActiveImage();
                    }
                }["Carousel.useEffect"]);
            } else {
                selectActiveImage();
            }
            // Dot selection
            const currentDot = document.querySelector(".selected-carousel-dot");
            currentDot === null || currentDot === void 0 ? void 0 : currentDot.classList.remove("selected-carousel-dot");
            const dots = document.querySelectorAll(".carousel-dot");
            if (dots) {
                if (index < dots.length) dots[index].classList.add("selected-carousel-dot");
            }
        }
    }["Carousel.useEffect"], [
        index,
        imgs
    ]);
    function increaseIndex() {
        if (imgs.length == 0) return;
        setIndex((prevIndex)=>prevIndex >= imgs.length - 1 ? 0 : prevIndex + 1);
    }
    function decreaseIndex() {
        if (imgs.length <= 0) return;
        setIndex((prevIndex)=>prevIndex <= 0 ? imgs.length - 1 : prevIndex - 1);
    }
    // const { data, error } = useQuery({
    //     queryKey: ["products"],
    //     queryFn: () => getProducts(),
    // });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "carousel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "carousel-arrow left",
                onClick: decreaseIndex,
                children: "❮"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this),
            imgs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "carousel-arrow right",
                onClick: increaseIndex,
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "carousel-dots-container"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Carousel/Carousel.tsx",
        lineNumber: 128,
        columnNumber: 9
    }, this);
}
_s(Carousel, "VHnbzoiEBO5IcGuSFNNlXyECP+8=");
_c = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_Carousel_Carousel_tsx_89fb9671._.js.map
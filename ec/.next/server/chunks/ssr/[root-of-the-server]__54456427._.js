module.exports = {

"[externals]/timers [external] (timers, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}}),
"[project]/src/components/Carousel/Carousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Carousel": ()=>Carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$timers__$5b$external$5d$__$28$timers$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/timers [external] (timers, cjs)");
"use client";
;
;
;
;
;
const carouselTransition = 0.4; // in seconds
const scrollInterval = 5; // in seconds
function renderImgs(imgsInfo) {
    return imgsInfo.map((imgInfo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: String(imgInfo[0]),
            alt: imgInfo[1],
            className: "cursor-pointer"
        }, i, false, {
            fileName: "[project]/src/components/Carousel/Carousel.tsx",
            lineNumber: 15,
            columnNumber: 55
        }, this));
}
function Carousel(props) {
    var [imgs, setImgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    var [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoScroll, setAutoScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const autoScrollInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentTween = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const imgsInfo = [];
        props.elements.forEach((el)=>imgsInfo.push([
                el.img,
                el.imgAlt
            ]));
        setImgs(renderImgs(imgsInfo));
    }, [
        props.elements
    ]);
    function activeAutoScroll() {
        if (!autoScrollInterval.current) {
            autoScrollInterval.current = window.setInterval(()=>{
                console.log(index, " ", imgs.length);
                if (index >= imgs.length - 1) {
                    console.log("1");
                    setIndex(0);
                } else {
                    console.log("2");
                    setIndex((prevIndex)=>prevIndex++);
                }
            }, scrollInterval * 1000);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (imgs.length == 0) {
            return;
        }
        if (autoScroll) {
            activeAutoScroll();
        } else {
            if (autoScrollInterval.current) {
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f$timers__$5b$external$5d$__$28$timers$2c$__cjs$29$__["clearInterval"])(autoScrollInterval.current);
                autoScrollInterval.current = null;
            }
        }
    }, [
        autoScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dotsDiv = document.querySelector(".carousel-dots-container");
        if (dotsDiv) {
            const dots = [
                ...dotsDiv.children
            ];
            dots.forEach((dot)=>{
                dotsDiv.removeChild(dot);
            });
            for(let i = 0; i < imgs.length; i++){
                const newDot = document.createElement("div");
                newDot.classList.add("carousel-dot");
                dotsDiv.appendChild(newDot);
            }
        }
        if (autoScroll) {
            if (autoScrollInterval.current) {
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f$timers__$5b$external$5d$__$28$timers$2c$__cjs$29$__["clearInterval"])(autoScrollInterval.current);
                autoScrollInterval.current = null;
            }
            activeAutoScroll();
        }
    }, [
        imgs
    ]);
    // This function Shows the image with the index equal to the state variable
    function selectActiveImage() {
        const images = document.querySelectorAll(".carousel img");
        if (images && images.length > 0) {
            const img = images[index];
            img.classList.add("active");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(img, {
                opacity: 1,
                duration: carouselTransition
            });
        }
    }
    // This functon hide the previously active image and call 'selectActiveImage' right after. Also changes the selected dot at the bottom of the carousel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Image selection
        const activeImg = document.querySelector(".carousel img.active");
        if (activeImg) {
            if (currentTween.current && currentTween.current.isActive()) {
                currentTween.current.kill();
                currentTween.current = null;
            }
            currentTween.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(activeImg, {
                opacity: 0,
                duration: carouselTransition
            });
            currentTween.current.then(()=>{
                activeImg.classList.toggle("active");
                selectActiveImage();
            });
        } else {
            selectActiveImage();
        }
        // Dot selection
        const currentDot = document.querySelector(".selected-carousel-dot");
        currentDot?.classList.remove("selected-carousel-dot");
        const dots = document.querySelectorAll(".carousel-dot");
        if (dots) {
            if (index < dots.length) dots[index].classList.add("selected-carousel-dot");
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "carousel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "carousel-arrow left",
                onClick: decreaseIndex,
                children: "❮"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            imgs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "carousel-arrow right",
                onClick: increaseIndex,
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 177,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "carousel-dots-container"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Carousel/Carousel.tsx",
        lineNumber: 174,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__54456427._.js.map
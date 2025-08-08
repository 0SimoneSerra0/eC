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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function renderImgs(imgsInfo) {
    return imgsInfo.map((imgInfo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: String(imgInfo[0]),
            alt: imgInfo[1],
            className: "cursor-pointer"
        }, void 0, false, {
            fileName: "[project]/src/components/Carousel/Carousel.tsx",
            lineNumber: 9,
            columnNumber: 50
        }, this));
}
function Carousel(props) {
    _s();
    const [imgs, setImgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    // Changes the active image based on the index state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            const activeImg = document.querySelector(".carousel img.active");
            if (activeImg) activeImg.classList.toggle("active");
            const images = document.querySelectorAll(".carousel img");
            if (images && images.length > 0) {
                const img = images[index];
                img.classList.add("active");
            }
        }
    }["Carousel.useEffect"], [
        index
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
                lineNumber: 69,
                columnNumber: 13
            }, this),
            imgs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "carousel-arrow right",
                onClick: increaseIndex,
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Carousel/Carousel.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}
_s(Carousel, "ZHVs/up+SkFCUKKJ++ODUcD94mQ=");
_c = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/hydration.ts
__turbopack_context__.s({
    "defaultShouldDehydrateMutation": ()=>defaultShouldDehydrateMutation,
    "defaultShouldDehydrateQuery": ()=>defaultShouldDehydrateQuery,
    "dehydrate": ()=>dehydrate,
    "hydrate": ()=>hydrate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
;
function defaultTransformerFn(data) {
    return data;
}
function dehydrateMutation(mutation) {
    return {
        mutationKey: mutation.options.mutationKey,
        state: mutation.state,
        ...mutation.options.scope && {
            scope: mutation.options.scope
        },
        ...mutation.meta && {
            meta: mutation.meta
        }
    };
}
function dehydrateQuery(query, serializeData, shouldRedactErrors) {
    var _query_promise;
    return {
        dehydratedAt: Date.now(),
        state: {
            ...query.state,
            ...query.state.data !== void 0 && {
                data: serializeData(query.state.data)
            }
        },
        queryKey: query.queryKey,
        queryHash: query.queryHash,
        ...query.state.status === "pending" && {
            promise: (_query_promise = query.promise) === null || _query_promise === void 0 ? void 0 : _query_promise.then(serializeData).catch((error)=>{
                if (!shouldRedactErrors(error)) {
                    return Promise.reject(error);
                }
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error("A query that was dehydrated as pending ended up rejecting. [".concat(query.queryHash, "]: ").concat(error, "; The error will be redacted in production builds"));
                }
                return Promise.reject(new Error("redacted"));
            })
        },
        ...query.meta && {
            meta: query.meta
        }
    };
}
function defaultShouldDehydrateMutation(mutation) {
    return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
    return query.state.status === "success";
}
function defaultShouldRedactErrors(_) {
    return true;
}
function dehydrate(client) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _client_getDefaultOptions_dehydrate, _client_getDefaultOptions_dehydrate1, _client_getDefaultOptions_dehydrate2, _client_getDefaultOptions_dehydrate3;
    var _options_shouldDehydrateMutation, _ref;
    const filterMutation = (_ref = (_options_shouldDehydrateMutation = options.shouldDehydrateMutation) !== null && _options_shouldDehydrateMutation !== void 0 ? _options_shouldDehydrateMutation : (_client_getDefaultOptions_dehydrate = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate === void 0 ? void 0 : _client_getDefaultOptions_dehydrate.shouldDehydrateMutation) !== null && _ref !== void 0 ? _ref : defaultShouldDehydrateMutation;
    const mutations = client.getMutationCache().getAll().flatMap((mutation)=>filterMutation(mutation) ? [
            dehydrateMutation(mutation)
        ] : []);
    var _options_shouldDehydrateQuery, _ref1;
    const filterQuery = (_ref1 = (_options_shouldDehydrateQuery = options.shouldDehydrateQuery) !== null && _options_shouldDehydrateQuery !== void 0 ? _options_shouldDehydrateQuery : (_client_getDefaultOptions_dehydrate1 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate1 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate1.shouldDehydrateQuery) !== null && _ref1 !== void 0 ? _ref1 : defaultShouldDehydrateQuery;
    var _options_shouldRedactErrors, _ref2;
    const shouldRedactErrors = (_ref2 = (_options_shouldRedactErrors = options.shouldRedactErrors) !== null && _options_shouldRedactErrors !== void 0 ? _options_shouldRedactErrors : (_client_getDefaultOptions_dehydrate2 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate2 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate2.shouldRedactErrors) !== null && _ref2 !== void 0 ? _ref2 : defaultShouldRedactErrors;
    var _options_serializeData, _ref3;
    const serializeData = (_ref3 = (_options_serializeData = options.serializeData) !== null && _options_serializeData !== void 0 ? _options_serializeData : (_client_getDefaultOptions_dehydrate3 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate3 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate3.serializeData) !== null && _ref3 !== void 0 ? _ref3 : defaultTransformerFn;
    const queries = client.getQueryCache().getAll().flatMap((query)=>filterQuery(query) ? [
            dehydrateQuery(query, serializeData, shouldRedactErrors)
        ] : []);
    return {
        mutations,
        queries
    };
}
function hydrate(client, dehydratedState, options) {
    var _options_defaultOptions, _client_getDefaultOptions_hydrate;
    if (typeof dehydratedState !== "object" || dehydratedState === null) {
        return;
    }
    const mutationCache = client.getMutationCache();
    const queryCache = client.getQueryCache();
    var _options_defaultOptions_deserializeData, _ref;
    const deserializeData = (_ref = (_options_defaultOptions_deserializeData = options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.deserializeData) !== null && _options_defaultOptions_deserializeData !== void 0 ? _options_defaultOptions_deserializeData : (_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.deserializeData) !== null && _ref !== void 0 ? _ref : defaultTransformerFn;
    const mutations = dehydratedState.mutations || [];
    const queries = dehydratedState.queries || [];
    mutations.forEach((param)=>{
        let { state, ...mutationOptions } = param;
        var _client_getDefaultOptions_hydrate, _options_defaultOptions;
        mutationCache.build(client, {
            ...(_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.mutations,
            ...options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.mutations,
            ...mutationOptions
        }, state);
    });
    queries.forEach((param)=>{
        let { queryKey, state, queryHash, meta, promise, dehydratedAt } = param;
        const syncData = promise ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tryResolveSync"])(promise) : void 0;
        const rawData = state.data === void 0 ? syncData === null || syncData === void 0 ? void 0 : syncData.data : state.data;
        const data = rawData === void 0 ? rawData : deserializeData(rawData);
        let query = queryCache.get(queryHash);
        const existingQueryIsPending = (query === null || query === void 0 ? void 0 : query.state.status) === "pending";
        const existingQueryIsFetching = (query === null || query === void 0 ? void 0 : query.state.fetchStatus) === "fetching";
        if (query) {
            const hasNewerSyncData = syncData && // We only need this undefined check to handle older dehydration
            // payloads that might not have dehydratedAt
            dehydratedAt !== void 0 && dehydratedAt > query.state.dataUpdatedAt;
            if (state.dataUpdatedAt > query.state.dataUpdatedAt || hasNewerSyncData) {
                const { fetchStatus: _ignored, ...serializedState } = state;
                query.setState({
                    ...serializedState,
                    data
                });
            }
        } else {
            var _client_getDefaultOptions_hydrate, _options_defaultOptions;
            query = queryCache.build(client, {
                ...(_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.queries,
                ...options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.queries,
                queryKey,
                queryHash,
                meta
            }, // Reset fetch status to idle to avoid
            // query being stuck in fetching state upon hydration
            {
                ...state,
                data,
                fetchStatus: "idle",
                status: data !== void 0 ? "success" : state.status
            });
        }
        if (promise && !existingQueryIsPending && !existingQueryIsFetching && // Only hydrate if dehydration is newer than any existing data,
        // this is always true for new queries
        (dehydratedAt === void 0 || dehydratedAt > query.state.dataUpdatedAt)) {
            void query.fetch(void 0, {
                // RSC transformed promises are not thenable
                initialPromise: Promise.resolve(promise).then(deserializeData)
            });
        }
    });
}
;
 //# sourceMappingURL=hydration.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HydrationBoundary": ()=>HydrationBoundary
});
// src/HydrationBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
var HydrationBoundary = (param)=>{
    let { children, options = {}, state, queryClient } = param;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](options);
    optionsRef.current = options;
    const hydrationQueue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "HydrationBoundary.useMemo[hydrationQueue]": ()=>{
            if (state) {
                if (typeof state !== "object") {
                    return;
                }
                const queryCache = client.getQueryCache();
                const queries = state.queries || [];
                const newQueries = [];
                const existingQueries = [];
                for (const dehydratedQuery of queries){
                    const existingQuery = queryCache.get(dehydratedQuery.queryHash);
                    if (!existingQuery) {
                        newQueries.push(dehydratedQuery);
                    } else {
                        const hydrationIsNewer = dehydratedQuery.state.dataUpdatedAt > existingQuery.state.dataUpdatedAt || dehydratedQuery.promise && existingQuery.state.status !== "pending" && existingQuery.state.fetchStatus !== "fetching" && dehydratedQuery.dehydratedAt !== void 0 && dehydratedQuery.dehydratedAt > existingQuery.state.dataUpdatedAt;
                        if (hydrationIsNewer) {
                            existingQueries.push(dehydratedQuery);
                        }
                    }
                }
                if (newQueries.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                        queries: newQueries
                    }, optionsRef.current);
                }
                if (existingQueries.length > 0) {
                    return existingQueries;
                }
            }
            return void 0;
        }
    }["HydrationBoundary.useMemo[hydrationQueue]"], [
        client,
        state
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "HydrationBoundary.useEffect": ()=>{
            if (hydrationQueue) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                    queries: hydrationQueue
                }, optionsRef.current);
            }
        }
    }["HydrationBoundary.useEffect"], [
        client,
        hydrationQueue
    ]);
    return children;
};
;
 //# sourceMappingURL=HydrationBoundary.js.map
}),
}]);

//# sourceMappingURL=_9f24540c._.js.map
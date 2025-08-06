module.exports = {

"[project]/src/components/Carousel/Carousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Carousel": ()=>Carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function renderImgs(imgsInfo) {
    return imgsInfo.map((imgInfo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: String(imgInfo[0]),
            alt: imgInfo[1],
            className: "h-full w-auto cursor-pointer"
        }, void 0, false, {
            fileName: "[project]/src/components/Carousel/Carousel.tsx",
            lineNumber: 8,
            columnNumber: 50
        }, this));
}
function Carousel(props) {
    const [imgs, setImgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
    // const { data, error } = useQuery({
    //     queryKey: ["products"],
    //     queryFn: () => getProducts(),
    // });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black w-[100vw] h-[max(70vh,20rem)] max-w-[var(--max-w)] max-h-[calc(var(--max-h)*60/100)] overflow-x-slide overflow-y-clip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "corousel-arrow",
                children: "❮"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            imgs,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "corousel-arrow",
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/src/components/Carousel/Carousel.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Carousel/Carousel.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/@tanstack/query-core/build/modern/hydration.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/hydration.ts
__turbopack_context__.s({
    "defaultShouldDehydrateMutation": ()=>defaultShouldDehydrateMutation,
    "defaultShouldDehydrateQuery": ()=>defaultShouldDehydrateQuery,
    "dehydrate": ()=>dehydrate,
    "hydrate": ()=>hydrate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
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
            promise: query.promise?.then(serializeData).catch((error)=>{
                if (!shouldRedactErrors(error)) {
                    return Promise.reject(error);
                }
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error(`A query that was dehydrated as pending ended up rejecting. [${query.queryHash}]: ${error}; The error will be redacted in production builds`);
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
function dehydrate(client, options = {}) {
    const filterMutation = options.shouldDehydrateMutation ?? client.getDefaultOptions().dehydrate?.shouldDehydrateMutation ?? defaultShouldDehydrateMutation;
    const mutations = client.getMutationCache().getAll().flatMap((mutation)=>filterMutation(mutation) ? [
            dehydrateMutation(mutation)
        ] : []);
    const filterQuery = options.shouldDehydrateQuery ?? client.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? defaultShouldDehydrateQuery;
    const shouldRedactErrors = options.shouldRedactErrors ?? client.getDefaultOptions().dehydrate?.shouldRedactErrors ?? defaultShouldRedactErrors;
    const serializeData = options.serializeData ?? client.getDefaultOptions().dehydrate?.serializeData ?? defaultTransformerFn;
    const queries = client.getQueryCache().getAll().flatMap((query)=>filterQuery(query) ? [
            dehydrateQuery(query, serializeData, shouldRedactErrors)
        ] : []);
    return {
        mutations,
        queries
    };
}
function hydrate(client, dehydratedState, options) {
    if (typeof dehydratedState !== "object" || dehydratedState === null) {
        return;
    }
    const mutationCache = client.getMutationCache();
    const queryCache = client.getQueryCache();
    const deserializeData = options?.defaultOptions?.deserializeData ?? client.getDefaultOptions().hydrate?.deserializeData ?? defaultTransformerFn;
    const mutations = dehydratedState.mutations || [];
    const queries = dehydratedState.queries || [];
    mutations.forEach(({ state, ...mutationOptions })=>{
        mutationCache.build(client, {
            ...client.getDefaultOptions().hydrate?.mutations,
            ...options?.defaultOptions?.mutations,
            ...mutationOptions
        }, state);
    });
    queries.forEach(({ queryKey, state, queryHash, meta, promise, dehydratedAt })=>{
        const syncData = promise ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tryResolveSync"])(promise) : void 0;
        const rawData = state.data === void 0 ? syncData?.data : state.data;
        const data = rawData === void 0 ? rawData : deserializeData(rawData);
        let query = queryCache.get(queryHash);
        const existingQueryIsPending = query?.state.status === "pending";
        const existingQueryIsFetching = query?.state.fetchStatus === "fetching";
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
            query = queryCache.build(client, {
                ...client.getDefaultOptions().hydrate?.queries,
                ...options?.defaultOptions?.queries,
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
"[project]/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HydrationBoundary": ()=>HydrationBoundary
});
// src/HydrationBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/hydration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
var HydrationBoundary = ({ children, options = {}, state, queryClient })=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](options);
    optionsRef.current = options;
    const hydrationQueue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                    queries: newQueries
                }, optionsRef.current);
            }
            if (existingQueries.length > 0) {
                return existingQueries;
            }
        }
        return void 0;
    }, [
        client,
        state
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (hydrationQueue) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                queries: hydrationQueue
            }, optionsRef.current);
        }
    }, [
        client,
        hydrationQueue
    ]);
    return children;
};
;
 //# sourceMappingURL=HydrationBoundary.js.map
}),

};

//# sourceMappingURL=_f119beff._.js.map
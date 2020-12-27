const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(
            ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS((data) => onPerfEntry("CLS", data));
                getFID((data) => onPerfEntry("FID", data));
                getFCP((data) => onPerfEntry("FCP", data));
                getLCP((data) => onPerfEntry("LCP", data));
                getTTFB((data) => onPerfEntry("TTFB", data));
            }
        );
    }
};

export default reportWebVitals;

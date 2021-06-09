import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import type { ReportHandler } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
    if (onPerfEntry != null && typeof onPerfEntry === 'function') {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
    }
};

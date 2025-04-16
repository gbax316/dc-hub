export interface Service {
    id: string;
    name: string;
    dayOfWeek: DayOfWeek;
    startTime: string;
    endTime: string;
    description?: string;
}
export declare enum DayOfWeek {
    SUNDAY = "Sunday",
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday"
}
export interface Ministry {
    id: string;
    name: string;
    description: string;
    leaderId?: string;
    members?: string[];
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}
//# sourceMappingURL=types.d.ts.map
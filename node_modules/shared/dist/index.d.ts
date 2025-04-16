export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum UserRole {
    ADMIN = "admin",
    MEMBER = "member",
    GUEST = "guest"
}
export interface Event {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const formatDate: (date: Date) => string;
export * from './types';
//# sourceMappingURL=index.d.ts.map